/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { World } from '../world';
import { AssetLoader, AssetType, Image } from '../asset';

/**
 * the canvas world renderer implementation
 */
export class CanvasWorldRenderer {

    constructor(
        private world: World,
        private canvas: HTMLCanvasElement,
        private ctx: CanvasRenderingContext2D
    ) { }

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
            let verticalImage = mapLines[0].split(',');
            let verticalImageCount = verticalImage.length - 1;

            // get the asset loader instance
            let assetLoader = AssetLoader.getInstance<AssetLoader>();
            let tileDimension = this.world.getTileMap().getDimension();

            // iterate through all tiles
            for (let v = 0; v < verticalImageCount; v++) {

                // now every horizontal image in the line v
                for (let h = 0; h < horizontalImageCount; h++) {

                    // get the tile number from the map
                    let tileNumber = parseInt(mapLines[v].split(',')[h]);

                    // get the asset
                    // @todo: local asset caching meight be a performance improvement
                    let tileImage = assetLoader.getAsset<Image>(
                        `${this.world.getTileMap().getName()}[${tileNumber}]`,
                        AssetType.Image
                    );

                    // draw the tile
                    this.ctx.drawImage(
                        <ImageBitmap>tileImage.getData(),
                        h * tileDimension.x,
                        v * tileDimension.y
                    );
                }
            }

        }

    }
}