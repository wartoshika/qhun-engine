/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Renderer } from './Renderer';
import { CanvasRenderer } from './canvas/CanvasRenderer';
import { AssetType, AssetStorage, Asset } from '../asset';

import { Singleton, inject, Storage } from '../../shared';

/**
 * a class that handles the ramstorage cache to transform all assets
 * to a desired type. this allows to use ImageBitmap for canvas and other types
 * for other impl. like webgl
 */
export class ObjectCache extends Singleton {

    /**
     * the asset storage
     */
    private assetStorage = AssetStorage.getInstance<AssetStorage>();

    /**
     * transforms the current cache
     *
     * @param renderer the renderer object to know how to transform
     * @param assetTypes the asset types to transform
     */
    public async transformObjectCache(renderer: Renderer, ...assetTypes: AssetType[]): Promise<void> {

        switch (renderer.constructor) {

            case CanvasRenderer: return this.toImageBitmap(...assetTypes);
            default:
                throw new Error('Renderer not implelented!');
        }
    }

    /**
     * transforms the given asset types to imagebitmap
     *
     * @param assetTypes the asset types to transform
     */
    private async toImageBitmap(...assetTypes: AssetType[]): Promise<void> {

        const elements: Asset[] = [];
        const convertPromiseStack: Array<Promise<any>> = [];

        assetTypes.forEach((type) => {

            elements.push(...this.assetStorage.getAssetsByType(type));
        });

        // iterate and change type
        elements.forEach((element) => {

            // get name
            const name = this.assetStorage.getAssetStorageName(element.getName(), element.getType());

            // override data
            convertPromiseStack.push(createImageBitmap(element.getData() as Blob).then((bitmap) => {

                // set the data
                element.setData(bitmap as ImageBitmap);

                // readd to storage
                this.assetStorage.overrideAsset(element);
            }));
        });
    }
}
