/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { RenderableEntity } from '../entity';
import { Singleton } from '../../shared/helper';
import { Image } from '../asset';
import { Game } from '../Game';
import { ClientConfig } from '../ClientConfig';

/**
 * the basic renderer class that all renderers should extend
 */
export abstract class BasicRenderer extends Singleton {

    private entities: RenderableEntity[] = [];

    /**
     * holds the game instance
     */
    protected gameInstance: Game;

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
     * sets up the renderer
     *
     * @param clientConfig the current config
     */
    public setup(clientConfig: ClientConfig): void {


    }

    /**
     * get all renderable entities
     */
    protected getRenderableEntities(): RenderableEntity[] {

        let renderableEntities: RenderableEntity[] = [];
        this.entities.forEach(entity => {

            // only visible entities and entities that have an image
            if (entity.isVisible() && entity.getImage())
                renderableEntities.push(entity);
        });

        // just return the currently visible entities
        return renderableEntities;
    }

    /**
     * print the current fps on the canvas
     */
    protected calculateFps(): void {

        // @see https://stackoverflow.com/questions/5078913/html5-canvas-performance-calculating-loops-frames-per-second
        let thisFrameFps = 1000 / ((this.fps.now = +new Date()) - this.fps.lastUpdate);

        // if there was an update
        if (this.fps.now != this.fps.lastUpdate) {

            // yes, calculate the new fps
            this.fps.fps += (thisFrameFps - this.fps.fps) / this.fps.filter;
            this.fps.lastUpdate = this.fps.now;
        }
    }

    /**
     * add an entity to the current game scene
     */
    public addEntity(entity: RenderableEntity): void {

        this.entities.push(entity);
    }

    /**
     * print the current fps on the screen
     *
     * @param fps the current fps
     */
    protected abstract printFps(fps: number): void;
}