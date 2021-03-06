/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export interface OnWorldInit {

    /**
     * will be fired if the world is loaded and able to
     * add entities
     */
    onWorldInit(): void;
}
