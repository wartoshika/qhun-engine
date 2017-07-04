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
    RamStorage, Log, Singleton, Binary
} from '../../shared';

/**
 * this class handles the loading of assets
 */
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
     * register one or many assets to adress then later in the game
     * an asset name should allways be unique, event if the asset type
     * is different
     *
     * @param assetClass the class of the asset
     * @param assets the asset to register
     */
    public async registerAsset(assetClass: new () => Asset, ...assets: InlineAsset[]): Promise<Asset[]> {

        let outerPromise: Promise<Asset>[] = [];
        let resourceStack: Asset[] = [];

        // iterate through all given assets
        assets.forEach(asset => {

            // check if the asset exists
            if (this.assetStorage.hasAsset(asset.name, asset.assetType)) {

                // log a warning that an asset has a double register
                this.logger.warning("The given asset with the name", asset.name, "is allready registered.");
            }

            // add a promise to await its loading
            outerPromise.push(new Promise<Asset>(resolve => {

                // construct an instance of the asset
                let instance = new assetClass();
                instance.setName(asset.name);

                // fill the instance
                this.loadAsset(instance, asset.path).then(resource => {

                    // store the asset
                    resourceStack.push(resource);

                    // resolve the promise
                    resolve(resource);
                });
            }));
        });

        // stack all loading promises to the asset loading process
        this.assetLoaderPromiseStack.push(...outerPromise);

        // return the promise
        return Promise.all(outerPromise).then(() => {

            // store all assets
            this.assetStorage.addAsset(...resourceStack);

            // resolve the promise
            return resourceStack;
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