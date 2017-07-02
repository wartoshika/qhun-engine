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
}