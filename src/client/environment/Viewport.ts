/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Point2 } from '../../shared/math';

/**
 * a class to handle the window viewport things like
 * getting the player's screen width and height
 */
export class Viewport {

    /**
     * getting the current window size
     */
    public static getWindowDimension(): Point2 {

        return Point2.from(
            window.innerWidth,
            window.innerHeight
        );
    }
}
