import { AssetType } from 'client/asset/AssetType';
import { InlineAsset } from 'client/asset/Asset';
import { AbstractAsset } from 'client/asset/AbstractAsset';

/**
 * the image class handles exactly one image
 */
export class Image extends AbstractAsset {

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
    public static register(...images: InlineAsset[]): void {

        // add the asset type
        images.forEach(image => image.assetType = AssetType.Image);

        // resiger all given images
        Image.getAssetLoader().registerAsset(Image, ...images);
    }

    /**
     * get the current image as bitmap image to draw this on the renderer
     */
    public async getData(): Promise<HTMLImageElement> {

        return new Promise<HTMLImageElement>(resolve => {

            let img = document.createElement('img');
            img.src = super.getData();

            resolve(img);
        });

    }
}