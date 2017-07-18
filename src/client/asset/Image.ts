/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { AssetDataType } from './Asset';
import { AbstractAsset } from './AbstractAsset';

/**
 * the image class handles exactly one image
 */
export class Image extends AbstractAsset {

    constructor(
        name?: string,
        path?: string,
        data?: AssetDataType
    ) {

        super(name, path, AssetType.Image, data);
    }
}
