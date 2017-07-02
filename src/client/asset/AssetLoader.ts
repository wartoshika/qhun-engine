/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { Asset, InlineAsset } from './Asset';
import { AbstractAsset } from './AbstractAsset';
import { Singleton, Binary } from '../../shared/helper';
import { RamStorage } from '../../shared/storage';
import { Log } from '../../shared/log';
import { Request } from '../network';

/**
 * a class that can handle asset loading such as images and audio
 */
export class AssetLoader extends Singleton {

    /**
     * the holder of all asset loads
     */
    private assetLoaderPromiseStack: Promise<AbstractAsset>[] = [];

    /**
     * register one or many assets to adress then later in the game
     * an asset name should allways be unique, event if the asset type
     * is different
     *
     * @param assetClass the class of the asset
     * @param assets the asset to register
     */
    public async registerAsset(assetClass: new () => AbstractAsset, ...assets: InlineAsset[]): Promise<AbstractAsset[]> {

        let outerPromise: Promise<AbstractAsset>[] = [];
        let resourceStack: AbstractAsset[] = [];

        // iterate through all given assets
        assets.forEach(asset => {

            // check if the asset exists
            if (RamStorage.has(this.getAssetStorageName(asset.name, asset.assetType))) {

                // log a warning that an asset has a double register
                Log.warning("The given asset with the name", asset.name, "is allready registered.");
            }

            // add a promise to await its loading
            outerPromise.push(new Promise<AbstractAsset>(resolve => {

                // construct an instance of the asset
                let instance = new assetClass();
                instance.setName(asset.name);
                instance.setPath(asset.path);

                // fill the instance
                this.loadAsset(instance).then(resource => {

                    // store the asset
                    RamStorage.add(this.getAssetStorageName(asset.name, asset.assetType), resource);
                    resourceStack.push(resource);

                    // resolve the promise
                    resolve(resource);
                });
            }));
        });

        // stack all loading promises to the asset loading process
        this.assetLoaderPromiseStack.push(...outerPromise);

        // return the promise
        return Promise.all(outerPromise).then(() => { return resourceStack; });
    }

    /**
     * loads one asset
     *
     * @param instance the instance to be loaded
     */
    private async loadAsset(instance: Asset): Promise<Asset> {

        let callback: (path: string) => Promise<any>;
        switch (instance.getAssetType()) {

            case AssetType.Image:
            case AssetType.TileMap:

                callback = this.loadImage.bind(this);
                break;
            default:

                throw `Asset type ${instance.getAssetType()} is not implemented`;
        }

        // load the resource
        return callback(instance.getPath()).then(resource => {

            // set the resource data to the asset instance
            instance.setData(resource);
            return instance;
        });
    }

    /**
     * get an asset from the storage
     *
     * @param name the name of the asset
     */
    public getAsset<T>(name: string, type: AssetType): T {

        // ask the ram storage for the asset
        return RamStorage.get<T>(this.getAssetStorageName(name, type));
    }

    /**
     * get the amount of currently registered assets of the given type
     *
     * @param type the asset type
     */
    public getAssetAmount(type: AssetType): number {

        return RamStorage.amount(this.getAssetStorageName('', type));
    }

    /**
     * get all unresolved assets from the register process
     */
    public getUnresolvedPromised(): Promise<AbstractAsset>[] {

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
     * get the storage asset name
     *
     * @param name the name of the asset
     */
    private getAssetStorageName(name: string, type: AssetType): string {

        let path = `assetloader.${type}`;
        if (name) path += `.${name}`;

        return path;
    }

    /**
     * load an image
     *
     * @param path the path to the image
     */
    private async loadImage(path: string): Promise<ImageBitmap> {

        // if the path is a data uri, return this instantly
        if (path.indexOf('data:image/') === 0) {

            return new Promise<ImageBitmap>(resolve => {

                resolve(createImageBitmap(Binary.dataUriToBlob(path)));
            });
        }

        // make an xhr call to the file
        return Request.getBinary(path).then((image) => {

            // create the image bitmap for the blob
            return createImageBitmap(Binary.dataUriToBlob(image));
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

    /**
     * creates an html element at the dom to load assets
     *
     * @param tagName the tagname of the new element
     */
    private createDomElement(tagName: string): HTMLElement {

        // return the created element
        return document.createElement(tagName);
    }

}