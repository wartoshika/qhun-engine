/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { EntityRenderer } from './EntityRenderer';
import { Singleton } from '../../shared/helper/Singleton';
import { RenderableEntity } from '../entity';
import { Camera } from '../camera/Camera';
import { WorldRenderer } from './WorldRenderer';
import { Vector2D, EventName, Log } from '../../shared';

/**
 * an entity renderer class that handles renderer unspecific things
 */
export abstract class BaseEntityRenderer extends Singleton implements EntityRenderer {

    /**
     * the current world that is renderes by the world renderer
     */
    protected worldRenderer: WorldRenderer;

    /**
     * the current drawing dimension
     */
    protected drawingDimension: Vector2D;

    /**
     * logger instance
     */
    private logger: Log = Log.getLogger(BaseEntityRenderer.name);

    constructor() {

        super();

        // register resize event
        this.on(EventName.WindowResize, (newWindowSize: Vector2D) => {

            // apply the new window size to determinate the right
            // camera offset and visibillity
            this.drawingDimension = newWindowSize;
        });
    }

    /**
     * renders the given entity
     */
    public abstract renderEntity(entity: RenderableEntity): void;

    /**
     * set the world renderer
     */
    public setWorldRenderer(worldRenderer: WorldRenderer): void {

        this.worldRenderer = worldRenderer;
    }

    /**
     * is the given entity visible by the given camera?
     */
    public entityVisibleByCamera(entity: RenderableEntity): boolean {

        // check if the worldrendere is given
        if (!this.worldRenderer) {

            this.logger.warning('Trying to access worldRenderer but the worldRenderer has not been set!');
            return false;
        }

        // get the camera of the current world
        const camera = this.worldRenderer.getActiveCamera();
        const world = this.worldRenderer.getWorld();

        // get the size of the entity
        const entityDimension = Vector2D.from(
            entity.getWidth(),
            entity.getHeight()
        );

        // calculate the position of the entity including camera scale
        const entityPosition = entity.getPosition().multiply(
            camera.getScaleVector()
        );

        // substract entity position and size for a max offset vector
        const maxOffsetVector = entityPosition.substract(entityDimension);

        // check
        return this.drawingDimension.x >= maxOffsetVector.x
            &&
            this.drawingDimension.y >= maxOffsetVector.y;
    }

}
