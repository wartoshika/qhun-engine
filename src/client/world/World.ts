/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { OnWorldInit } from './OnWorldInit';
import { GravityForce } from '../physic';
import {
    Point2, Log, GenericEventEmitter, EventName
} from '../../shared';
import { TileMap, AssetStorage, AssetType } from '../asset';
import { Camera } from '../camera';
import { TilemapLoader } from '../asset/assetTypeLoader';
import { Entity } from '../../shared/entity';

// a const for tile number not on the world map
export const TILE_NOT_ON_MAP = -2;

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
     * the tiles as multisizeal world array
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
        private gravity: Point2<GravityForce> = new Point2<GravityForce>(
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
     * get the size of the world using the tilemap information
     */
    public getWorldSize(): Point2 {

        return this.map.getWorldSize();
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
    public addCamera(...cameras: Camera[]): void {

        // get the tile size
        const tileSize = this.getTileMap().getSize();
        const worldDimension = this.getWorldSize();

        // set world bounds!
        cameras.forEach((camera) => camera.setWorldBounds(
            new Point2(
                worldDimension.x * tileSize.x,
                worldDimension.y * tileSize.y
            )
        ));

        // push them
        this.camera.push(...cameras);
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
     * -2 for tile not on the map
     *
     * @param position the point on the tile map
     */
    public getTileNumbersForPosition(position: Point2): number[] {

        // merge the mapped number[][] to number[]
        return [].concat.apply([], this.generatedWorld.map((tiles, layer) => {
            try {
                return tiles[position.x][position.y];
            } catch (e) { return; }
        }).filter((tile) => isFinite(tile as number)));
    }

    /**
     * get the generated world as multisizeal array
     * first dim: layer
     * second dim: x
     * third dim: y
     */
    public getGeneratedWorld(): number[][][] {

        return this.generatedWorld;
    }

    /**
     * generate a multisizeal world array
     */
    public generateWorld(): void {

        // get the world width to know when to break a row
        const worldWidth = this.map.getWorldSize().x;

        // iterate through the map and each layer
        this.map.getWorld().forEach((layer, layerNumber) => {

            // helper vars for x any y axis
            let first = true;
            let yHelper = 0;
            let xHelper = 0;

            // check array
            if (!Array.isArray(this.generatedWorld[layerNumber]))
                this.generatedWorld[layerNumber] = [];

            // walk through the numbers
            layer.data.forEach((tileNumber, tileIndex) => {

                // get the x value
                xHelper = tileIndex % worldWidth;

                // check y axis
                if (xHelper === 0 && !first)
                    yHelper++;

                // check array
                if (!Array.isArray(this.generatedWorld[layerNumber][xHelper]))
                    this.generatedWorld[layerNumber][xHelper] = [];

                // set the tile number
                this.generatedWorld[layerNumber][xHelper][yHelper] = tileNumber;

                // first zero passed
                first = false;
            });

        });

        // set the world bounds
        this.generateWorldBounds();

    }

    /**
     * fills the map with TILE_NOT_ON_MAP tiles as world bound
     */
    private generateWorldBounds(): void {

        // get the world width to know when to break a row
        const worldDimension = this.map.getWorldSize();

        // iterate layers
        this.map.getWorld().forEach((layer, layerNumber) => {

            // x axis
            for (let x = -1; x < worldDimension.x + 1; x++) {

                if (!Array.isArray(this.generatedWorld[layerNumber][x]))
                    this.generatedWorld[layerNumber][x] = [];

                // top
                this.generatedWorld[layerNumber][x][-1] = TILE_NOT_ON_MAP;

                // bottom
                this.generatedWorld[layerNumber][x][worldDimension.y] = TILE_NOT_ON_MAP;
            }

            // y axis
            for (let y = -1; y < worldDimension.y + 1; y++) {

                // top
                this.generatedWorld[layerNumber][-1][y] = TILE_NOT_ON_MAP;

                // bottom
                this.generatedWorld[layerNumber][worldDimension.x][y] = TILE_NOT_ON_MAP;
            }
        });
    }

}
