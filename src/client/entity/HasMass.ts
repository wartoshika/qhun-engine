/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * an interface to let an entity interact with the world gravity
 */
export interface HasMass {

    /**
     * get the current mass of the entity
     */
    getMass(): number;

    /**
     * set a new mass to an entity
     */
    setMass(mass: number): void;
}
