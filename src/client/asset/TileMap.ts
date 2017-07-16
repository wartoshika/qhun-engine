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

    /**
     * the amount of layers this tilemap has
     * @default 1
     */
    layerCount?: number;
}

/**
 * an asset class to load a tilemap as world
 */
export class TileMap extends AbstractAsset {

    /**
     * register a tilemap asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    public static register(...tilemaps: InlineTileMapAsset[]): void {

        // add asset type
        tilemaps.forEach((tilemap) => tilemap.assetType = AssetType.TileMap);

        // register the asset
        return TileMap.getAssetLoader().registerAsset(TileMap, ...tilemaps);

        /*
        // get the asset loader
        let assetLoader = TileMap.getAssetLoader();
        let mapLoaderPromise: Promise<any>[] = [];
        let tileMapStack: string[][] = [];

        // load sprite maps and add asset type to the inline asset
        tilemaps.forEach((tilemap, index) => {

            // get the layer amount
            tilemap.layerCount = tilemap.layerCount || 1;

            // set the asset type
            tilemap.assetType = AssetType.TileMap;

            // array init
            tileMapStack[index] = []

            // get the map csv data file to save the map information
            if (tilemap.layerCount === 1) {

                // array init
                tileMapStack[index][0] = "";

                // just one layer, include it
                mapLoaderPromise.push(
                    Request.get(tilemap.path + ".csv")
                        .then(map => tileMapStack[index][0] = map)

                );
            } else {

                // multiLayer
                for (let layer = 0; layer < tilemap.layerCount; layer++) {

                    // array init
                    tileMapStack[index][layer] = "";

                    // just one layer, include it
                    mapLoaderPromise.push(
                        Request.get(`${tilemap.path}.${layer}.csv`)
                            .then(map => tileMapStack[index][layer] = map)

                    );
                }
            }
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
                        tilemap.layerCount = tilemaps[index].layerCount;

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
        })));*/
    }

    /**
     * registers every tileMap image as image in the asset system
     *
     * @param tileMap the tilemap to register
     */
    private static async registerTileMapSubImages(tileMap: TileMap): Promise<Image[]> {

        // the first check is, how height and width the tilemap image is
        // with this data and the dimension of each tile, the loop
        // can be build to get each tile as seperate image
        const tileMapHeight = (tileMap.getData() as ImageBitmap).height;
        const tileMapWidth = (tileMap.getData() as ImageBitmap).width;

        // get the amount of tiles
        const horizontalTileAmount = tileMapWidth / tileMap.dimension.x;
        const verticalTileAmount = tileMapHeight / tileMap.dimension.y;

        // create a canvas element for the picture extraction
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const itemRegisterPromiseStack: Array<Promise<Image>> = [];

        // height and width of each tile is fixed
        canvas.width = tileMap.dimension.x;
        canvas.height = tileMap.dimension.y;

        // the tile number counter
        let tileCounter = 0;

        // iterate through all tiles
        for (let v = 0; v < verticalTileAmount; v++) {

            // now every horizontal image in the line v
            for (let h = 0; h < horizontalTileAmount; h++) {

                // clear to get a transparent background
                ctx.clearRect(0, 0, tileMap.dimension.x, tileMap.dimension.y);

                // draw the image at the canvas
                ctx.drawImage(
                    tileMap.getData() as ImageBitmap,
                    -(h * tileMap.dimension.x),
                    -(v * tileMap.dimension.y)
                );

                // get the image as data uri to register the new image
                itemRegisterPromiseStack.push(Image.register({
                    name: `${tileMap.name}[${tileCounter++}]`,
                    path: canvas.toDataURL()
                }));
            }
        }

        // await the registration process
        return Promise.all(itemRegisterPromiseStack);
    }

    constructor(
        name?: string,
        path?: string,
        data?: Blob,
        public map?: string[],
        public dimension?: Dimension,
        public layerCount?: number
    ) {

        super(name, path, AssetType.TileMap, data);
    }

    /**
     * get the map of the filemap object
     */
    public getMap(): string[] {

        return this.map;
    }

    /**
     * get the tile dimension object
     */
    public getDimension(): Dimension {

        return this.dimension;
    }

    /**
     * get the amount of pixel for the complete world
     */
    public getWorldDimension(): Dimension {

        // @todo: asuming that each layer has the same height and width
        const width = this.map[0].split(String.fromCharCode(13))[0].split(',').length;
        const height = this.map[0].split(String.fromCharCode(13)).length - 1;

        // multiply with the tile width and height
        return new Dimension(
            width * this.dimension.x,
            height * this.dimension.y
        );
    }

}
