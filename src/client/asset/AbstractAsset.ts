/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Asset, AssetDataType } from './Asset';
import { AssetType } from './AssetType';

/**
 * a basic class for implementing the getter and setter function
 * of the required asset interface
 *
 * be sure to implement the folling needed functions
 * @required public static async register(...images: InlineAsset[]): Promise<any>
 * @required constructor(name?: string, path?: string, data?: any): Asset
 */
export abstract class AbstractAsset implements Asset {

    constructor(
        protected name?: string,
        protected path?: string,
        protected type?: AssetType,
        protected data?: AssetDataType
    ) { }

    public getName(): string {

        return this.name;
    }

    public getPath(): string {

        return this.path;
    }

    public getType(): AssetType {

        return this.type;
    }

    public getData(): AssetDataType {

        return this.data;
    }

    public setName(name: string): void {

        this.name = name;
    }

    public setPath(path: string): void {

        this.path = path;
    }

    public setData(data: AssetDataType): void {

        this.data = data;
    }
}
