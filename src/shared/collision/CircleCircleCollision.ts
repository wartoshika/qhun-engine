/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CollidableEntity } from '../entity';

/**
 * calculates the collision between entities that both have a circle collision type
 */
export class CircleCircleCollision {

    /**
     * check if two entities has been collided
     *
     * @param entity1 the first entity
     * @param entity2 the second entity
     */
    public static check(entity1: CollidableEntity, entity2: CollidableEntity): boolean {

        // check if the two circles collide
        return Math.sqrt(
            Math.pow(entity1.getPosition().x - entity2.getPosition().x, 2)
            +
            Math.pow(entity1.getPosition().y - entity2.getPosition().y, 2)
        ) < entity1.getWidth() / 2;
    }
}