/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { ClientConfig } from './ClientConfig';
import { Game } from './Game';

import {
    logMethodCall, Log, FileSizeType, RamStorage, Storage,
    Singleton, EventName, InjectorRegistry
} from '../shared';

import { AssetLoader, AssetType, AssetStorage, AssetRegister } from './asset';
import { Renderer, ObjectCache } from './render';
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
        console.info('%c -= Qhun-Engine v1.0.0 =- [ http://engine.qhun.de ]', 'background: green; font-color: white;');

        // step by step setup of the game
        this.bindLoadEvent();

        // bind to singleton instance
        Client.bindInstance(this);
    }

    /**
     * preload function that allows to load sprites and do some heavy
     * stuff before the game actually starts
     */
    public abstract preload(assetRegister: AssetRegister): void;

    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    public abstract async loaded(game: Game): Promise<void>;

    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    public abstract update(game: Game, input: Input): void;

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
    private async internalSetup(): Promise<void> {

        // add default config
        this.setupDefaultConfig();

        // setup storing mechanism
        const storageConstructor = this.clientConfig.storage as any as new () => Storage;
        InjectorRegistry.add('Storage', new storageConstructor());

        // get all promised from the preload phase and await them
        const assetLoader = AssetLoader.getInstance<AssetLoader>();
        const assetStorage = AssetStorage.getInstance<AssetStorage>();

        // setup renderer
        this.renderer = new this.clientConfig.rederer();
        this.renderer.setup(this.clientConfig);

        // some logging
        this.logger.info('Using', this.renderer.constructor.name, 'as Renderer');

        // start the preload phase
        this.emit(EventName.BeforePreload);
        this.preload(AssetRegister.getInstance<AssetRegister>());
        this.emit(EventName.AfterPreload);

        // start asset loading
        this.emit(EventName.BeforeAssetLoading);
        await assetLoader.loadRegisteredAssets();

        // asset loading finished!
        this.emit(EventName.AfterAssetLoading);

        // log the information about the registration process of assets
        this.logger.info('Registered', assetStorage.getAssetAmount(AssetType.Sprite), 'Sprites');
        this.logger.info('Registered', assetStorage.getAssetAmount(AssetType.TileMap), 'TileMaps');
        this.logger.info('Registered', assetStorage.getAssetAmount(AssetType.Image), 'Images');
        this.logger.info('Registered', assetStorage.getAssetAmount(AssetType.Audio), 'Sounds');
        this.logger.info('Registered', assetStorage.getAssetAmount(AssetType.Json), 'JSON Objects');

        // all assets loaded, continue startup
        this.gameInstance = new Game(this.renderer);
        this.inputInstance = new Input();

        // convert assets to selected renderer objects
        const transformObjects = new ObjectCache();
        await transformObjects.transformObjectCache(
            this.renderer, AssetType.Image
        );

        // fire loaded event
        this.emit(EventName.BeforeLoaded);
        await this.loaded(this.gameInstance);
        this.emit(EventName.AfterLoaded);

        // init the game loop
        this.gameLoop();
    }

    /**
     * fill all config things that are not provided
     */
    private setupDefaultConfig(): void {

        this.clientConfig.storage = (this.clientConfig.storage || RamStorage) as Storage;
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
        const scene = this.gameInstance.getCurrentScene();
        if (scene) scene.update(this.gameInstance);

        // render the game
        if (typeof this.renderer.preRender === 'function') this.renderer.preRender();
        this.renderer.render();
        if (typeof this.renderer.postRender === 'function') this.renderer.postRender();

        // request the next game frame
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }
}
