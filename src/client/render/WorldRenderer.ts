/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { World } from '../world/World';
import { Camera } from '../camera/Camera';

/**
 * every world renderer should implement this
 */
export interface WorldRenderer {

    /**
     * renders all clusters into a cluster cache to speed
     * up the drawing process if the renderer
     */
    preRenderClusterTiles(): Promise<void>;

    /**
     * renders the currently visible world
     */
    render(): void;

    /**
     * get the current world that should be rendered
     */
    getWorld(): World;

    /**
     * get the currently active camera for the rendering process
     */
    getActiveCamera(): Camera;
}
