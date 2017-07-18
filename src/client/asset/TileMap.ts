/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AbstractAsset } from './AbstractAsset';
import { AssetDataType } from './Asset';
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

    /**
     * set the tile numbers to collide with
     */
    tileCollision?: number[];
}

/**
 * an asset class to load a tilemap as world
 */
export class TileMap extends AbstractAsset {

    public worldWidth: number = 0;
    public worldHeight: number = 0;

    /**
     * the tile numbers that collides with entities derived from CollidableEntity
     */
    private tileCollision: number[] = [];

    constructor(
        name?: string,
        path?: string,
        data?: AssetDataType,
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

    /**
     * set single tile numbers to collide with
     *
     * @param tileNumbers the tile numbers to collide with
     */
    public setCollisionDetection(...tileNumbers: number[]): void {

        this.tileCollision.push(...tileNumbers);
    }

    /**
     * set all tiles with this numbers to collide with
     *
     * @param from from tile number
     * @param to to tile number
     */
    public setCollisionDetectionBetween(from: number, to: number): void {

        // loop through the tile numbers
        for (let tile = from; tile <= to; tile++) {

            this.tileCollision.push(tile);
        }
    }

    /**
     * get the collidable tileNumbers for this world
     */
    public getCollidableTileNumbers(): number[] {

        return this.tileCollision;
    }
}
