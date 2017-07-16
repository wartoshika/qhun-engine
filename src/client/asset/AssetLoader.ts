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
    RamStorage, Log, Singleton, Binary, collectGargabe, EventName,
    enableGarbageCollection
} from '../../shared';

/**
 * this class handles the loading of assets
 */
@enableGarbageCollection
export class AssetLoader extends Singleton {

    /**
     * the holder of all asset loads
     */
    private assetLoaderPromiseStack: Promise<Asset>[] = [];

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
     * register one or many assets to adress then later in the game
     * an asset name should allways be unique, event if the asset type
     * is different
     *
     * @param assetClass the class of the asset
     * @param assets the asset to register
     */
    public registerAsset(assetClass: new () => Asset, ...assets: InlineAsset[]): void {

        // add constructor
        assets.forEach(asset => asset.ctor = assetClass);

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

        let loadPromiseStack: Promise<Asset>[] = [];
        let loadResourceStack: Asset[] = [];

        // iterate through all assets
        this.registeringAssets.forEach(asset => {

            // create a wrapper promise to load the asset
            // with its load function
            loadPromiseStack.push(new Promise<Asset>(resolve => {

                // construct an instance of the asset
                let instance = new asset.ctor();
                instance.setName(asset.name);

                // fill the instance
                this.loadAsset(instance, asset.path).then(resource => {

                    // store the asset
                    loadResourceStack.push(resource);

                    // resolve the promise
                    resolve(resource);
                });
            }));
        });

        // wait for all assets to load
        return Promise.all(loadPromiseStack).then(() => {

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

        let uniqueStack: { [index: string]: boolean } = {};

        assets.forEach(asset => {

            if (uniqueStack[`${asset.name}${asset.assetType}`] === true) {

                // error!
                throw new Error(`The asset ${asset.name} and type ${AssetType[asset.assetType]} is at least two times in the given assets!`);
            }

            // add the asset
            uniqueStack[`${asset.name}${asset.assetType}`] = true;
        });
    }

    /**
     * loads one asset
     *
     * @param instance the instance to be loaded
     * @param path the path where to load the asset from
     */
    private async loadAsset(instance: Asset, path: string): Promise<Asset> {

        // check if the path is a local data uri
        if (path.indexOf('data:') === 0) {

            return new Promise<Asset>(resolve => {

                // set the blob for the asset
                instance.setData(Binary.dataUriToBlob(path));
                resolve(instance);
            });
        }

        let callback: (path: string) => Promise<Blob>;
        switch (instance.getType()) {

            case AssetType.Image:
            case AssetType.TileMap:

                callback = this.loadImage.bind(this);
                break;
            default:

                throw `Asset type ${AssetType[instance.getType()]} is not implemented`;
        }

        // load the resource
        return callback(path).then(resource => {

            // set the resource data to the asset instance
            instance.setData(resource);
            return instance;
        });
    }

    /**
     * get all unresolved assets from the register process
     */
    public getUnresolvedPromised(): Promise<Asset>[] {

        return this.assetLoaderPromiseStack;
    }

    /**
     * add promises to the asset loader. this can be used to delay the game
     * startup until all assets are loaded.
     *
     * @param promises the promises to add
     */
    public addAssetLoaderPromise(...promises: Promise<any>[]): Promise<any>[] {

        this.assetLoaderPromiseStack.push(...promises);
        return promises;
    }

    /**
     * load an image
     *
     * @param path the path to the image
     */
    private async loadImage(path: string): Promise<Blob> {

        // make an xhr call to the file
        return Request.getBinary(path).then((image) => {

            // create the image bitmap for the blob
            return Binary.bufferToBlob(image);
        });
    }

    /**
     * load an audio file
     *
     * @param path the path to the audio file
     */
    private async loadAudio(path: string): Promise<any> {

    }

    /**
     * load a json file and parse its body
     *
     * @param path the path to the json file
     */
    private async loadJSON(path: string): Promise<any> {


    }

}