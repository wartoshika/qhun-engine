/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Asset } from '../Asset';
import { Image } from '../Image';
import { AssetType } from '../AssetType';
import { Request } from '../../network';
import { TypeLoader } from './TypeLoader';
import { Singleton, Binary } from '../../../shared';

/**
 * an internal enum to index the correct array position for sprite maps
 */
enum SpriteMapInformation {

    Name, OffsetLeft, OffsetTop, Width, Height
}

/**
 * the image asset loader class
 */
export class SpriteLoader extends Singleton implements TypeLoader {

    /**
     * the delimiter used to split the sprite maps
     * override it if you have an other delimiter
     */
    public static SPRITE_MAP_DELIMITER = ',';

    /**
     * load the asset into the given instance
     */
    public async load(path: string, instance: Asset): Promise<Asset[]> {

        // get the image and map files
        const image = await Request.getBinary(path);
        const map = await Request.get(`${path}.sprite`);

        // convert the image to an image bitmap
        const blob = Binary.bufferToBlob(image);
        const bitmap = await createImageBitmap(blob);

        // save the blob value
        instance.setData(blob);

        // get all sub images from the image using the map
        return [
            // the current instance
            instance,
            // and the sub images
            ...this.loadSpriteSubImages(instance, bitmap, map)
        ];
    }

    /**
     * extracts the sub images from a sprite image
     */
    private loadSpriteSubImages(sprite: Asset, bitmap: ImageBitmap, map: string): Image[] {

        // split the map into lines and count them
        const mapLines = map.split(String.fromCharCode(13));
        const countImages = mapLines.length;
        const imageStack: any[] = [];

        // create a canvas element for the picture extraction
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // iterate through all sub images
        for (let i = 0; i < countImages; i++) {

            // get the information of image width and height
            const info = mapLines[i].split(SpriteLoader.SPRITE_MAP_DELIMITER);

            // set the canvas height and width
            canvas.width = parseInt(info[SpriteMapInformation.Width], 10);
            canvas.height = parseInt(info[SpriteMapInformation.Height], 10);

            // draw the image on the canvas
            ctx.drawImage(
                bitmap,
                -parseInt(info[SpriteMapInformation.OffsetLeft], 10),
                -parseInt(info[SpriteMapInformation.OffsetTop], 10)
            );

            // add the image
            imageStack.push(
                new Image(
                    `${sprite.getName()}[${info[SpriteMapInformation.Name].trim()}]`,
                    sprite.getPath(),
                    Binary.dataUriToBlob(canvas.toDataURL())
                )
            );
        }

        // return all images
        return imageStack;
    }

}
