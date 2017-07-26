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
     * the event emitter instance
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

        // currently render all entities
        return true;
    }

    /**
     * translates the given position of an entity or asset
     * to a new position including scale and entity following
     */
    public translatePosition(currentPosition: Vector2D): Vector2D {

        // add camera scale to currentPosition
        currentPosition = currentPosition.multiply(this.getScaleVector());

        // calculate the normal new position without following an entity
        const newPosition = currentPosition
            .substract(this.position);

        // entity follow?
        const entity = this.getFollowingEntity();
        if (!entity) return newPosition;

        // get the position of the entity and center it, translate other positions
        const centerVector = this.drawingDimension.half();
        const translateVector = entity.getPosition()
            .multiply(this.getScaleVector())
            .substract(centerVector);

        // translate the original position
        return currentPosition.substract(translateVector);
    }

}
