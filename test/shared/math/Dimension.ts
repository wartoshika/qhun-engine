/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Dimension } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

@suite("shared/math/Dimension")
class TestDimension {

    @test "constructor should store the properties correctly"() {

        let dimension = new Dimension(10, 15);

        expect(dimension.x).to.eq(10);
        expect(dimension.y).to.eq(15);

        dimension = new Dimension();

        expect(dimension.x).to.eq(0);
        expect(dimension.y).to.eq(0);
    }
}