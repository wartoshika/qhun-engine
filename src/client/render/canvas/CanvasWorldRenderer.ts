/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { World } from '../../world/World';
import { Camera } from '../../camera/Camera';
import { WorldRenderer } from '../WorldRenderer';
import { Singleton, EventName } from '../../../shared';

/**
 * the canvas world renderer implementation
 */
export class CanvasWorldRenderer extends Singleton implements WorldRenderer {

    constructor(
        private world: World,
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D,
        private camera: Camera
    ) {

        super();

        // listen for camera change
        this.on(EventName.CameraChange, (eventCamera: Camera, eventWorld: World) => {

            if (this.world === eventWorld)
                this.camera = eventCamera;
        });
    }

    /**
     * get the current world
     */
    public getWorld(): World {

        return this.world;
    }

    /**
     * get the currently active camera
     */
    public getActiveCamera(): Camera {

        return this.camera;
    }

    /**
     * renders all clusters into a cluster cache to speed
     * up the drawing process if the renderer
     */
    public async preRenderClusterTiles(): Promise<void> {
        //
    }

    /**
     * render the world!
     */
    public render(): void {

        // generate clusters and display a cluster of one or many tiles
        // are visible by the active camera

    }

}
