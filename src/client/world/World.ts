/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { OnWorldInit } from './OnWorldInit';
import { GravityForce } from '../physic';
import {
    Vector2D, Dimension, Log, GenericEventEmitter,
    EventName
} from '../../shared';
import { TileMap, AssetStorage, AssetType } from '../asset';
import { Camera } from '../camera';
import { TilemapLoader } from '../asset/assetTypeLoader';
import { Entity } from '../../shared/entity';

/**
 * a class to handle world spefific things. a world could also be a level
 * or a map (you call it what you want).
 */
export abstract class World implements OnWorldInit {

    /**
     * the current tilemap
     */
    protected map: TileMap;

    /**
     * the stack of entities in this world
     */
    protected entityStack: Entity[] = [];

    /**
     * all available cameras
     */
    protected camera: Camera[] = [];

    /**
     * the tiles as multidimensional world array
     * first dim: layer
     * second dim: x
     * third dim: y
     */
    protected generatedWorld: number[][][] = [];

    /**
     * the logger instance
     */
    private logger: Log = Log.getLogger(World.name);

    /**
     * @param map the map to show
     * @param gravity the gravity that is present on this world
     */
    constructor(
        tileMapName: string,
        private gravity: Vector2D<GravityForce> = new Vector2D<GravityForce>(
            GravityForce.None,
            GravityForce.None
        )
    ) {

        // get the tilemap from the asset loader
        this.map = AssetStorage.getInstance<AssetStorage>()
            .getAsset<TileMap>(tileMapName, AssetType.TileMap);
    }

    /**
     * will be fired if the world is loaded and able to
     * add entities
     */
    abstract onWorldInit(): void;

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
     * show the given camera to the player
     *
     * @param camera the camera to show. if no camera is given, the first added camera will be used
     */
    public show(camera?: Camera): void {

        // camera valid?
        camera = camera ? camera : this.camera[0];
        if (!camera) {

            this.logger.error('Trying to show a world but no camera has been added or given!');
            return;
        }

        // check if the given camera has been added, if not do it
        if (this.camera.indexOf(camera) === -1) this.camera.push(camera);

        // activate the camera
        GenericEventEmitter.getInstance<GenericEventEmitter>().emit(
            EventName.CameraChange, {},
            camera, this
        );
    }

    /**
     * add an entity to this world
     */
    public addEntity(...entites: Entity[]): void {

        this.entityStack.push(...entites);
    }

    /**
     * remove an entity from the world
     */
    public removeEntity(...entites: Entity[]): void {

        entites.forEach((entity) => {
            this.entityStack.splice(this.entityStack.indexOf(entity), 1);
        });
    }

    /**
     * get all world entities
     */
    public getEntities(): Entity[] {

        return this.entityStack;
    }

    /**
     * adds a camera to the world
     *
     * @param camera the camera to add
     */
    public addCamera(...camera: Camera[]): void {

        this.camera.push(...camera);
    }

    /**
     * remove a camera from the world
     *
     * @param camera the camera to remove
     */
    public removeCamera(...cameras: Camera[]): void {

        cameras.forEach((camera) => {
            this.camera.splice(this.camera.indexOf(camera), 1);
        });
    }

    /**
     * get the tile numbers for a position on the map
     * if the position is not on the map, a -2 will be returned
     *
     * @param position the point on the tile map
     */
    public getTileNumbersForPosition(position: Vector2D): number[] {

        // merge the mapped number[][] to number[]
        return [].concat.apply([], this.generatedWorld.map((tiles, layer) => {
            return tiles[position.x][position.y];
        }));
    }

    /**
     * get the generated world as multidimensional array
     * first dim: layer
     * second dim: x
     * third dim: y
     */
    public getGeneratedWorld(): number[][][] {

        return this.generatedWorld;
    }

    /**
     * generates the tile clusters used by the renderer to speed up
     * the rendering process
     */
    public generateWorld(): void {

        // iterate through the map and each layer
        this.map.map.forEach((map, layerNumber) => {

            if (!Array.isArray(this.generatedWorld[layerNumber]))
                this.generatedWorld[layerNumber] = [];

            // the y axis
            map.trim().split(String.fromCharCode(13)).forEach((line, yCoordinate) => {

                // the x axis
                line.trim().split(TilemapLoader.TILE_MAP_DELIMITER).forEach((tile, xCoordinate) => {

                    // check if the cluster array is capable of taking the numbers
                    if (!Array.isArray(this.generatedWorld[layerNumber][xCoordinate]))
                        this.generatedWorld[layerNumber][xCoordinate] = [];

                    // add the tile numbers
                    const tileNumber = parseInt(tile, 10);
                    this.generatedWorld[layerNumber][xCoordinate][yCoordinate] = isFinite(tileNumber) ? tileNumber : -1;
                });
            });
        });
    }
}
