/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
    AbstractAsset, InlineAsset, AssetType, Asset, AssetLoader
} from '@client';

/**
 * a mock for a basic asset
 */
export class AssetMock extends AbstractAsset {

    public static currentAssetType: AssetType = AssetType.Image;

    /**
     * register some assets
     *
     * @param assets the assets to register
     */
    public static register(...assets: InlineAsset[]): void {

        // add the asset type
        assets.forEach((asset) => asset.assetType = AssetMock.currentAssetType);

        // resiger all given assets
        return AssetLoader.getInstance<AssetLoader>()
            .registerAsset(AssetMock, ...assets);
    }

    constructor(
        name?: string,
        type?: AssetType,
        path?: string,
        data?: Blob
    ) {

        super(name, path, type || AssetMock.currentAssetType, data);
    }
}
