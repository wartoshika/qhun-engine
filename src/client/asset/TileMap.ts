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
     * the url of the world json file
     */
    worldUrl: string;

    /**
     * set the tile numbers to collide with
     */
    tileCollision?: number[];
}

interface JsonWorld {

    width?: number;
    height?: number;
    tilewidth?: number;
    tileheight?: number;
    layers?: TileJsonLayer[];
}

interface TileJsonLayer {

    data?: number[];
    height?: number;
    name?: string;
    opacity?: number;
    type?: string;
    visible?: boolean;
    width?: number;
    x?: number;
    y?: number;
}

/**
 * an asset class to load a tilemap as world
 */
export class TileMap extends AbstractAsset {

    /**
     * the tile numbers that collides with entities derived from CollidableEntity
     */
    private tileCollision: number[] = [];

    /**
     * the attributes of the json world file
     */
    private width = 0;
    private height = 0;
    private tilewidth = 0;
    private tileheight = 0;
    private layers: TileJsonLayer[] = [];

    constructor(
        name?: string,
        path?: string,
        data?: AssetDataType,
        protected worldUrl?: string
    ) {

        super(name, path, AssetType.TileMap, data);
    }

    /**
     * get the current tilemap layer count
     */
    public getLayerCount(): number {

        return this.layers.length;
    }

    /**
     * get the height and width as dimension instance
     */
    public getDimension(): Dimension {

        return new Dimension(this.tilewidth, this.tileheight);
    }

    /**
     * get the path to the world file
     */
    public getWorldUrl(): string {

        return this.worldUrl;
    }

    /**
     * get the world layers
     */
    public getWorld(): TileJsonLayer[] {

        return this.layers;
    }

    /**
     * override the wold of the tilemap
     *
     * @param world the world object to set
     */
    public setWorld(world: JsonWorld): void {

        // take all attributes
        Object.keys(world).forEach((key) => {

            (this as any)[key] = (world as any)[key];
        });
    }

    /**
     * get the world dimension of the tilemap csv file
     */
    public getWorldDimension(): Dimension {

        // multiply with the tile width and height
        return new Dimension(
            this.width,
            this.height
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
