/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Vector2D } from '../math';

/**
 * the base class for all game entities
 */
export abstract class Entity {

    constructor(
        protected position: Vector2D = new Vector2D(0, 0)
    ) { }

    /**
     * get the current position of the entity ( top left )
     */
    public getPosition(): Vector2D {

        return this.position;
    }

    /**
     * set the entities new position
     *
     * @param position the new position
     */
    public setPosition(position: Vector2D): void {

        this.position = position;
    }
}