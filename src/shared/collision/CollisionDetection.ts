/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton } from '../helper';
import { GameObject } from '../entity';
import { CollisionType } from '../collision/CollisionType';
import { RectangularCollisionDetection } from './RectangularCollisionDetection';

/**
 * a wrapper class for the different collision types
 */
export class CollisionDetection extends Singleton {

    /**
     * rectangular hit tests
     */
    protected rectangularCollision = RectangularCollisionDetection
        .getInstance<RectangularCollisionDetection>();

    /**
     * test if two game objects collides.
     *
     * @param first the first object
     * @param second the second object
     */
    public hitTest(first: GameObject, second: GameObject): boolean {

        // AABB - AABB
        if (
            first.getCollisionType() === CollisionType.Rectangle
            &&
            second.getCollisionType() === CollisionType.Rectangle
        ) return this.rectangularCollision.checkCollision(first, second);

        // prepare error
        const firstType = CollisionType[first.getCollisionType()];
        const secondType = CollisionType[second.getCollisionType()];
        throw new Error(`Collision detection for type ${firstType} <-> ${secondType} is not implemented!`);
    }

}
