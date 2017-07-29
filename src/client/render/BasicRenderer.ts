/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton, Point2 } from '../../shared';
import { Renderer } from './Renderer';
import { Camera } from '../camera/Camera';
import { ClientConfig } from '../ClientConfig';
import { World } from '../world/World';
import { WorldRenderer } from './WorldRenderer';
import { EntityRenderer } from './EntityRenderer';

/**
 * the basic renderer class that all renderers should extend
 */
export abstract class BasicRenderer extends Singleton implements Renderer {

    /**
     * holder of fps things
     */
    protected fps: {
        fps: number,
        now?: number,
        lastUpdate: number,
        filter: number
    } = {
        fps: 0,
        lastUpdate: +new Date(),
        filter: 50
    };

    /**
     * the currently visible camera
     */
    protected currentCamera: Camera = null;

    /**
     * holder of the world renderer
     */
    protected worldRenderer: WorldRenderer = null;

    /**
     * holder of the entity renderer
     */
    protected entityRenderer: EntityRenderer = null;

    /**
     * sets up the renderer
     *
     * @param clientConfig the current config
     */
    public abstract setup(clientConfig: ClientConfig): void;

    /**
     * the method where all the magic takes place. called in gameloop
     * to render all entities and other stuff.
     */
    public abstract render(): void;

    /**
     * get the current drawing size in pixel
     */
    public abstract getDrawingDimension(): Point2;

    /**
     * set the current visible world
     */
    public abstract async setWorld(world: World): Promise<void>;

    /**
     * get the current world
     */
    public getWorld(): World {

        return this.worldRenderer.getWorld();
    }

    /**
     * set the current camera as the users view into the game
     */
    public setCamera(camera: Camera): void {

        this.currentCamera = camera;
    }

    /**
     * get the current active camera
     */
    public getCamera(): Camera {

        return this.currentCamera;
    }

    /**
     * get the last drawing area update timestamp
     */
    public getLastUpdate(): number {

        return this.fps.lastUpdate;
    }

    /**
     * print the current fps on the canvas
     */
    protected calculateFps(): void {

        // @see https://stackoverflow.com/questions/5078913/html5-canvas-performance-calculating-loops-frames-per-second
        const thisFrameFps = 1000 / ((this.fps.now = +new Date()) - this.fps.lastUpdate);

        // if there was an update
        if (this.fps.now !== this.fps.lastUpdate) {

            // yes, calculate the new fps
            this.fps.fps += (thisFrameFps - this.fps.fps) / this.fps.filter;
            this.fps.lastUpdate = this.fps.now;
        }
    }

    /**
     * print the current fps on the screen
     *
     * @param fps the current fps
     */
    protected abstract printFps(fps: number): void;
}
