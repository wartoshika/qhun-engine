/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Asset } from '../Asset';
import { TileMap } from '../TileMap';
import { Image } from '../Image';
import { TypeLoader } from './TypeLoader';
import { Request } from '../../network';
import { Singleton, Binary } from '../../../shared';

/**
 * the image asset loader class
 */
export class TilemapLoader extends Singleton implements TypeLoader {

    /**
     * the delimiter used to split the tile maps
     * override it if you have an other delimiter
     */
    public static TILE_MAP_DELIMITER = ',';

    /**
     * load the asset into the given instance
     */
    public async load(path: string, instance: TileMap): Promise<Asset[]> {

        // get the image and map files
        const tilemapSpriteImage = await Request.getBinary(path);
        const tilemapCsvPromiseStack: Array<Promise<void>> = [];

        // prepare the tilemap layers
        instance.map = [];

        // for each layer get the map file
        for (let layer = 0; layer < instance.getLayerCount(); layer++) {

            tilemapCsvPromiseStack.push(Request.get(
                `${instance.getPath()}.${layer}.csv`
            ).then((csvMap) => {

                // set the map of the tilemap
                instance.map[layer] = csvMap;
            }));
        }

        // resolve promises
        await tilemapCsvPromiseStack;

        // save the binary picture
        const blob = Binary.bufferToBlob(tilemapSpriteImage);
        const bitmap = await createImageBitmap(blob);
        instance.setData(blob);

        // get all sub images from the image using the map
        return [
            // the current instance
            instance,
            // and the sub images
            ...this.registerTilemapSubImages(instance, bitmap)
        ];
    }

    /**
     * extracts all sub images from a sprite tilemap image
     *
     * @param instance the tilemap instance
     */
    private registerTilemapSubImages(instance: TileMap, bitmap: ImageBitmap): Image[] {

        // get the amount of tiles
        const dimension = instance.getDimension();
        const horizontalTileAmount = bitmap.width / dimension.x;
        const verticalTileAmount = bitmap.height / dimension.y;

        // save the world dimension
        instance.worldHeight = verticalTileAmount;
        instance.worldWidth = horizontalTileAmount;

        // create a canvas element for the picture extraction
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const imageStack: Image[] = [];

        // the tile number counter
        let tileCounter = 0;

        // iterate through all tiles
        for (let v = 0; v < verticalTileAmount; v++) {

            // now every horizontal image in the line v
            for (let h = 0; h < horizontalTileAmount; h++) {

                // clear to get a transparent background
                ctx.clearRect(0, 0, dimension.x, dimension.y);

                // draw the image at the canvas
                ctx.drawImage(
                    bitmap,
                    -(h * dimension.x),
                    -(v * dimension.y)
                );

                // get the image as data uri to register the new image
                imageStack.push(
                    new Image(
                        `${instance.getName()}[${tileCounter++}]`,
                        '',
                        Binary.dataUriToBlob(canvas.toDataURL())
                    )
                );
            }
        }

        // return all images
        return imageStack;
    }
}
