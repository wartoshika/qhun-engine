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
import { Singleton, Binary, Vector2D } from '../../../shared';

/**
 * the image asset loader class
 */
export class TilemapLoader extends Singleton implements TypeLoader {

    /**
     * load the asset into the given instance
     */
    public async load(path: string, instance: TileMap): Promise<Asset[]> {

        // get the image and map files
        const tilemapSpriteImage = await Request.getBinary(path);

        // get and set the json world
        const jsonWorld = await Request.get(instance.getWorldUrl());

        // extract the world information
        const jsonWorldObject = JSON.parse(jsonWorld);
        instance.setWorld({
            layers: jsonWorldObject.layers,
            tileheight: jsonWorldObject.tileheight,
            tilewidth: jsonWorldObject.tilewidth,
            height: jsonWorldObject.height,
            width: jsonWorldObject.width
        });

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
        const tileSize = instance.getDimension();
        const horizontalTileAmount = bitmap.width / tileSize.x;
        const verticalTileAmount = bitmap.height / tileSize.y;

        // create a canvas element for the picture extraction
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const imageStack: Image[] = [];

        // set canvas size
        canvas.width = tileSize.x;
        canvas.height = tileSize.y;

        // the tile number counter
        // json world maps are 1 based
        let tileCounter = 1;

        // iterate through all tiles
        for (let v = 0; v < verticalTileAmount; v++) {

            // now every horizontal image in the line v
            for (let h = 0; h < horizontalTileAmount; h++) {

                // clear to get a transparent background
                ctx.clearRect(0, 0, tileSize.x, tileSize.y);

                // draw the image at the canvas
                ctx.drawImage(
                    bitmap,
                    -(h * tileSize.x),
                    -(v * tileSize.y)
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
