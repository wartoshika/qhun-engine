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

        // currently render all entities
        return true;
    }

    /**
     * translates the given position of an entity or asset
     * to a new position including scale and entity following
     */
    public translatePosition(currentPosition: Vector2D): Vector2D {

        return currentPosition.multiply(this.getScaleVector());
    }
}
