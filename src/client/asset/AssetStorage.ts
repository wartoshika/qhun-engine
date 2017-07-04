/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { Asset } from './Asset';

import {
    Singleton, RamStorage, Log
} from '../../shared';

/**
 * a class that handles asset storing and getting
 */
export class AssetStorage extends Singleton {

    // the logger
    private logger: Log = Log.getInstance<Log>();

    /**
     * get an asset from the storage
     *
     * @param name the name of the asset
     */
    public getAsset<T>(name: string, type: AssetType): T {

        // check if the asset is available
        if (!RamStorage.has(this.getAssetStorageName(name, type))) {

            // print error
            this.logger.error("Trying to load not existing asset", name, "with type", AssetType[type]);
            return;
        }

        // ask the ram storage for the asset
        return RamStorage.get<T>(this.getAssetStorageName(name, type));
    }

    /**
     * check if the storage has the given asset
     *
     * @param name the name of the asset
     * @param type the type of the asset
     */
    public hasAsset(name: string, type: AssetType): boolean {

        // ask the ram storage
        return RamStorage.has(this.getAssetStorageName(name, type));
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
     * adds the given assets to the storage
     *
     * @param asset the assets to add
     */
    public addAsset(...assets: Asset[]): void {

        // iterate all assets
        assets.forEach(asset => {

            // if the asset is allready there, write a warning
            if (this.hasAsset(asset.getName(), asset.getType())) {

                this.logger.warning(
                    "Asset with name", asset.getName(), "and type", AssetType[asset.getType()],
                    "allready exists. The asser will be overwritten!"
                );
            }

            // now add the asset
            RamStorage.add(this.getAssetStorageName(asset.getName(), asset.getType()), asset);
        });
    }

    /**
     * removes all assets from the storage
     */
    public clearStorage(type?: AssetType): void {

        RamStorage.clearPath(this.getAssetStorageName("", type));
    }

    /**
     * get the storage asset name
     *
     * @param name the name of the asset
     */
    private getAssetStorageName(name?: string, type?: AssetType): string {

        let path = "assetloader";
        if (type !== undefined) path += `.${type}`;
        if (name) path += `.${name}`;

        return path;
    }
}