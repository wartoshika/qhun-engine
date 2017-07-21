/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { BaseEntityRenderer } from '../BaseEntityRenderer';
import { RenderableEntity } from '../../entity/RenderableEntity';

/**
 * an entity renderer for canvas
 */
export class CanvasEntityRenderer extends BaseEntityRenderer {

    /**
     * renders the given entity
     */
    public renderEntity(entity: RenderableEntity): void {

        // get the camera to check if the entity is visible
        const camera = this.worldRenderer.getActiveCamera();

        // check if the entity is visible
        if (!entity.isVisible() || !camera.isEntityVisible(entity)) return;

        // get the position for the entity

    }

}
