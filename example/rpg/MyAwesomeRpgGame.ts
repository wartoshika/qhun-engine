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
            dimension: [32, 32],
            layerCount: 2
        });
    }

    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    @logMethodCall
    public loaded(myGame: Game): void {

        // create entities
        // link is a CollidableEntity so collision detection
        // is automaticly on
        this.link = new Link();

        // create game objects
        const camera = new OrthogonalCamera(1.5);
        const world = new Level1(
            myGame, 'level1'
        );

        // set tile collision
        world.setCollisionDetection(...[
            137, 138, 139, 160, 161, 163, 164, 165, 166, 167, 168,
            208, 209, 210
        ]);

        // add game objects
        myGame.add(this.link, world, camera);

        // load the world
        myGame.loadWorld('level1');

        // follow the player with the camera
        camera.followEntity(this.link);

        // let the camera stick to the world
        camera.setWorldBounds(world);
    }

    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    public update(myGame: Game, input: Input): void {

        // handle movement for link
        this.link.handleMovement(input.getArrowKeys());
    }
}

// start the game
const game = new MyAwesomeRpgGame();
