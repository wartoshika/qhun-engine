import { AssetType } from 'client/asset/AssetType';
import { InlineAsset } from 'client/asset/Asset';
import { AbstractAsset } from 'client/asset/AbstractAsset';

export class Sound extends AbstractAsset {

    constructor(
        name?: string,
        path?: string,
        data?: string
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