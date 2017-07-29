/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Vector2D } from '../math';
import { Singleton } from '../helper';
import { GameObject } from '../entity';

/**
 * a class that handles rectangular collision detection
 */
export class RectangularCollisionDetection extends Singleton {

    /**
     * make a rectangular hittest of two GameObjects
     *
     * @param first the first object
     * @param second the second object
     */
    public checkCollision(first: GameObject, second: GameObject): boolean {

        const firstPos = first.getPosition();
        const firstSize = first.getSize();
        const secondPos = second.getPosition();
        const secondSize = second.getSize();

        // x asis collision
        const collisionX = firstPos.x + firstSize.x >= secondPos.x &&
            secondPos.x + secondSize.x >= firstPos.x;

        // y asix
        const collisionY = firstPos.y + firstSize.y >= secondPos.y &&
            secondPos.y + secondSize.y >= firstPos.y;

        // collision?
        return collisionX && collisionY;
    }
}
