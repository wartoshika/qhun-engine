/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetType, AssetStorage } from '@client';
import { Binary, Log, LogLevel } from '@shared';

import { suite, test, context } from 'mocha-typescript';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { AssetMock } from './AssetMock';
import { UnitTestContext } from '../../';

@suite("client/asset/AssetStorage")
class Test {

    assetStorage: AssetStorage;
    context: UnitTestContext;

    before() {

        // create context
        this.context = new UnitTestContext();

        // set basic asset type
        AssetMock.currentAssetType = AssetType.Image;

        // create spies for the warning message
        this.context.addSpy(console, 'warn');

        // load asset storage instance
        this.assetStorage = AssetStorage.getInstance<AssetStorage>();
    }

    after() {

        // restore the asset storage cache
        this.assetStorage.clearStorage();

        // reset the spy
        this.context.removeAllSpies();
    }

    @test "addAsset() should be able to add assets"() {

        let asset = new AssetMock("testAssetName");
        this.assetStorage.addAsset(asset);

        // asset should be added
        expect(
            this.assetStorage.hasAsset("testAssetName", asset.getType())
        ).to.be.true;
    }

    @test "addAsset() should print a warning on double adding the same name and type"() {

        // add the assets
        this.assetStorage.addAsset(...[
            new AssetMock("test"),
            new AssetMock("test")
        ]);

        // warning message should be called
        sinon.assert.called(this.context.getSpy(console, 'warn'));
    }

    @test "hasAsset() should work correctly"() {

        const name = "test"
        expect(this.assetStorage.hasAsset(
            name, AssetType.Image
        )).to.be.false;

        // now add one
        this.assetStorage.addAsset(new AssetMock(name, AssetType.Image));
        expect(this.assetStorage.hasAsset(
            name, AssetType.Image
        )).to.be.true;
    }

    @test "getAssetAmount() should calculate a correct amount"() {

        expect(this.assetStorage.getAssetAmount(AssetType.Image)).to.eq(0);

        // add example assets
        this.assetStorage.addAsset(...[
            new AssetMock("test1", AssetType.Image),
            new AssetMock("test2", AssetType.Image),
            new AssetMock("test3", AssetType.Audio)
        ]);

        // check the counter
        expect(this.assetStorage.getAssetAmount(AssetType.Image)).to.eq(2);
        expect(this.assetStorage.getAssetAmount(AssetType.Audio)).to.eq(1);
        expect(this.assetStorage.getAssetAmount(AssetType.Json)).to.eq(0);
    }

}