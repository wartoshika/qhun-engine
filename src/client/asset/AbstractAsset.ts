import { Asset } from 'client/asset/Asset';
import { AssetType } from 'client/asset/AssetType';
import { AssetLoader } from 'client/asset/AssetLoader';

/**
 * a basic class for implementing the getter and setter function
 * of the required asset interface
 */
export abstract class AbstractAsset implements Asset {

    /**
     * holder of the asset loader
     */
    private static assetLoader = AssetLoader.getInstance<AssetLoader>();

    constructor(
        protected name?: string,
        protected path?: string,
        protected type?: AssetType,
        protected data?: any
    ) { }

    /**
     * get the asset loader instance to load the desired asset
     */
    protected static getAssetLoader(): AssetLoader {

        return AbstractAsset.assetLoader;
    }

    public getName(): string {

        return this.name;
    }

    public getPath(): string {

        return this.path;
    }

    public getAssetType(): AssetType {

        return this.type;
    }

    public getData(): any {

        return this.data;
    }

    public setName(name: string): void {

        this.name = name;
    }

    public setPath(path: string): void {

        this.path = path;
    }

    public setData(data: string): void {

        this.data = data;
    }
}