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
 * an orthographic camera for the view of the player
 */
export class OrthographicCamera extends BaseCamera {

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
        let newPosition = currentPosition
            .substract(this.position);

        // entity follow?
        const entity = this.getFollowingEntity();
        if (!entity) return newPosition;

        // get the position of the entity and center it, translate other positions
        const centerVector = this.drawingDimension
            .half();

        // center entity image:
        // centerVector = centerVector.substract(Vector2D.from(entity.getWidth(), entity.getHeight()));

        const translateVector = entity.getPosition()
            .multiply(this.getScaleVector())
            .substract(centerVector);

        // translate the original position
        newPosition = currentPosition.substract(translateVector);

        // check if the original vector is smaller than the shifted vector
        // this will bound the left and top world bounds
        if (currentPosition.x < newPosition.x) {

            // reset the x axis to fix the camera
            newPosition.x = currentPosition.x;
        }

        if (currentPosition.y < newPosition.y) {

            // reset the y axis to fix the camera
            newPosition.y = currentPosition.y;
        }

        // check if the camera hit the right and bottom world bound
        // get the entity position with camera scale
        const ep = entity.getPosition()
            .multiply(this.getScaleVector());

        // get worldbounds, add the camera scale and reduce it by the
        // center vector to test against the entity position
        const worldBounds = Vector2D.from(
            this.getWorldBounds().x,
            this.getWorldBounds().y
        ).multiply(this.getScaleVector());
        const worldBoundCenter = worldBounds.substract(centerVector);

        // test camera world bounds collision
        if (ep.x > worldBoundCenter.x) {

            // camera collided with the right bound!
            newPosition.x = currentPosition.x - (worldBounds.x - this.drawingDimension.x);
        }

        if (ep.y > worldBoundCenter.y) {

            // camera collided with the bottom bound!
            newPosition.y = currentPosition.y - (worldBounds.x - this.drawingDimension.y);
        }

        // return the corrected position vector
        return newPosition;
    }

}
