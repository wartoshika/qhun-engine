/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AbstractAsset, InlineAsset, AssetType } from '@client';

/**
 * a mock for a basic asset
 */
export class AssetMock extends AbstractAsset {

    public static currentAssetType: AssetType = AssetType.Image;

    constructor(
        name?: string,
        type?: AssetType,
        path?: string,
        data?: any
    ) {

        super(name, path, type || AssetMock.currentAssetType, data);
    }

    /**
     * register some assets
     *
     * @param assets the assets to register
     */
    public static async register(...assets: InlineAsset[]): Promise<any> {

        // add the asset type
        assets.forEach(asset => asset.assetType = AssetMock.currentAssetType);

        // resiger all given assets
        return AssetMock.getAssetLoader().registerAsset(AssetMock, ...assets);
    }
}