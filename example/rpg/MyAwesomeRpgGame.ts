/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
    Client, CanvasRenderer, Viewport, Game,
    LoadingScreenScene, Input, World, OrthogonalCamera,
    AssetRegister
} from '@qhun-engine/client';

import {
    logMethodCall
} from '@qhun-engine/shared';

import { Link } from './entity/Link';
import { Level1 } from './world/Level1';

class MyAwesomeRpgGame extends Client {

    private link: Link;

    constructor() {

        super({
            gameDimension: Viewport.getWindowDimension(),
            rederer: CanvasRenderer,
            printFps: true
        });

    }

    /**
     * preload function that allows to load sprites and do some heavy
     * stuff before the game actually starts
     */
    public preload(registry: AssetRegister): void {

        registry.add('Sprite', {
            name: 'link_run',
            path: 'example/rpg/asset/image/link_run.png'
        });

        registry.add('TileMap', {
            name: 'level1',
            path: 'example/rpg/asset/image/world1.png',
            worldUrl: 'example/rpg/asset/world/level1.json',
            tileCollision: [
                137, 138, 139, 160, 161, 163, 164, 165, 166, 167, 168,
                208, 209, 210
            ]
        });
    }

    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    @logMethodCall
    public async loaded(myGame: Game): Promise<void> {

        // create player entity
        this.link = new Link();

        // create game objects
        const camera = new OrthogonalCamera(1.25);
        const world = new Level1('level1');

        // add global world things
        world.addEntity(this.link);
        world.addCamera(camera);

        // camera should follow link
        camera.followEntity(this.link);

        // finally load the world
        await myGame.loadWorld(world);
        world.show(camera);
    }

    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    public update(myGame: Game, input: Input): void {

        // get the arrow keys
        const arrowKeys = input.getArrowKeys();

        // handle movement for link
        if (arrowKeys.right) this.link.translatePosition(5, 0);
        else if (arrowKeys.left) this.link.translatePosition(-5, 0);
        if (arrowKeys.up) this.link.translatePosition(0, -5);
        else if (arrowKeys.down) this.link.translatePosition(0, 5);

    }
}

// start the game
const game = new MyAwesomeRpgGame();
