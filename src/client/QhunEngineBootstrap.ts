/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton } from '../shared/helper/Singleton';
import { Renderer } from './render/Renderer';
import { Game } from './Game';
import { Input } from './input/Input';
import { Log } from '../shared/log/Log';
import { ClientConfig } from './ClientConfig';
import { LogMethodCall } from '../shared/decorator/logMethodCall';
import { Storage } from '../shared/storage/Storage';
import { InjectorRegistry } from '../shared/helper/InjectorRegistry';
import { AssetLoader } from './asset/AssetLoader';
import { AssetStorage } from './asset/AssetStorage';
import { EventName } from '../shared/event/EventName';
import { AssetRegister } from './asset/AssetRegister';
import { AssetType } from './asset/AssetType';
import { ObjectCache } from './render/ObjectCache';
import { RamStorage } from '../shared/storage/RamStorage';
import { EntityMovement } from './physic/EntityMovement';
import { Vector2D } from '../shared/math';
import { CollisionDetection } from './collision/CollisionDetection';

/**
 * the system class that handles the engine bootstrap process
 */
export abstract class QhunEngineBootstrap extends Singleton {

    /**
     * the renderer instance
     */
    protected renderer: Renderer;

    /**
     * the game instance
     */
    protected gameInstance: Game;

    /**
     * the input instance
     */
    protected inputInstance: Input;

    /**
     * the holder of the entity movement class
     */
    protected entityMovement = new EntityMovement();

    /**
     * the collision detection instance
     */
    protected collisionDetection = new CollisionDetection();

    /**
     * the logger instance
     */
    private logger: Log = Log.getLogger(QhunEngineBootstrap.name);

    constructor(
        protected clientConfig: ClientConfig
    ) {

        super();

        // print package and version info
        console.info('%c -= Qhun-Engine v1.0.0 =- [ http://engine.qhun.de ]', 'background: green; font-color: white;');

        // at window load, start the internal setup
        window.addEventListener('load', this.internalSetup.bind(this));
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
     * the game loop where all things come together
     */
    protected abstract gameLoop(): void;

    /**
     * fill all config things that are not provided
     */
    private setupDefaultConfig(): void {

        this.clientConfig.storage = (this.clientConfig.storage || RamStorage) as Storage;
    }

    /**
     * internal setup phase
     */
    @LogMethodCall
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
        this.emit(EventName.WindowResize, {}, this.renderer.getDrawingDimension());
        this.emit(EventName.AfterLoaded);

        // init the game loop
        this.gameLoop();
    }

}
