/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { AbstractAsset } from './AbstractAsset';

/**
 * the sprite class is able to handle multiple images build into
 * one big sprite graphic file
 */
export class Sprite extends AbstractAsset {

    constructor(
        name?: string,
        path?: string,
        data?: Blob,
        public map?: string
    ) {

        super(name, path, AssetType.Image, data);
    }
}
