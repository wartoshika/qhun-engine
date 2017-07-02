/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { GravityForce } from '../physic';
import { Vector2D } from '../../shared/math';

/**
 * a class to handle world spefific things
 */
export class World {

    /**
     * @param name the name of the world or level
     * @param gravity the gravity that is present on this world
     */
    constructor(
        private name: string,
        private gravity: Vector2D<GravityForce>
    ) { }
}