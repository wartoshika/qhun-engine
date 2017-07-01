/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Vector2D } from '../../../src/shared/math/Vector2D';
import { expect } from 'chai';
import 'mocha';

describe('shared/math/Vector2D.ts', () => {

    it('constructor should save the position', () => {

        let v = new Vector2D(10, 15);
        expect(v.x).to.eq(10);
        expect(v.y).to.eq(15);

        v = new Vector2D(10);
        expect(v.x).to.eq(10);
        expect(v.y).to.eq(0);

        v = new Vector2D();
        expect(v.x).to.eq(0);
        expect(v.y).to.eq(0);
    });

    it('add() should add another vector correctly', () => {

        let v = new Vector2D(10, 10);
        v = v.add(new Vector2D(5, 6));

        expect(v.x).to.eq(15);
        expect(v.y).to.eq(16);
    });

    it('substract() should substract another vector correctly', () => {

        let v = new Vector2D(10, 10);
        v = v.substract(new Vector2D(5, 6));

        expect(v.x).to.eq(5);
        expect(v.y).to.eq(4);
    });

    it('divide() should devide another vector correctly', () => {

        let v = new Vector2D(10, 10);
        v = v.divide(new Vector2D(2, 5));

        expect(v.x).to.eq(5);
        expect(v.y).to.eq(2);
    });

    it('multiply() should multiply another vector correctly', () => {

        let v = new Vector2D(10, 10);
        v = v.multiply(new Vector2D(2, 3));

        expect(v.x).to.eq(20);
        expect(v.y).to.eq(30);
    });

    it('round() should round the vector to a given precision', () => {

        let v = new Vector2D(10.123, 15.123);
        let round = v.round(1);

        expect(round.x).to.eq(10.1);
        expect(round.y).to.eq(15.1);

        round = v.round();
        expect(round.x).to.eq(10.12);
        expect(round.y).to.eq(15.12);

    });

    it('distanceToVector() should calculate the correct distance', () => {

        let v = new Vector2D(10, 15);
        let distance = v.distanceToVector(new Vector2D(20, 30));

        expect(distance).to.be.closeTo(18.028, 0.001);
    });
});