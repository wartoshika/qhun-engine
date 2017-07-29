/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { BaseEntityRenderer } from '../BaseEntityRenderer';
import { RenderableEntity } from '../../entity/RenderableEntity';
import { Image, AssetType } from '../../asset';
import { Point2 } from '../../../shared';

/**
 * an entity renderer for canvas
 */
export class CanvasEntityRenderer extends BaseEntityRenderer {

    constructor(
        drawingDimension: Point2,
        protected ctx: CanvasRenderingContext2D
    ) {
        super(drawingDimension);
    }

    /**
     * renders the given entity
     */
    public renderEntity(entity: RenderableEntity): void {

        // get the camera to check if the entity is visible
        const camera = this.worldRenderer.getActiveCamera();

        // check if the entity is visible
        if (!entity.isVisible() || !camera.isEntityVisible(entity)) return;

        // get the position for the entity
        const positionVector = camera.translatePosition(entity.getPosition());

        // get image and scale point
        const entityImageName = entity.getImage();
        let entityScaleVector = Point2.from(entity.getScale());

        // get the image from the asset store
        const entityImage = this.assetStorage.getAsset<Image>(
            entityImageName, AssetType.Image
        ).getData() as ImageBitmap;

        // sacle the entity
        entityScaleVector = entityScaleVector.multiply(Point2.from(
            entityImage.width, entityImage.height
        ));

        // draw the image
        this.ctx.drawImage(
            entityImage,
            0, 0,
            entityImage.width, entityImage.height,
            positionVector.x, positionVector.y,
            entityScaleVector.x, entityScaleVector.y
        );

        // draw entity position cross
        this.drawEntityPointCross(positionVector);
    }

    /**
     * draws a cross at the entity position
     *
     * @param entity the entity to draw a cross for
     */
    private drawEntityPointCross(entityPosition: Point2): void {

        const crossDim = 5;

        this.ctx.beginPath();
        this.ctx.strokeStyle = '#ff0000';
        this.ctx.moveTo(entityPosition.x - crossDim, entityPosition.y);
        this.ctx.lineTo(entityPosition.x + crossDim, entityPosition.y);
        this.ctx.moveTo(entityPosition.x, entityPosition.y - crossDim);
        this.ctx.lineTo(entityPosition.x, entityPosition.y + crossDim);
        this.ctx.stroke();
    }

}
