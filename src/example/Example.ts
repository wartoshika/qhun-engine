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

import { Player } from './entity/Player';
import { LoadingScreenScene } from '../client/scene';
import { Input } from '../client/input';
import { Vector2D, Dimension } from '../shared/math';
import { World } from '../client/world';
import { Camera } from '../client/camera';

class MyAwesomeGame extends Client {

    private player: Player;

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
            name: 'player',
            path: 'asset/image/player.png'
        });

        TileMap.register({
            name: 'world1',
            path: 'asset/image/world1.png',
            tileMapDimension: new Dimension(32, 32)
        });
    }

    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    @logMethodCall
    public loaded(game: Game): void {

        // add the player to the game
        this.player = new Player();
        game.add(this.player);
        game.loadScene(new LoadingScreenScene());

        // play idle animation
        this.player.playAnimation('idle', true);

        // load world
        game.add(new World(
            game, 'world1', new Camera()
        ));


    }

    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    public update(game: Game, input: Input): void {

        let keys = input.getArrowKeys();

        // move the player
        if (keys.down) {

            this.player.setPosition(this.player.getPosition().add(
                new Vector2D(0, 5)
            ));
        } else if (keys.up) {

            this.player.setPosition(this.player.getPosition().add(
                new Vector2D(0, -5)
            ));
        }

        if (keys.left) {

            this.player.setPosition(this.player.getPosition().add(
                new Vector2D(-5, 0)
            ));
        } else if (keys.right) {

            this.player.setPosition(this.player.getPosition().add(
                new Vector2D(5, 0)
            ));
        }
    }
}

// start the game
new MyAwesomeGame();