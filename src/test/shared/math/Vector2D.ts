/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Vector2D } from '../../../shared/math/Vector2D';
import { expect } from 'chai';
import 'mocha';

describe('shared/math/Vector2D.ts', () => {

    it('constructor should save the position', () => {

        let v = new Vector2D(10, 15);
        expect(v.x).to.equal(10);
        expect(v.x).to.equal(15);

        v = new Vector2D(10);
        expect(v.x).to.equal(10);
        expect(v.x).to.equal(0);

        v = new Vector2D();
        expect(v.x).to.equal(0);
        expect(v.x).to.equal(0);
    });
});