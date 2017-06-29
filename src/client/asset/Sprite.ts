import { AssetType } from 'client/asset/AssetType';
import { InlineAsset } from 'client/asset/Asset';
import { AbstractAsset } from 'client/asset/AbstractAsset';

/**
 * the sprite class is able to handle multiple images build into
 * one big sprite graphic file
 */
export class Sprite extends AbstractAsset {

    constructor(
        name?: string,
        path?: string,
        data?: string
    ) {

        super(name, path, AssetType.Image, data);
    }

    /**
     * register an image asset
     *
     * @param name the unique name of the image
     * @param path the path to the image
     */
    public static register(...sprites: InlineAsset[]): void {

        // add the asset type
        sprites.forEach(sprite => sprite.assetType = AssetType.Image);

        // resiger all given images
        Sprite.getAssetLoader().registerAsset(Sprite, ...sprites);
    }
}