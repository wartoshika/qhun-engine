import { AssetType } from 'client/asset/AssetType';
import { Asset, InlineAsset } from 'client/asset/Asset';
import { AbstractAsset } from 'client/asset/AbstractAsset';
import { Singleton, Binary } from 'shared/helper';
import { RamStorage } from 'shared/storage';
import { Log } from 'shared/log';
import { Request } from 'client/network';

/**
 * a class that can handle asset loading such as images and audio
 */
export class AssetLoader extends Singleton {

    /**
     * the holder of all unresolved asset loads
     */
    private unresolvedPromiseStack: Promise<AbstractAsset>[] = [];

    /**
     * register one or many assets to adress then later in the game
     * an asset name should allways be unique, event if the asset type
     * is different
     *
     * @param assetClass the class of the asset
     * @param assets the asset to register
     */
    public registerAsset(assetClass: new () => AbstractAsset, ...assets: InlineAsset[]): void {

        // iterate through all given assets
        assets.forEach(asset => {

            // check if the asset exists
            if (RamStorage.has(this.getAssetStorageName(asset.name, asset.assetType))) {

                // log a warning that an asset has a double register
                Log.warning("The given asset with the name", asset.name, "is allready registered.");
            }

            // add a promise to await its loading
            this.unresolvedPromiseStack.push(new Promise<AbstractAsset>(resolve => {

                // construct an instance of the asset
                let instance = new assetClass();
                instance.setName(asset.name);
                instance.setPath(asset.path);

                // fill the instance
                this.loadAsset(instance).then(resource => {

                    RamStorage.add(this.getAssetStorageName(asset.name, asset.assetType), resource);
                    resolve(resource);
                });
            }));
        });
    }

    /**
     * loads one asset
     *
     * @param instance the instance to be loaded
     */
    private async loadAsset(instance: Asset): Promise<Asset> {

        let callback: (path: string) => Promise<any>;
        switch (instance.getAssetType()) {

            case AssetType.Image:

                callback = this.loadImage.bind(this);
                break;
            default:

                throw `Asset type ${instance.getAssetType()} is not implemented`;
        }

        // load the resource
        let resource = await callback(instance.getPath());
        instance.setData(resource);

        return instance;
    }

    /**
     * get an asset from the storage
     *
     * @param name the name of the asset
     */
    public getAsset<T>(name: string, type: AssetType): T {

        // ask the ram storage for the asset
        return RamStorage.get<T>(this.getAssetStorageName(name, type));
    }

    /**
     * get the amount of currently registered assets of the given type
     *
     * @param type the asset type
     */
    public getAssetAmount(type: AssetType): number {

        return RamStorage.amount(this.getAssetStorageName('', type));
    }

    /**
     * get all unresolved assets from the register process
     */
    public getUnresolvedPromised(): Promise<AbstractAsset>[] {

        return this.unresolvedPromiseStack;
    }

    /**
     * get the storage asset name
     *
     * @param name the name of the asset
     */
    private getAssetStorageName(name: string, type: AssetType): string {

        let path = `assetloader.${type}`;
        if (name) path += `.${name}`;

        return path;
    }

    /**
     * load an image
     *
     * @param path the path to the image
     */
    private async loadImage(path: string): Promise<ImageBitmap> {

        // make an xhr call to the file
        return Request.getBinary(path).then((image) => {

            // create the image bitmap for the blob
            return createImageBitmap(Binary.dataUriToBlob(image));
        });
    }

    /**
     * load an audio file
     *
     * @param path the path to the audio file
     */
    private async loadAudio(path: string): Promise<any> {

    }

    /**
     * load a json file and parse its body
     *
     * @param path the path to the json file
     */
    private async loadJSON(path: string): Promise<any> {


    }

    /**
     * creates an html element at the dom to load assets
     *
     * @param tagName the tagname of the new element
     */
    private createDomElement(tagName: string): HTMLElement {

        // return the created element
        return document.createElement(tagName);
    }

}