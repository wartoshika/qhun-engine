/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * a basic holder of x and y values as one datatype
 */
export class Dimension {

    /**
     *
     * @param x the x coordinate
     * @param y the y coordinate
     */
    constructor(
        public x: number = 0,
        public y: number = 0
    ) {

    }
}
