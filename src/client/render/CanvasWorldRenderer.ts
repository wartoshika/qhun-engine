/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { World } from '../world';
import { AssetStorage, AssetType, Image } from '../asset';
import { Camera } from '../camera';
import { CameraOffsetCalculator } from './CameraOffsetCalculator';
import { Dimension } from '../../shared/math';

/**
 * the canvas world renderer implementation
 */
export class CanvasWorldRenderer {

    constructor(
        private world: World,
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D,
        private camera: Camera
    ) { }

    /**
     * get the current world
     */
    public getWorld(): World {

        return this.world;
    }

    /**
     * render the world!
     */
    public render(): void {

        // firstly an inperformant rendering
        // @todo: save the rendered tilemap as image to just draw the image if the camera is not moving

        // get the filemap asset from the world object
        let tileMap = this.world.getTileMap();

        // loop through the different layers
        for (let layer = 0; layer < tileMap.layerCount; layer++) {

            // build up the map object
            let mapLines = tileMap.getMap()[layer].split(String.fromCharCode(13));
            let horizontalImageCount = mapLines.length - 1;
            let verticalImageCount = mapLines.length - 1;

            // get the asset loader instance
            let assetStorage = AssetStorage.getInstance<AssetStorage>();
            let tileDimension = this.world.getTileMap().getDimension();

            // iterate through all tiles
            for (let v = 0; v < verticalImageCount; v++) {

                // now every horizontal image in the line v
                for (let h = 0; h < horizontalImageCount; h++) {

                    // get the tile number from the map
                    let tileNumber = parseInt(mapLines[v].split(',')[h]);

                    // ignore -1 tiles
                    if (tileNumber === -1) continue;

                    // get the asset
                    // @todo: local asset caching meight be a performance improvement
                    let tileImage = assetStorage.getAsset<Image>(
                        `${this.world.getTileMap().getName()}[${tileNumber}]`,
                        AssetType.Image
                    );

                    // draw the tile
                    let renderable = CameraOffsetCalculator.imageScaleDrawTile(
                        new Dimension(
                            h * tileDimension.x, v * tileDimension.y
                        ), tileImage, this.camera
                    );

                    // is not visible, ignore
                    if (!renderable) continue;

                    (<any>this.ctx).drawImage(...<any[]>renderable);

                }
            }

        }

    }
}