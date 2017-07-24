/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { World } from '../../world/World';
import { Camera } from '../../camera/Camera';
import { WorldRenderer } from '../WorldRenderer';
import { Singleton, EventName, Binary, Vector2D } from '../../../shared';
import { AssetStorage, AssetType, Image } from '../../asset';

/**
 * the canvas world renderer implementation
 */
export class CanvasWorldRenderer extends Singleton implements WorldRenderer {

    /**
     * holder of all world relevant cluster images
     * first dimension is the layer
     * second dimension is the cluster x
     * third dimension is the cluster y
     */
    private renderedClusterCache: ImageBitmap[][][] = [];

    /**
     * the global asset storage
     */
    private assetStorage: AssetStorage = AssetStorage.getInstance<AssetStorage>();

    constructor(
        private world: World,
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D,
        private camera: Camera
    ) {

        super();

        // listen for camera change
        this.on(EventName.CameraChange, (eventCamera: Camera, eventWorld: World) => {

            if (this.world === eventWorld)
                this.camera = eventCamera;
        });
    }

    /**
     * get the current world
     */
    public getWorld(): World {

        return this.world;
    }

    /**
     * get the currently active camera
     */
    public getActiveCamera(): Camera {

        return this.camera;
    }

    /**
     * renders all clusters into a cluster cache to speed
     * up the drawing process if the renderer
     */
    public async preRenderClusterTiles(): Promise<void> {

        // get the tilemap instance
        const tilemap = this.world.getTileMap();
        const clusterSize = this.world.getTileClusterSize();
        const clusters = this.world.getTileCluster();

        // create a tmp rendering context
        const canvas = document.createElement('canvas');
        canvas.width = tilemap.getDimension().x * clusterSize;
        canvas.height = tilemap.getDimension().y * clusterSize;
        const ctx = canvas.getContext('2d');

        // promise stack for tile rendering
        const clusterRenderPromiseStack: Array<Promise<any>> = [];

        // iterate through the clusters
        clusters.forEach((xCluster, layer) => {

            // check if the array is capable of storing the layer
            if (!Array.isArray(this.renderedClusterCache[layer]))
                this.renderedClusterCache[layer] = [];

            // iterate through the x cluster
            xCluster.forEach((yCluster, xCoordinate) => {

                // check if the array is capable of storing the x coordinate
                if (!Array.isArray(this.renderedClusterCache[layer][xCoordinate]))
                    this.renderedClusterCache[layer][xCoordinate] = [];

                // now the y coordinate
                yCluster.forEach((tiles, yCoordinate) => {

                    // store the rendered cluster
                    clusterRenderPromiseStack.push(this.renderTmpCluster(
                        tiles, canvas, ctx, clusterSize
                    ).then((clusterImg) => {

                        this.renderedClusterCache[layer][xCoordinate][yCoordinate] = clusterImg;
                    }));

                });
            });
        });

        // await the void promise
        return Promise.all(clusterRenderPromiseStack).then(() => { return; });
    }

    /**
     * render the world!
     */
    public render(): void {

        // generate clusters and display a cluster of one or many tiles
        // are visible by the active camera
        const tilemap = this.world.getTileMap();
        const tilemapDimension = Vector2D.from(
            tilemap.getDimension().x, tilemap.getDimension().y
        ).multiply(Vector2D.from(this.world.getTileClusterSize()));

        // iterate through the layers
        for (let layer = 0; layer < tilemap.getLayerCount(); layer++) {

            // y coordinate
            for (const yCluster of this.renderedClusterCache[layer]) {

                // fetch the coordinate
                const yCoordinate = this.renderedClusterCache[layer].indexOf(yCluster);

                // x coordinate
                for (const xCluster of this.renderedClusterCache[layer][yCoordinate]) {

                    // fetch the coordinate
                    const xCoordinate = this.renderedClusterCache[layer][yCoordinate].indexOf(xCluster);

                    // get information to render the cluster
                    // calculate the target position for the
                    // cluster tile and add the camera scale
                    const sizeVector = Vector2D.from(
                        xCoordinate * tilemapDimension.x,
                        yCoordinate * tilemapDimension.y
                    );

                    const position = this.camera.translatePosition(sizeVector);

                    // draw it!
                    this.ctx.drawImage(
                        xCluster,
                        0, 0,
                        sizeVector.x, sizeVector.y,
                        position.x, position.y,
                        sizeVector.x, sizeVector.y
                    );
                }
            }

        }

    }

    /**
     * renders a given tile number array on a temp rendering context
     *
     * @param tileNumber the tile numbers to render
     * @param ctx the tmp rendering context
     */
    private async renderTmpCluster(
        tileNumber: number[],
        canvas: HTMLCanvasElement,
        ctx: CanvasRenderingContext2D,
        clusterSize: number
    ): Promise<ImageBitmap> {

        const tilemap = this.world.getTileMap();
        const tilemapDimension = tilemap.getDimension();

        // clear the tmp canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // helper var to increment the y axis
        let yHelper = 0;

        // iterate through the tiles
        tileNumber.forEach((tile, index) => {

            // get tile x coordinate
            const xHelper = index % clusterSize;

            // draw the tile
            const assetName = `${this.world.getTileMap().getName()}[${tile}]`;

            // check if the asset is available
            if (this.assetStorage.hasAsset(assetName, AssetType.Image)) {
                const tileImage = this.assetStorage.getAsset<Image>(
                    assetName, AssetType.Image
                ).getData() as ImageBitmap;

                // increase y
                if (Math.floor(index / clusterSize) > yHelper)
                    yHelper++;

                // draw the tile on the tmp canvas context
                ctx.drawImage(
                    tileImage,
                    0, 0,
                    tileImage.width, tileImage.height,
                    xHelper * tilemapDimension.x,
                    yHelper * tilemapDimension.y,
                    tileImage.width, tileImage.height
                );
            }
        });

        // take the canvas picture as cluster image
        const clusterImage = canvas.toDataURL();

        // convert it to an imagebitmap
        return createImageBitmap(Binary.dataUriToBlob(clusterImage));
    }

}
