/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Entity, Point2 } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

// a stub class because Entity is abstract
class StubEntity extends Entity { }

@suite("shared/entity/Entity")
class TestEntity {

    @test "default entity position should allways be (0,0)"() {

        let entity = new StubEntity();
        let initPos = entity.getPosition();
        expect(initPos.x).to.eq(0, "entity x position shold be 0");
        expect(initPos.y).to.eq(0, "entity y position shold be 0");
    }

    @test "entity should have a getter and setter for positioning"() {

        let entity = new StubEntity();
        let pos = Point2.from(10);

        entity.setPosition(pos);
        expect(entity.getPosition()).to.eq(pos);
    }

    @test "entity has a width and a height"() {

        // default case
        let entity = new StubEntity(10, 15);
        expect(entity.getWidth()).to.eq(10);
        expect(entity.getHeight()).to.eq(15);

        // branch test without params
        entity = new StubEntity();
        expect(entity.getWidth()).to.eq(0);
        expect(entity.getHeight()).to.eq(0);
    }
}