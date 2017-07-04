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

// a simple test asset image
let testImage: string = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

@suite("client/asset/AssetLoader")
class Test {

    @context static xhr: SinonFakeXhr;

    static before() {

        // set up the request mock
        Test.xhr = new SinonFakeXhr();
        testImage = Binary.bufferToString(new Buffer(testImage, 'base64'));
    }

    afterEach() {

        // restore the faker
        Test.xhr.recordRequests();
    }

    @test "a mocked asset should be registed in the asset loader"(done: Function) {

        let path = "test/path.png";
        let name = "testImage";

        // register the image asset
        AssetMock.currentAssetType = AssetType.Image;
        AssetMock.register({
            name: name,
            path: path
        }).then(() => {

            // check the xhr call against the given path
            //console.log(TestAssetLoader.requests);
            done();

        });

        // respond to the requests
        Test.xhr.getRequests().forEach(
            request => request.respond(200, [], testImage)
        );
    }

}