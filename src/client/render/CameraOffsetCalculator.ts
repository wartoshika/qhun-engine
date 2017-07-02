/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Camera } from '../camera';
import { AssetLoader, Image, AssetType } from '../asset';
import { RenderableEntity } from '../entity';
import { Dimension } from '../../shared/math';

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
     */
    public static imageScaleDrawEntity(entity: RenderableEntity, camera: Camera): any[] {

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
        return [
            entityImage,
            0,
            0,
            entityImage.width,
            entityImage.height,
            entity.getPosition().x,
            entity.getPosition().y,
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
     */
    public static imageScaleDrawTile(originalPosition: Dimension, tile: Image, camera: Camera): any[] {

        // get the current camera scale
        let scale = camera.getScale();

        // get the tile image as BitmapImage
        let tileImage = <ImageBitmap>tile.getData();

        // calculate the scale
        let newWidth = tileImage.width * scale;
        let newHeight = tileImage.width * scale;


        // calculate position
        // @todo: result is not 100% accurate... need further investigations
        return [
            tileImage,
            0,
            0,
            tileImage.width,
            tileImage.height,
            originalPosition.x * scale,
            originalPosition.y * scale,
            newWidth,
            newHeight
        ];
    }
}