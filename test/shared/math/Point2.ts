/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Point2 } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

@suite("shared/math/Point2")
class TestPoint2 {

    @test "constructor should save the position"() {

        let v = new Point2(10, 15);
        expect(v.x).to.eq(10);
        expect(v.y).to.eq(15);

        v = new Point2(10);
        expect(v.x).to.eq(10);
        expect(v.y).to.eq(0);

        v = new Point2();
        expect(v.x).to.eq(0);
        expect(v.y).to.eq(0);
    }

    @test "add() should add another point correctly"() {

        let v = new Point2(10, 10);
        v = v.add(new Point2(5, 6));

        expect(v.x).to.eq(15);
        expect(v.y).to.eq(16);
    }

    @test "substract() should substract another point correctly"() {

        let v = new Point2(10, 10);
        v = v.substract(new Point2(5, 6));

        expect(v.x).to.eq(5);
        expect(v.y).to.eq(4);
    }

    @test "divide() should devide another point correctly"() {

        let v = new Point2(10, 10);
        v = v.divide(new Point2(2, 5));

        expect(v.x).to.eq(5);
        expect(v.y).to.eq(2);
    }

    @test "multiply() should multiply another point correctly"() {

        let v = new Point2(10, 10);
        v = v.multiply(new Point2(2, 3));

        expect(v.x).to.eq(20);
        expect(v.y).to.eq(30);
    }

    @test "round() should round the point to a given precision"() {

        let v = new Point2(10.123, 15.123);
        let round = v.round(1);

        expect(round.x).to.eq(10.1);
        expect(round.y).to.eq(15.1);

        round = v.round();
        expect(round.x).to.eq(10.12);
        expect(round.y).to.eq(15.12);
    }

    @test "distanceToVector() should calculate the correct distance"() {

        let v = new Point2(10, 15);
        let distance = v.distanceToVector(new Point2(20, 30));

        expect(distance).to.be.closeTo(18.028, 0.001);
    }

    @test "static from() should instantiate a Point2 class"() {

        // single param test
        let v = Point2.from(1);
        expect(v.x).to.eq(1);
        expect(v.y).to.eq(1);

        // multi param test
        v = Point2.from(1, 2);
        expect(v.x).to.eq(1);
        expect(v.y).to.eq(2);
    }

    @test "half() should work correctly"() {

        let v = Point2.from(4, 10);
        let half = v.half();

        expect(half.x).to.eq(2);
        expect(half.y).to.eq(5);
    }

    @test "double() should work correctly"() {

        let v = Point2.from(4, 10);
        let double = v.double();

        expect(double.x).to.eq(8);
        expect(double.y).to.eq(20);
    }

    @test "abs() should work correctly"() {

        let v = Point2.from(4, -10).abs();

        expect(v.x).to.eq(4);
        expect(v.y).to.eq(10);
    }

    @test "clamp() should work correctly"() {

        const testVector = Point2.from(10, 20);

        // test point is within the range of both axis
        let testClamp = testVector.clamp(
            Point2.from(5, 10),
            Point2.from(50, 30)
        );
        expect(testClamp.x).to.eq(10);
        expect(testClamp.y).to.eq(20);

        // test point x axis is lower than min
        testClamp = testVector.clamp(
            Point2.from(50, 20),
            Point2.from(30, 70)
        );
        expect(testClamp.x).to.eq(50);
        expect(testClamp.y).to.eq(20);
    }
}