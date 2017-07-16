/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CollisionType } from '../../shared/collision';
import { CollidableEntity } from './CollidableEntity';

/**
 * an interface that mark an entity as collidable with other
 * collidable entities
 */
export interface CanCollide {

    /**
     * get the entities collision type
     */
    getCollisionType(): CollisionType;

    /**
     * an event handler that will fire if another entity collided with this instance
     */
    onCollision(otherEntity: CollidableEntity): void;
}
