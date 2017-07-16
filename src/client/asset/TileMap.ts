/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AbstractAsset } from './AbstractAsset';
import { InlineAsset } from './Asset';
import { AssetType } from './AssetType';
import { Dimension } from '../../shared';

export interface InlineTileMapAsset extends InlineAsset {

    /**
     * the dimension of each tile
     */
    tileMapDimension: Dimension;

    /**
     * the amount of layers this tilemap has
     * @default 1
     */
    layerCount?: number;
}

/**
 * an asset class to load a tilemap as world
 */
export class TileMap extends AbstractAsset {

    constructor(
        name?: string,
        path?: string,
        data?: Blob,
        public map?: string
    ) {

        super(name, path, AssetType.TileMap, data);
    }
}
