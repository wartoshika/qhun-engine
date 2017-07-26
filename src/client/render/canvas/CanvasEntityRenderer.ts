/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { BaseEntityRenderer } from '../BaseEntityRenderer';
import { RenderableEntity } from '../../entity/RenderableEntity';
import { Image, AssetType } from '../../asset';
import { Vector2D } from '../../../shared';

/**
 * an entity renderer for canvas
 */
export class CanvasEntityRenderer extends BaseEntityRenderer {

    constructor(
        drawingDimension: Vector2D,
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

        // get image and scale vector
        const entityImageName = entity.getImage();
        let entityScaleVector = Vector2D.from(entity.getScale());

        // get the image from the asset store
        const entityImage = this.assetStorage.getAsset<Image>(
            entityImageName, AssetType.Image
        ).getData() as ImageBitmap;

        // sacle the entity
        entityScaleVector = entityScaleVector.multiply(Vector2D.from(
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
    }

}
