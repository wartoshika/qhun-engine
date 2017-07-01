/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Dimension } from '../../../src/shared/math/Dimension';
import { expect } from 'chai';
import 'mocha';

describe('shared/math/Dimension.ts', () => {

    it('constructor should store the properties correctly', () => {

        let dimension = new Dimension(10, 15);

        expect(dimension.x).to.eq(10);
        expect(dimension.y).to.eq(15);

        dimension = new Dimension();

        expect(dimension.x).to.eq(0);
        expect(dimension.y).to.eq(0);
    });

});