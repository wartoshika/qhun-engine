/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Asset } from './Asset';
import { AssetType } from './AssetType';
import { AssetLoader } from './AssetLoader';

/**
 * a basic class for implementing the getter and setter function
 * of the required asset interface
 *
 * be sure to implement the folling needed functions
 * @need public static async register(...images: InlineAsset[]): Promise<any>
 * @need constructor(name?: string, path?: string, data?: any): Asset
 */
export abstract class AbstractAsset implements Asset {

    /**
     * holder of the asset loader
     */
    private static assetLoader = AssetLoader.getInstance<AssetLoader>();

    constructor(
        protected name?: string,
        protected path?: string,
        protected type?: AssetType,
        protected data?: Blob
    ) { }

    /**
     * get the asset loader instance to load the desired asset
     */
    protected static getAssetLoader(): AssetLoader {

        return AbstractAsset.assetLoader;
    }

    public getName(): string {

        return this.name;
    }

    public getPath(): string {

        return this.path;
    }

    public getType(): AssetType {

        return this.type;
    }

    public getData(): Blob {

        return this.data;
    }

    public setName(name: string): void {

        this.name = name;
    }

    public setPath(path: string): void {

        this.path = path;
    }

    public setData(data: Blob): void {

        this.data = data;
    }
}