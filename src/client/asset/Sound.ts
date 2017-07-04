/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType } from './AssetType';
import { InlineAsset } from './Asset';
import { AbstractAsset } from './AbstractAsset';

export class Sound extends AbstractAsset {

    constructor(
        name?: string,
        path?: string,
        data?: Blob
    ) {

        super(name, path, AssetType.Audio, data);
    }

    /**
     * register an image asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    public static register(...sounds: InlineAsset[]): void {

        // add the asset type
        sounds.forEach(sound => sound.assetType = AssetType.Audio);

        // resiger all given sounds
        Sound.getAssetLoader().registerAsset(Sound, ...sounds);
    }
}