/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { Asset } from './Asset';

import {
    Singleton, Log, inject, Storage
} from '../../shared';

/**
 * a class that handles asset storing and getting
 */
export class AssetStorage extends Singleton {

    // the logger
    private logger: Log = Log.getLogger(AssetStorage.name);

    /**
     * the storage of all assets
     */
    private storage: {
        [assetName: string]: Asset
    } = {};

    /**
     * get an asset from the storage
     *
     * @param name the name of the asset
     */
    public getAsset<T extends Asset>(name: string, type: AssetType): T {

        // check if the asset is available
        const assetName = this.getAssetStorageName(name, type);
        if (!(assetName in this.storage)) {

            // print error
            this.logger.error('Trying to load not existing asset', name, 'with type', AssetType[type]);
            return;
        }

        // ask the ram storage for the asset
        return this.storage[assetName] as T;
    }

    /**
     * check if the storage has the given asset
     *
     * @param name the name of the asset
     * @param type the type of the asset
     */
    public hasAsset(name: string, type: AssetType): boolean {

        // ask the ram storage
        const assetName = this.getAssetStorageName(name, type);
        return assetName in this.storage;
    }

    /**
     * get the amount of currently registered assets of the given type
     *
     * @param type the asset type
     */
    public getAssetAmount(type: AssetType): number {

        const assetsOfType = Object
            .keys(this.storage)
            .map((assetKey) => this.storage[assetKey])
            .filter((asset) => asset.getType() === type);

        return assetsOfType.length;
    }

    /**
     * adds the given assets to the storage
     *
     * @param asset the assets to add
     */
    public addAsset(...assets: Asset[]): void {

        // iterate all assets
        assets.forEach((asset) => {

            // if the asset is allready there, write a warning
            if (this.hasAsset(asset.getName(), asset.getType())) {

                this.logger.warning(
                    'Asset with name', asset.getName(), 'and type', AssetType[asset.getType()],
                    'allready exists. The asser will be overwritten!'
                );
            }

            // now add the asset
            const assetName = this.getAssetStorageName(asset.getName(), asset.getType());
            this.storage[assetName] = asset;
        });
    }

    /**
     * removes all assets from the storage
     */
    public clearStorage(type?: AssetType): void {

        const assetName = this.getAssetStorageName('', type);
        Object.keys(this.storage)
            .filter((assetKey) => assetKey.indexOf(type.toString()) === 0)
            .forEach((assetKey) => {

                // delete the asset
                delete this.storage[assetKey];
            });
    }

    /**
     * get the storage asset name
     *
     * @param name the name of the asset
     */
    public getAssetStorageName(name?: string, type?: AssetType): string {

        let path = 'assetloader';
        if (type !== undefined) path += `.${type}`;
        if (name) path += `.${name}`;

        return path;
    }
}
