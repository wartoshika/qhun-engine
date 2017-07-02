/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Camera } from '../camera';
import { AssetLoader, Image, AssetType } from '../asset';
import { RenderableEntity } from '../entity';
import { Vector2D, Dimension } from '../../shared/math';

/**
 * a helper class to calculate the right offset and scale of objects
 * when a camera is unsed to display the game
 */
export class CameraOffsetCalculator {

    private static assetLoader: AssetLoader = AssetLoader.getInstance<AssetLoader>();

    /**
     * calculates the entity offset and scaleability of its image by using one
     * camera object.
     * the return array can be directiy used to draw the image
     *
     * @return the array for ctx.drawImage() or boolean === false if the entity is not within the canvas
     */
    public static imageScaleDrawEntity(entity: RenderableEntity, camera: Camera): any[] | boolean {

        // get the entity image scale from the camera
        let scale = camera.getScale();

        // get the original image as ImageBitmap
        let entityImage = <ImageBitmap>CameraOffsetCalculator.assetLoader.getAsset<Image>(
            entity.getImage(), AssetType.Image
        ).getData();

        // calculate the scale
        let newWidth = entityImage.width * scale * entity.getScale();
        let newHeight = entityImage.width * scale * entity.getScale();

        // calculate position
        let newPosition = CameraOffsetCalculator.calculatePositionOffsetForCameraFollow(
            entity.getPosition(), camera
        );

        // check if visible
        if (!CameraOffsetCalculator.positionIsWithinCameraRange(
            newPosition, new Vector2D(newWidth, newHeight)
        )) return false;

        return [
            entityImage,
            0,
            0,
            entityImage.width,
            entityImage.height,
            newPosition.x,
            newPosition.y,
            newWidth,
            newHeight
        ];
    }

    /**
     * a helper function to draw a tile with camera and offset calculations
     *
     * @param originalPosition the position of the tile where it should originally be drawn
     * @param tile the image to draw
     * @param camera the active camera
     *
     * @return the array for ctx.drawImage() or boolean === false if the entity is not within the canvas
     */
    public static imageScaleDrawTile(originalPosition: Dimension, tile: Image, camera: Camera): any[] | boolean {

        // get the current camera scale
        let scale = camera.getScale();

        // get the tile image as BitmapImage
        let tileImage = <ImageBitmap>tile.getData();

        // calculate the scale
        let newWidth = tileImage.width * scale;
        let newHeight = tileImage.height * scale;

        // calculate position
        // @todo: result is not 100% accurate... need further investigations
        let newPosition = CameraOffsetCalculator.calculatePositionOffsetForCameraFollow(
            new Vector2D(originalPosition.x * scale, originalPosition.y * scale),
            camera
        );

        // check if visible
        if (!CameraOffsetCalculator.positionIsWithinCameraRange(
            newPosition, new Vector2D(newWidth, newHeight)
        )) return false;

        return [
            tileImage,
            0,
            0,
            tileImage.width,
            tileImage.height,
            newPosition.x,
            newPosition.y,
            newWidth,
            newHeight
        ];
    }

    /**
     * check if an object is visible by the camera
     *
     * @param position
     * @param objectDimension
     */
    private static positionIsWithinCameraRange(position: Vector2D, objectDimension: Vector2D): boolean {

        // @todo: no check with window here, use the canvas object itself
        let canvasDim = CameraOffsetCalculator.getCanvasDimension();
        let canvasWidth = canvasDim.x;
        let canvasHeight = canvasDim.y;

        // add the two vectors
        let maxOffsetVector = position.substract(objectDimension);

        // check if visible
        return canvasWidth >= maxOffsetVector.x && canvasHeight >= maxOffsetVector.y;
    }

    /**
     * get the current canvas dimension
     */
    private static getCanvasDimension(): Vector2D {

        let canvas = document.querySelector('canvas');
        return new Vector2D(
            canvas.width,
            canvas.height
        );
    }

    /**
     * calculates the position offset for camera following
     */
    private static calculatePositionOffsetForCameraFollow(originalPosition: Vector2D, camera: Camera): Vector2D {

        // first check if there is any following
        let entity = camera.getFollowingEntity();

        // if no following is active, return the original position
        if (!entity) return originalPosition;

        // calculate the offset. the entity should be in the center of the screen
        let canvasDim = CameraOffsetCalculator.getCanvasDimension();

        // calculate the center position for the entity and shift the other
        // vectors.
        let tmpVector = originalPosition.substract(entity.getPosition()).add(
            canvasDim.divide(new Vector2D(2, 2))
        );

        // now check if the camera has world bounds
        let worldBounds = camera.getWorldBounds();
        if (!worldBounds) return tmpVector;

        // check if the original vector is smaller than the shifted vector
        // this will bound the left and top world bounds
        if (originalPosition.x < tmpVector.x) {

            // reset the x axis to fix the camera
            tmpVector.x = originalPosition.x;
        }

        if (originalPosition.y < tmpVector.y) {

            // reset the y axis to fix the camera
            tmpVector.y = originalPosition.y;
        }

        // now the left and bottom bounds
        // we need the world dimension to check if the camera reaches
        // the end of the world in the visible area
        let entityPosition = entity.getPosition();
        let worldBoundCanvas = worldBounds.substract(canvasDim.half());

        if (entityPosition.x > worldBoundCanvas.x) {

            // get the original position and substract
            // the distance from world bounds and canvas dim
            tmpVector.x = originalPosition.x - (worldBounds.x - canvasDim.x);
        }

        if (entityPosition.y > worldBoundCanvas.y) {

            // get the original position and substract
            // the distance from world bounds and canvas dim
            tmpVector.y = originalPosition.y - (worldBounds.y - canvasDim.y);
        }

        // return the corrected position vector
        return tmpVector;
    }
}