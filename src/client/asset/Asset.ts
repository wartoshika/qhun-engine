/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';

export declare type AssetDataType = Blob | ImageBitmap;

export interface Asset {

    getName(): string;
    getType(): AssetType;
    getData(): AssetDataType;
    getPath(): string;

    setName(name: string): void;
    setData(data: AssetDataType): void;
}

export interface InlineAsset {

    name: string;
    path: string;
    assetType?: AssetType;
    data?: AssetDataType;
    ctor?: new () => Asset;
}
