/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { InlineAsset, Asset } from './Asset';
import { AssetLoader } from './AssetLoader';
import { Singleton } from '../../shared';
import { TileMap, InlineTileMapAsset } from './TileMap';
import { Image } from './Image';
import { Audio } from './Audio';
import { Sprite } from './Sprite';

declare type StandardAssets = 'Sprite' | 'Audio' | 'Image';
declare type TileMapAsset = 'TileMap';

/**
 * a class to provide easy access to the game asset registry
 */
export class AssetRegister extends Singleton {

    /**
     * the asset loader instance
     */
    private assetLoader = AssetLoader.getInstance<AssetLoader>();

    /**
     * register one or many assets in the game during preload phase
     *
     * @param assets the assets to register
     */
    public add(assetType: StandardAssets, ...assets: InlineAsset[]): void;
    public add(assetType: TileMapAsset, ...assets: InlineTileMapAsset[]): void;
    public add(assetType: string, ...assets: InlineAsset[]): void {

        const ctorCheck = assetType as any;
        let constructor: new () => Asset;

        switch (ctorCheck) {

            case 'Sprite': constructor = Sprite; break;
            case 'Audio': constructor = Audio; break;
            case 'Image': constructor = Image; break;
            case 'TileMap': constructor = TileMap; break;
            default: throw new Error(`${ctorCheck} is not a valid Asset!`);
        }

        // register the asset
        return this.assetLoader
            .registerAsset(constructor, ...assets);
    }
}
