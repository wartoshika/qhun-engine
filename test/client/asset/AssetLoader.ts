/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Request, AssetType } from '@client';
import { Binary } from '@shared';

import { suite, test, context } from 'mocha-typescript';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { AssetMock } from './AssetMock';
import { SinonFakeXhr } from '../network/SinonFakeXhr';
import { UnitTestContext } from '../../';

// a simple test asset image
let testImage: string = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
let binaryTestImage: string = Binary.bufferToString(
    Binary.dataUriToBuffer(testImage)
);

@suite("client/asset/AssetLoader")
class Test {

    context: UnitTestContext;

    before() {

        // create new context
        this.context = new UnitTestContext();

        // set up the request mock
        this.context.add('xhr', new SinonFakeXhr());
        this.context.get<SinonFakeXhr>('xhr').recordRequests();
    }

    afterEach() {

        // restore the faker
        this.context.get<SinonFakeXhr>('xhr').restoreXhr();
    }

    @test "a mocked asset should be registed in the asset loader"(done: Function) {

        let path = "test/path.png";
        let name = "testImage";

        // register the image asset
        AssetMock.currentAssetType = AssetType.Image;
        AssetMock.register({
            name: name,
            path: path
        }).then((registeredAssets) => {

            // names should be equal
            expect(registeredAssets.length).to.eq(1);
            expect(registeredAssets[0].getName()).to.eq(name);

            // blob should be shere
            expect(registeredAssets[0].getData().size).to.eq(63);

            done();
        });

        // respond to the requests
        this.context.get<SinonFakeXhr>('xhr').getRequests().forEach(

            // answer every request with the binary image
            request => request.respond(200, [], binaryTestImage)
        );
    }

}