/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Client } from '../client/Client';
import { CanvasRenderer } from '../client/render';
import { Viewport } from '../client/environment';
import { Game } from '../client/Game';

import { Image, Sprite, TileMap, AssetLoader } from '../client/asset';
import { logMethodCall } from '../shared/decorator';

import { Link } from './entity/Link';
import { LoadingScreenScene } from '../client/scene';
import { Input } from '../client/input';
import { Vector2D, Dimension } from '../shared/math';
import { World } from '../client/world';
import { Camera } from '../client/camera';

class MyAwesomeGame extends Client {

    private player: Link;

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
    public preload(): void {

        Sprite.register({
            name: 'link_run',
            path: 'asset/image/link_run.png'
        });

        TileMap.register({
            name: 'world1',
            path: 'asset/image/world1.png',
            tileMapDimension: new Dimension(32, 32),
            layerCount: 2
        });
    }

    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    @logMethodCall
    public loaded(game: Game): void {

        // create entities
        this.player = new Link();

        // create game objects
        let camera = new Camera(1.5);
        let world = new World(
            game, 'world1'
        );

        // add game objects
        game.add(this.player, world, camera);

        // load the world
        game.loadWorld('world1');

        // follow the player with the camera
        camera.followEntity(this.player);

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
    public update(game: Game, input: Input): void {

        // handle movement for link
        this.player.handleMovement(input.getArrowKeys());
    }
}

// start the game
new MyAwesomeGame();