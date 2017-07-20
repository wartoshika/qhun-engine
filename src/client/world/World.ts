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
     * the clustered map
     * first dimension is the layer
     * second dimension is the x cluster number
     * second dimension is the y cluster number
     * forth dimension is the tile number array
     */
    protected tileCluster: number[][][][] = [];

    /**
     * all available cameras
     */
    protected camera: Camera[] = [];

    /**
     * the logger instance
     */
    private logger: Log = Log.getLogger(World.name);

    /**
     * @param map the map to show
     * @param tileClusterSize the cluster size for every world. tiles will be clustered info one image
     * to boost the performance. a larger number is better for smaller worlds,
     * a smaller number is better for larger worlds. 4 means 4x4 cluster equals 16 tiles in a cluster
     * @param gravity the gravity that is present on this world
     */
    constructor(
        tileMapName: string,
        private tileClusterSize: number = 1,
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
     * get the current active cluster size of the world
     */
    public getTileClusterSize(): number {

        return this.tileClusterSize;
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
     * set the current cluster size of the world
     *
     * @param clusterSize the new size
     */
    public setTileClusterSize(clusterSize: number): void {

        this.tileClusterSize = clusterSize;
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
     * get the tile cluster as a tile number multidimensional array
     */
    public getTileCluster(): number[][][][] {

        return this.tileCluster;
    }

    /**
     * get the tile numbers for a position on the map
     * if the position is not on the map, a -2 will be returned
     *
     * @param position the point on the tile map
     */
    public getTileNumbersForPosition(position: Vector2D): number[] {

        const numbers: number[] = [];

        // first get cluster number
        const cluster = this.getClusterNumber(position);

        // search for the tile number
        for (let layer = 0; layer < this.tileCluster.length - 1; layer++) {

            try {

                // try to access the cluster path
                const tileInCluster = this.tileCluster[layer][cluster.x][cluster.y];

                // now check the concrete tile number
                // keep in mind that in a 4x4 scenario a total of 16 tile
                // numbers are present in the array
                // after 4 tiles, the y coordinate must be increated by 1
                // to fit a square
                const xHelper = Math.floor(position.x % this.tileClusterSize);
                const yHelper = Math.floor(position.y % this.tileClusterSize);

                // increment the two coordinates to get the right tile number
                numbers.push(xHelper + yHelper);

            } catch (e) {

                // if an error occured, the tile is not available in this layer
                // or the cluster ended before the tile number reached
                // in this case put -2 because the position is not on the map
                numbers.push(-2);
            }
        }

        return numbers;
    }

    /**
     * generates the tile clusters used by the renderer to speed up
     * the rendering process
     */
    public generateTileCluster(): void {

        // iterate through the map and each layer
        this.map.map.forEach((map, layerNumber) => {

            if (!Array.isArray(this.tileCluster[layerNumber]))
                this.tileCluster[layerNumber] = [];

            // the y axis
            map.split(String.fromCharCode(13)).forEach((line, yCoordinate) => {

                // the x axis
                line.trim().split(TilemapLoader.TILE_MAP_DELIMITER).forEach((tile, xCoordinate) => {

                    // detect the cluster number
                    const cluster = this.getClusterNumber(
                        Vector2D.from(xCoordinate, yCoordinate)
                    );

                    // check if the cluster array is capable of taking the numbers
                    if (!Array.isArray(this.tileCluster[layerNumber][cluster.x]))
                        this.tileCluster[layerNumber][cluster.x] = [];
                    if (!Array.isArray(this.tileCluster[layerNumber][cluster.x][cluster.y]))
                        this.tileCluster[layerNumber][cluster.x][cluster.y] = [];

                    // add the tile numbers
                    const tileNumber = parseInt(tile, 10);
                    this.tileCluster[layerNumber][cluster.x][cluster.y].push(
                        tileNumber ? tileNumber : -2
                    );
                });
            });
        });
    }

    /**
     * get the cluster number for a position
     *
     * @param position the position to check the cluster of
     */
    private getClusterNumber(position: Vector2D): Vector2D {

        return Vector2D.from(
            Math.floor(position.x / this.tileClusterSize),
            Math.floor(position.y / this.tileClusterSize)
        );
    }
}
