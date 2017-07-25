/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton } from '../shared/helper/Singleton';
import { World } from './world/World';
import { Log } from '../shared/log/Log';
import { Renderer } from './render/Renderer';

/**
 * a class that handles adding of entities, cameras, physics ...
 */
export class Game extends Singleton {

    /**
     * the current active world instance
     */
    protected currentWorld: World;

    /**
     * logger instance
     */
    private logger = Log.getLogger(Game.name);

    constructor(
        private renderer: Renderer
    ) {
        super();

        // bind singleton
        Game.bindInstance(this);
    }

    /**
     * load the given world
     *
     * @param world the world name to load
     */
    public async loadWorld(world: World): Promise<void> {

        // set the current world variable
        this.currentWorld = world;

        // render the world tile clusters
        this.currentWorld.generateWorld();

        // set the world in the renderer
        await this.renderer.setWorld(this.currentWorld);

        // world on init event
        this.currentWorld.onWorldInit();
    }
}
