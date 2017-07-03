/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Binary } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

// node atob and blob impl.
(<any>global).atob = require('atob');
(<any>global).Blob = require('w3c-blob');


@suite("shared/helper/Binary")
class TestBinary {

    @test "dataUriToBlob() should work correctly"() {

        // a very small test uri
        let uri = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
        let blob = Binary.dataUriToBlob(uri);

        // the size should be accurate
        expect(blob.size).to.eq(42);
        expect(blob.type).to.eq("image/gif");

        // another test
        uri = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        blob = Binary.dataUriToBlob(uri);

        // check
        expect(blob.size).to.eq(37);
        expect(blob.type).to.eq("image/gif");
    }
}