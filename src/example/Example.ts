import { Client } from 'client/Client';
import { CanvasRenderer } from 'client/render';
import { Viewport } from 'client/environment';
import { Game } from 'client/Game';

import { Image, Sprite, AssetLoader } from 'client/asset';
import { logMethodCall } from 'shared/decorator';

import { Player } from 'example/entity/Player';
import { LoadingScreenScene } from 'client/scene';

class MyAwesomeGame extends Client {

    private player: Player;

    constructor() {

        super({
            gameDimension: Viewport.getWindowDimension(),
            rederer: CanvasRenderer
        });

    }

    /**
     * preload function that allows to load sprites and do some heavy
     * stuff before the game actually starts
     */
    public preload(): void {

        Image.register({
            name: 'SuperDuperImage',
            path: 'asset/image/test.png'
        });

        Sprite.register({
            name: 'Sprite',
            path: 'asset/image/sprite.png'
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
    }

    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    public update(): void {



    }
}

// start the game
new MyAwesomeGame();