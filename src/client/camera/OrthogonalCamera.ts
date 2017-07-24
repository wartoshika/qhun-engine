/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { BaseCamera } from './BaseCamera';
import { CameraMode } from './CameraMode';

import {
    Entity, Vector2D, GenericEventEmitter, EventName
} from '../../shared';

/**
 * an orthogonal camera for the view of the player
 */
export class OrthogonalCamera extends BaseCamera {

    /**
     * the camera mode
     */
    protected mode: CameraMode = CameraMode.Orthogonal;

    /**
     * the dimension of the drawable area
     */
    private drawingDimension = Vector2D.from(0, 0);

    /**
     * the event emitter instance. cameras are no singleton
     */
    private eventEmitter = GenericEventEmitter.getInstance<GenericEventEmitter>();

    constructor(
        scale: number = 1
    ) {

        super(scale);

        // listen for game area size change change
        this.eventEmitter.on(EventName.WindowResize, (newSize: Vector2D) => {

            this.drawingDimension = newSize;
        });
    }

    /**
     * is the given entity visible by the given camera?
     */
    public isEntityVisible(entity: Entity): boolean {

        // get the size of the entity
        const entityDimension = Vector2D.from(
            entity.getWidth(),
            entity.getHeight()
        );

        // calculate the position of the entity including camera scale
        const entityPosition = entity.getPosition().multiply(
            this.getScaleVector()
        );

        // substract entity position and size for a max offset vector
        const entityScaledPoisition = entityPosition.substract(entityDimension);

        // check
        return this.drawingDimension.x >= entityScaledPoisition.x
            &&
            this.drawingDimension.y >= entityScaledPoisition.y;
    }

    /**
     * translates the given position of an entity or asset
     * to a new position including scale and entity following
     */
    public translatePosition(currentPosition: Vector2D): Vector2D {

        return currentPosition.multiply(this.getScaleVector());
    }
}
