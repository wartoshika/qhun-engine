/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Helper } from '@shared';
import { GravityForce } from '@client';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

@suite("shared/math/Helper")
class TestHelper {

    @test "randomDegree() should return a positive number"() {

        expect(Helper.randomDegree())
            .to.be.an('number')
            .and.gte(0);
    }

    @test "degreeToRadian() should work correctly"() {

        let degree = 250;
        expect(Helper.degreeToRadian(degree))
            .to.be.closeTo(4.36332, 0.0001);
    }

    @test "radianToDegree() should work correctly"() {

        let radian = 4;
        expect(Helper.radianToDegree(radian))
            .to.be.closeTo(229.183, 0.001);
    }

    @test "roundToPrecision() should work correctly"() {

        let float = 5.123456;
        expect(Helper.roundToPrecision(float, 2)).to.equal(5.12);
        expect(Helper.roundToPrecision(float, 4)).to.equal(5.1235);
        expect(Helper.roundToPrecision(float, 0)).to.equal(5);

        expect(Helper.roundToPrecision(float)).to.equal(5.12);
    }

    @test "massToWeight() should calculate correctly"() {

        let mass = 15; //kg
        let weight = Helper.massToWeight(mass, GravityForce.Earth);

        expect(weight).to.eq(147);
    }
}