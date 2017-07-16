/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { InlineAsset } from './Asset';
import { Image } from './Image';
import { AbstractAsset } from './AbstractAsset';
import { Request } from '../network';
import { File } from '../../shared/helper';

const SPRITE_MAP_DELIMITER = ',';

/**
 * an internal enum to index the correct array position for sprite maps
 */
enum SpriteMapInformation {

    Name, OffsetLeft, OffsetTop, Width, Height
}

/**
 * the sprite class is able to handle multiple images build into
 * one big sprite graphic file
 */
export class Sprite extends AbstractAsset {

    /**
     * register a sprite asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    public static register(...sprites: InlineAsset[]): void {

        // add asset type
        sprites.forEach((sprite) => sprite.assetType = AssetType.Image);

        // register the asset
        return Sprite.getAssetLoader().registerAsset(Sprite, ...sprites);
        /*

        // get the asset loader
        let assetLoader = Sprite.getAssetLoader();
        let mapLoaderPromise: Promise<any>[] = [];
        let spriteMap: string[] = [];

        // load sprite maps and add asset type to the inline asset
        sprites.forEach(sprite => {

            // set the asset type
            sprite.assetType = AssetType.Image;

            // get the sprite data file to split up the images
            mapLoaderPromise.push(
                Request.get(sprite.path + '.sprite')
                    .then(map => spriteMap.push(map))
            );
        });

        // if the maps are loaded, start the regist
        // previously the current map loader promises should be added to
        // the asset loadering promises to prevent game from beeing started to early
        return Promise.all(assetLoader.addAssetLoaderPromise(new Promise<Sprite[]>(resolve => {

            // now await the map loading
            return Promise.all(mapLoaderPromise).then(() => {

                // register the sprite as image
                return assetLoader.registerAsset(Sprite, ...sprites).then(resources => {

                    // cast the resources
                    let sprites = <Sprite[]>resources;
                    let spriteTransformPromise: Promise<any>[] = [];

                    // add the sprite maps
                    sprites.forEach((sprite, index) => {

                        // add the map
                        sprite.map = spriteMap[index];

                        // register all sub images
                        spriteTransformPromise.push(
                            Sprite.registerSpriteSubImages(sprite)
                        );
                    });

                    // await the sprite transform
                    return Promise.all(spriteTransformPromise).then(() => {

                        // return all generated image assets
                        resolve(sprites);
                    });
                });
            });
        }))); */
    }

    /**
     * extracts all sub images from a sprite image by its map
     * and register them as single image
     */
    private static async registerSpriteSubImages(sprite: Sprite): Promise<Image[]> {

        // split the map into lines and count them
        const mapLines = sprite.map.split(String.fromCharCode(13));
        const countImages = mapLines.length;
        const itemRegisterPromiseStack: Array<Promise<Image>> = [];

        // create a canvas element for the picture extraction
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // iterate through all sub images
        for (let i = 0; i < countImages; i++) {

            // get the information of image width and height
            const info = mapLines[i].split(',');

            // set the canvas height and width
            canvas.width = parseInt(info[SpriteMapInformation.Width], 10);
            canvas.height = parseInt(info[SpriteMapInformation.Height], 10);

            // draw the image on the canvas
            ctx.drawImage(
                sprite.getData() as ImageBitmap,
                -parseInt(info[SpriteMapInformation.OffsetLeft], 10),
                -parseInt(info[SpriteMapInformation.OffsetTop], 10)
            );

            // get the image as data uri to register the new image
            itemRegisterPromiseStack.push(Image.register({
                name: `${sprite.name}[${info[SpriteMapInformation.Name].trim()}]`,
                path: canvas.toDataURL()
            }));
        }

        // await the registration process
        return Promise.all(itemRegisterPromiseStack);
    }

    constructor(
        name?: string,
        path?: string,
        data?: Blob,
        public map?: string
    ) {

        super(name, path, AssetType.Image, data);
    }

}
