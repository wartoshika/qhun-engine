import { ClientConfig } from './ClientConfig';
import { logMethodCall } from 'shared/decorator';
import { Log } from 'shared/log';
import { Game } from 'client/Game';

import { AssetLoader, AssetType } from 'client/asset';
import { Renderer } from 'client/render';

/**
 * the initiation class of the game client
 */
export abstract class Client {

    /**
     * the renderer instance
     */
    private renderer: Renderer;

    constructor(
        private clientConfig: ClientConfig
    ) {

        // step by step setup of the game
        this.bindLoadEvent();
    }

    /**
     * bind window events to let the start of the engine pause
     * until the javascript dom is ready
     */
    @logMethodCall
    private bindLoadEvent(): void {

        // at window load, start the internal setup
        window.addEventListener('load', this.internalSetup.bind(this));
    }

    /**
     * internal setup phase
     */
    @logMethodCall
    private internalSetup(): void {

        // setup renderer
        this.renderer = new this.clientConfig.rederer();
        this.renderer.setup(this.clientConfig.gameDimension);

        // start the preload phase
        this.preload();

        // get all promised from the preload phase and await them
        let assetLoader = AssetLoader.getInstance<AssetLoader>();
        Promise.all(assetLoader.getUnresolvedPromised()).then(() => {

            // log the information about the registration process of assets
            Log.info("Registered", assetLoader.getAssetAmount(AssetType.Image), "Images");
            Log.info("Registered", assetLoader.getAssetAmount(AssetType.Audio), "Sounds");
            Log.info("Registered", assetLoader.getAssetAmount(AssetType.Json), "JSON Objects");

            // all assets loaded, continue startup
            let game = new Game(
                this.renderer
            );
            this.loaded(game);

            // init the game loop
            this.gameLoop();

        });
    }

    /**
     * the game loop where all things come together
     */
    private gameLoop(): void {

        // call update method
        this.update();

        // render the game
        if (typeof this.renderer.preRender === 'function') this.renderer.preRender();
        this.renderer.render();
        if (typeof this.renderer.postRender === 'function') this.renderer.postRender();

        // request the next game frame
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    /**
     * preload function that allows to load sprites and do some heavy
     * stuff before the game actually starts
     */
    public abstract preload(): void;

    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    public abstract loaded(game: Game): void;

    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    public abstract update(): void;
}