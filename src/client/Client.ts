/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ClientConfig } from './ClientConfig';
import { Game } from './Game';

import {
    logMethodCall, Log, FileSizeType, RamStorage,
    Singleton, EventName
} from '../shared';

import { AssetLoader, AssetType, AssetStorage } from './asset';
import { Renderer } from './render';
import { Input } from './input';
import { CollisionDetection } from './collision';

/**
 * the initiation class of the game client
 */
export abstract class Client extends Singleton {

    /**
     * the renderer instance
     */
    private renderer: Renderer;

    /**
     * the game instance
     */
    private gameInstance: Game;

    /**
     * the input instance
     */
    private inputInstance: Input;

    /**
     * the logger instance
     */
    private logger: Log = Log.getLogger(Client.name);

    constructor(
        private clientConfig: ClientConfig
    ) {

        super();

        // print package and version info
        console.info("%c -= Qhun-Engine v1.0.0 =- [ http://engine.qhun.de ]", "background: green; font-color: white;");

        // step by step setup of the game
        this.bindLoadEvent();

        // bind to singleton instance
        Client.bindInstance(this);
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

        // get all promised from the preload phase and await them
        let assetLoader = AssetLoader.getInstance<AssetLoader>();
        let assetStorage = AssetStorage.getInstance<AssetStorage>();

        // setup renderer
        this.renderer = new this.clientConfig.rederer();
        this.renderer.setup(this.clientConfig);

        // some logging
        this.logger.info("Using", this.renderer.constructor.name, "as Renderer");

        // start the preload phase
        this.fireEvent(EventName.BeforePreload);
        this.preload();
        this.fireEvent(EventName.AfterPreload);

        // await the asset loading
        Promise.all(assetLoader.getUnresolvedPromised()).then(() => {

            // log the information about the registration process of assets
            this.logger.info("Registered", assetStorage.getAssetAmount(AssetType.Image), "Images");
            this.logger.info("Registered", assetStorage.getAssetAmount(AssetType.TileMap), "TileMaps");
            this.logger.info("Registered", assetStorage.getAssetAmount(AssetType.Audio), "Sounds");
            this.logger.info("Registered", assetStorage.getAssetAmount(AssetType.Json), "JSON Objects");

            // all assets loaded, continue startup
            this.gameInstance = new Game(this.renderer);
            this.inputInstance = new Input();

            // fire loaded event
            this.fireEvent(EventName.BeforeLoaded);
            this.loaded(this.gameInstance);
            this.fireEvent(EventName.AfterLoaded);
            this.printMemoryFootprint();

            // init the game loop
            this.gameLoop();
        });
    }

    /**
     * logs the current memory footprint to the console
     */
    private printMemoryFootprint(): void {

        let assets = RamStorage.getSize("assetloader", FileSizeType.Megabyte);
        let misc = RamStorage.getSize("singleton", FileSizeType.Megabyte);
        let overall = +(assets + misc).toFixed(2);

        // print current memory footprint
        this.logger.info("Memory footprint:", overall, "MB");
        this.logger.info("\t- Assets:\t", assets, "MB");
        this.logger.info("\t- Misc:\t\t", misc, "MB");
    }

    /**
     * the game loop where all things come together
     */
    private gameLoop(): void {

        // call update method
        this.update(this.gameInstance, this.inputInstance);

        // run collision detection
        CollisionDetection.entitiesWithWorld(this.gameInstance.getCurrentEntities(), this.renderer.getWorld(), this.gameInstance.getCurrentCamera());

        // call the scene update
        let scene = this.gameInstance.getCurrentScene();
        if (scene) scene.update(this.gameInstance);

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
    public abstract update(game: Game, input: Input): void;
}