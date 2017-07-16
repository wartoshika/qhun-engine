/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { AbstractAsset } from './AbstractAsset';

export class Audio extends AbstractAsset {

    constructor(
        name?: string,
        path?: string,
        data?: Blob,
        public map?: string
    ) {

        super(name, path, AssetType.Audio, data);
    }
}
