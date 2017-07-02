/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { GravityForce } from '../physic';
import { Vector2D, Dimension } from '../../shared/math';
import { TileMap, AssetLoader, AssetType } from '../asset';
import { Camera } from '../camera';
import { Game } from '../Game';

/**
 * a class to handle world spefific things
 */
export class World {

    /**
     * the tile numbers that collides with entities derived from {@link CollidableEntity}
     */
    private collisionTiles: number[] = [];

    /**
     * the current tilemap
     */
    private map: TileMap;

    /**
     * @param game the game object
     * @param map the map to show
     * @param gravity the gravity that is present on this world
     */
    constructor(
        game: Game,
        map: string,
        private gravity: Vector2D<GravityForce> = new Vector2D<GravityForce>(
            GravityForce.None,
            GravityForce.None
        )
    ) {

        // get the tilemap from the asset loader
        this.map = AssetLoader.getInstance<AssetLoader>()
            .getAsset<TileMap>(map, AssetType.TileMap);
    }

    /**
     * get the world name aka tilemap name
     */
    public getName(): string {

        return this.map.getName();
    }

    /**
     * get the tilemap of the world
     */
    public getTileMap(): TileMap {

        return this.map;
    }

    /**
     * get the dimension of the world using the tilemap information
     */
    public getWorldDimension(): Dimension {

        return this.map.getWorldDimension();
    }


    /**
     * set single tile numbers to collide with
     *
     * @param tileNumbers the tile numbers to collide with
     */
    public setCollisionDetection(...tileNumbers: number[]): void {

        this.collisionTiles.push(...tileNumbers);
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

            this.collisionTiles.push(tile);
        }
    }

    /**
     * get the collidable tileNumbers for this world
     */
    public getCollidableTileNumbers(): number[] {

        return this.collisionTiles;
    }

    /**
     * get the tile numbers for a position on the map
     * if the position is not on the map, a -2 will be returned
     *
     * @param position the point on the tile map
     */
    public getTileNumbersForPosition(position: Vector2D): number[] {

        let numbers: number[] = [];

        // iterate through the map and each layer
        this.map.map.forEach((map, layer) => {

            // the y axis
            let line = map.split(String.fromCharCode(13));
            if (line[position.y]) {

                // the x axis
                let tiles = line[position.y].split(',');
                if (tiles[position.x]) {
                    numbers.push(parseInt(tiles[position.x]));
                } else {

                    numbers.push(-2);
                }
            } else {
                numbers.push(-2);
            }
        });

        return numbers;
    }
}