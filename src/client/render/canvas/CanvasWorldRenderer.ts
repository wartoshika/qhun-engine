/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { World } from '../../world/World';
import { Camera } from '../../camera/Camera';
import { WorldRenderer } from '../WorldRenderer';
import { Singleton, EventName, Binary } from '../../../shared';
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

                // draw the tile on the tmp canvas context
                ctx.drawImage(
                    tileImage,
                    0, 0,
                    tileImage.width, tileImage.height,
                    xHelper, yHelper,
                    tileImage.width, tileImage.height
                );
            }

            // increase y
            if (Math.floor(index / clusterSize) > yHelper)
                yHelper++;
        });

        // take the canvas picture as cluster image
        const clusterImage = canvas.toDataURL();

        // convert it to an imagebitmap
        return createImageBitmap(Binary.dataUriToBlob(clusterImage));
    }

}
