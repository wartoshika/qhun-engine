/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Renderer } from './render';
import { Dimension, Storage } from '../shared';

/**
 * holds information about the possible client configuration
 */
export interface ClientConfig {

    /**
     * the renderer used to render the game
     */
    rederer: new () => Renderer;

    /**
     * the game height and width for the viewport
     */
    gameDimension: Dimension;

    /**
     * should the current fps be printed on the screen?
     */
    printFps?: boolean;

    /**
     * the storage class to use
     */
    storage?: Storage;
}
