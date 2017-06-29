import { AssetType } from 'client/asset/AssetType';

export interface Asset {

    getName(): string;
    getPath(): string;
    getAssetType(): AssetType;
    getData(): string;

    setName(name: string): void;
    setPath(path: string): void;
    setData(data: string): void;
}

export interface InlineAsset {

    name: string;
    path: string;
    assetType?: AssetType;
    data?: string;
}