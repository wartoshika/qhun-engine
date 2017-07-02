/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AbstractAsset } from './AbstractAsset';
import { AssetType } from './AssetType';
import { Image } from './Image';
import { InlineAsset } from './Asset';
import { Request } from '../network';
import { Dimension } from '../../shared/math';

interface InlineTileMapAsset extends InlineAsset {

    /**
     * the dimension of each tile
     */
    tileMapDimension: Dimension;
}

/**
 * an asset class to load a tilemap as world
 */
export class TileMap extends AbstractAsset {

    constructor(
        name?: string,
        path?: string,
        data?: string,
        public map?: string,
        public dimension?: Dimension
    ) {

        super(name, path, AssetType.TileMap, data);
    }

    /**
     * register a tilemap asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    public static async register(...tilemaps: InlineTileMapAsset[]): Promise<TileMap[]> {

        // get the asset loader
        let assetLoader = TileMap.getAssetLoader();
        let mapLoaderPromise: Promise<any>[] = [];
        let tileMapStack: string[] = [];

        // load sprite maps and add asset type to the inline asset
        tilemaps.forEach(tilemap => {

            // set the asset type
            tilemap.assetType = AssetType.Image;

            // get the map csv data file to save the map information
            mapLoaderPromise.push(
                Request.get(tilemap.path + ".csv")
                    .then(map => tileMapStack.push(map))
            );
        });

        // if the maps are loaded, start the regist
        // previously the current map loader promises should be added to
        // the asset loadering promises to prevent game from beeing started to early
        return Promise.all(assetLoader.addAssetLoaderPromise(new Promise<TileMap[]>(resolve => {

            // now await the map loading
            return Promise.all(mapLoaderPromise).then(() => {

                // register the sprite as image
                return assetLoader.registerAsset(TileMap, ...tilemaps).then(resources => {

                    // cast the resources
                    let tileMaps = <TileMap[]>resources;
                    let tileMapTransformPromise: Promise<any>[] = [];

                    // add the sprite maps
                    tileMaps.forEach((tilemap, index) => {

                        // add the map and the dimension
                        tilemap.map = tileMapStack[index];
                        tilemap.dimension = tilemaps[index].tileMapDimension;

                        // register all sub images
                        tileMapTransformPromise.push(
                            TileMap.registerTileMapSubImages(tilemap)
                        );
                    });

                    // await the sprite transform
                    return Promise.all(tileMapTransformPromise).then(() => {

                        // return all generated image assets
                        resolve(tileMaps);
                    });
                });
            });
        })));
    }

    /**
     * registers every tileMap image as image in the asset system
     *
     * @param tileMap the tilemap to register
     */
    private static async registerTileMapSubImages(tileMap: TileMap): Promise<Image[]> {

        // stack for all images
        let itemRegisterPromiseStack: Promise<Image>[] = [];
        let mapLines = tileMap.map.split(String.fromCharCode(13));
        let horizontalImageCount = mapLines.length;
        let verticalImageCount = mapLines[0].split(',').length;

        // create a canvas element for the picture extraction
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');

        // height and width are fixed
        canvas.width = tileMap.dimension.x;
        canvas.height = tileMap.dimension.y;

        // iterate through all tiles
        for (let v = 0; v < verticalImageCount; v++) {

            // now every horizontal image in the line v
            for (let h = 0; h < horizontalImageCount; h++) {

                // draw the image at the canvas
                ctx.drawImage(
                    <ImageBitmap>tileMap.getData(),
                    -(h * tileMap.dimension.x),
                    -(v * tileMap.dimension.y)
                );

                // get the image as data uri to register the new image
                itemRegisterPromiseStack.push(Image.register({
                    name: `${tileMap.name}[${v}${h}]`,
                    path: canvas.toDataURL()
                }));
            }
        }

        // await the registration process
        return Promise.all(itemRegisterPromiseStack);
    }
}