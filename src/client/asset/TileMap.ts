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
    dimension: number[];

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

    public worldWidth: number = 0;
    public worldHeight: number = 0;

    constructor(
        name?: string,
        path?: string,
        data?: Blob,
        public map?: string[],
        public dimension?: number[],
        public layerCount?: number
    ) {

        super(name, path, AssetType.TileMap, data);
    }

    /**
     * get the current tilemap layer count
     */
    public getLayerCount(): number {

        return this.layerCount || 1;
    }

    /**
     * get the height and width as dimension instance
     */
    public getDimension(): Dimension {

        return new Dimension(this.dimension[0], this.dimension[1]);
    }

    /**
     * get the world dimension of the tilemap csv file
     */
    public getWorldDimension(): Dimension {

        // multiply with the tile width and height
        return new Dimension(
            this.worldWidth,
            this.worldHeight
        );
    }
}
