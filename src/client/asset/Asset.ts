/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';

export interface Asset {

    getName(): string;
    getType(): AssetType;
    getData(): string;

    setName(name: string): void;
    setData(data: Blob): void;
}

export interface InlineAsset {

    name: string;
    path: string;
    assetType?: AssetType;
    data?: Blob;
}