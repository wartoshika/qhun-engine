/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { InlineAsset } from './Asset';
import { AbstractAsset } from './AbstractAsset';

/**
 * the image class handles exactly one image
 */
export class Image extends AbstractAsset {

    /**
     * register an image asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    public static register(...images: InlineAsset[]): void {

        // add the asset type
        images.forEach((image) => image.assetType = AssetType.Image);

        // resiger all given images
        return Image.getAssetLoader().registerAsset(Image, ...images);
    }

    constructor(
        name?: string,
        path?: string,
        data?: Blob
    ) {

        super(name, path, AssetType.Image, data);
    }
}
