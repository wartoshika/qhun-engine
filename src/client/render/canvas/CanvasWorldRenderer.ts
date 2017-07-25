/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { World } from '../../world/World';
import { Camera } from '../../camera/Camera';
import { WorldRenderer } from '../WorldRenderer';
import { Singleton, EventName, Binary, Vector2D, Dimension } from '../../../shared';
import { AssetStorage, AssetType, Image } from '../../asset';

/**
 * the canvas world renderer implementation
 */
export class CanvasWorldRenderer extends Singleton implements WorldRenderer {

    /**
     * holder of all world relevant cluster images
     * first dim: x
     * second dim: y
     */
    private renderedLayerCache: ImageBitmap[][] = [];

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
     * render all tile layers into a cache bitmap to speed up rendering
     */
    public async preRenderLayers(): Promise<void> {

        // build a renderable context
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // iterate through the different layers
        const map = this.world.getGeneratedWorld();
        const mapWidth = map[0].length;
        const mapHeight = map[0][0].length;

        // tile size
        const tileDimension = this.world.getTileMap().getDimension();
        canvas.width = tileDimension.x;
        canvas.height = tileDimension.y;

        // render stack
        const renderConvertPromiseStack: Array<Promise<void>> = [];

        // iterate through the x and y axis
        for (let x = 0; x < mapWidth; x++) {

            // y axis
            for (let y = 0; y < mapHeight; y++) {

                // get the tile numbers for this position
                const positionVector = Vector2D.from(x, y);
                const tileNumbers = this.world.getTileNumbersForPosition(positionVector);

                // clear the canvas context
                ctx.clearRect(0, 0, tileDimension.x, tileDimension.y);

                // draw the tiles
                tileNumbers.forEach((tile, layer) => {

                    // if the tile number is smaller or eq then 0 ignore it
                    if (tile <= 0) return;

                    // get the image from the asset storage
                    const tileName = `${this.world.getName()}[${tile}]`;
                    const tileImage = this.assetStorage.getAsset<Image>(
                        tileName, AssetType.Image
                    ).getData() as ImageBitmap;

                    // draw the tile
                    ctx.drawImage(
                        tileImage, 0, 0
                    );
                });

                // save the image
                renderConvertPromiseStack.push(
                    createImageBitmap(Binary.dataUriToBlob(canvas.toDataURL()))
                        .then((bitmap) => {

                            // array accessable
                            if (!Array.isArray(this.renderedLayerCache[x])) {
                                this.renderedLayerCache[x] = [];
                            }

                            // save the bitmap in the cache
                            this.renderedLayerCache[x][y] = bitmap;
                        })
                );
            }

        }

        // await the rendering process
        return Promise.all(renderConvertPromiseStack).then(() => { return; });
    }

    /**
     * render the world!
     */
    public render(): void {

        // iterate through the different layers
        const map = this.world.getGeneratedWorld();
        const mapWidth = map[0].length;
        const mapHeight = map[0][0].length;

        // iterate through the x and y axis
        for (let x = 0; x < mapWidth; x++) {

            // y axis
            for (let y = 0; y < mapHeight; y++) {

                // get the multilayer image
                const tileImage = this.renderedLayerCache[x][y];

                // get information to render the cluster
                // calculate the target position for the
                // cluster tile and add the camera scale
                const positionVector = Vector2D.from(
                    x * tileImage.width,
                    y * tileImage.height
                );

                // get the position camera based
                const cameraPosition = this.camera.translatePosition(positionVector);

                // get the cluster width and height including camera scale
                const sizeVector = Vector2D.from(
                    tileImage.width, tileImage.height
                ).multiply(this.camera.getScaleVector());

                // draw it!
                this.ctx.drawImage(
                    tileImage,
                    0, 0,
                    tileImage.width, tileImage.height,
                    cameraPosition.x, cameraPosition.y,
                    sizeVector.x, sizeVector.y
                );
            }
        }

    }
}
