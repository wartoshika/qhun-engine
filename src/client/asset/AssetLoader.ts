/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { Asset, InlineAsset } from './Asset';
import { AssetStorage } from './AssetStorage';
import { Request } from '../network';

import {
    TypeLoader, ImageLoader, AudioLoader, SpriteLoader, TilemapLoader
} from './assetTypeLoader';

import {
    RamStorage, Log, Singleton, Binary, collectGargabe, EventName,
    enableGarbageCollection
} from '../../shared';

/**
 * this class handles the loading of assets
 */
@enableGarbageCollection
export class AssetLoader extends Singleton {

    /**
     * the asset storage instance
     */
    private assetStorage: AssetStorage = AssetStorage.getInstance<AssetStorage>();

    /**
     * the logger
     */
    private logger = Log.getLogger(AssetLoader.name);

    /**
     * a stack of all inline assets
     */
    @collectGargabe(EventName.AfterAssetLoading, [])
    private registeringAssets: InlineAsset[] = [];

    /**
     * all available asset loader
     */
    private availableAssetTypeLoader: {
        [assetType: string]: TypeLoader
    } = {};

    constructor() {

        super();

        // register asset type loader
        this.availableAssetTypeLoader[AssetType.Image] = ImageLoader.getInstance<ImageLoader>();
        this.availableAssetTypeLoader[AssetType.Audio] = AudioLoader.getInstance<AudioLoader>();
        this.availableAssetTypeLoader[AssetType.Sprite] = SpriteLoader.getInstance<SpriteLoader>();
        this.availableAssetTypeLoader[AssetType.TileMap] = TilemapLoader.getInstance<TilemapLoader>();
    }

    /**
     * register one or many assets to adress then later in the game
     * an asset name should allways be unique, event if the asset type
     * is different
     *
     * @param assetClass the class of the asset
     * @param assets the asset to register
     */
    public registerAsset(assetClass: new () => Asset, ...assets: InlineAsset[]): void {

        // add constructor
        assets.forEach((asset) => asset.ctor = assetClass);

        // check if all assets are unique
        this.checkInlineAssets(...[...assets, ...this.registeringAssets]);

        // register
        this.registeringAssets.push(...assets);
    }

    /**
     * loads all registered assets and promide a callback
     * with the loaded assets
     */
    public async loadRegisteredAssets(): Promise<Asset[]> {

        const loadPromiseStack: Array<Promise<Asset>> = [];
        const loadResourceStack: Asset[] = [];

        // iterate through all assets
        this.registeringAssets.forEach((asset) => {

            // create a wrapper promise to load the asset
            // with its load function
            loadPromiseStack.push(new Promise<Asset>((resolve) => {

                // construct an instance of the asset
                const instance = new asset.ctor();

                // bind the inline asset attributes to the instance
                Object.keys(asset).forEach((property) => {

                    (instance as any)[property] = (asset as any)[property];
                });

                // fill the instance
                this.loadAndStoreAsset(instance, asset.path).then((resource) => {

                    // store the asset
                    loadResourceStack.push(resource);

                    // resolve the promise
                    resolve(resource);
                });
            }));
        });

        // wait for all assets to load
        return Promise.all(loadPromiseStack).then((assets) => {

            // return all assets
            return loadResourceStack;
        });
    }

    /**
     * check the given assets for errors
     *
     * @throw Error
     */
    private checkInlineAssets(...assets: InlineAsset[]): void {

        const uniqueStack: { [index: string]: boolean } = {};

        assets.forEach((asset) => {

            if (uniqueStack[`${asset.name}${asset.assetType}`] === true) {

                // error!
                throw new Error(`The asset ${asset.name} and type ${AssetType[asset.assetType]} is at least two times in the given assets!`);
            }

            // add the asset
            uniqueStack[`${asset.name}${asset.assetType}`] = true;
        });
    }

    /**
     * loads one asset and store it
     *
     * @param instance the instance to be loaded
     * @param path the path where to load the asset from
     */
    private async loadAndStoreAsset(instance: Asset, path: string): Promise<Asset> {

        // check if the path is a local data uri
        if (path.indexOf('data:') === 0) {

            return new Promise<Asset>((resolve) => {

                // set the blob for the asset
                instance.setData(Binary.dataUriToBlob(path));
                resolve(instance);
            });
        }

        // find the loader
        const typeLoader = this.availableAssetTypeLoader[instance.getType()];
        if (typeof typeLoader === 'undefined') {

            throw new Error(`Asset type ${AssetType[instance.getType()]} is not implemented`);
        }

        // load the asset!
        return typeLoader.load(path, instance).then((loadedAssets) => {

            // wrap as array
            if (!Array.isArray(loadedAssets)) {

                loadedAssets = [loadedAssets];
            }

            // now save
            this.assetStorage.addAsset(...loadedAssets as Asset[]);

            // return the instance
            return instance;
        });
    }
}
