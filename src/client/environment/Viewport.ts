/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Dimension } from 'shared/math';

/**
 * a class to handle the window viewport things like
 * getting the player's screen width and height
 */
export class Viewport {

    /**
     * getting the current window dimension
     */
    public static getWindowDimension(): Dimension {

        return new Dimension(
            window.innerWidth,
            window.innerHeight
        );
    }
}