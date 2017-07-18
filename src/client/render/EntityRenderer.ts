/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Camera } from '../camera';
import { RenderableEntity } from '../entity';
import { WorldRenderer } from './WorldRenderer';

/**
 * an entity renderer interface for classes that are capable of rendering
 * entities
 */
export interface EntityRenderer {

    /**
     * is the given entity visible by the given camera?
     */
    entityVisibleByCamera(entity: RenderableEntity, camera: Camera): boolean;

    /**
     * renders the given entity
     */
    renderEntity(entity: RenderableEntity): void;

    /**
     * set the world renderer
     */
    setWorldRenderer(worldRenderer: WorldRenderer): void;
}
