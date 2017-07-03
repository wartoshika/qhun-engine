/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CollidableEntity, CollisionType, Vector2D } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

// a stub class because CollidableEntity is abstract
class StubEntity extends CollidableEntity {

    constructor() {

        // entity width and height is 100, 150
        super(100, 150);
    }

    getCollisionType(): CollisionType {
        return CollisionType.Rectangle;
    }
    onCollision(entity: CollidableEntity): void { }
}

@suite("shared/entity/Entity")
class TestEntity {

    @test "default entity position should allways be (0,0)"() {

        let entity = new StubEntity();
        let initPos = entity.getPosition();
        expect(initPos.x).to.eq(0, "entity x position shold be 0");
        expect(initPos.y).to.eq(0, "entity y position shold be 0");
    }

    @test "entity should have a getter and setter for height and width"() {

        let entity = new StubEntity();

        expect(entity.getWidth()).to.eq(100);
        expect(entity.getHeight()).to.eq(150);

        // set new values
        entity.setWidth(200);
        entity.setHeight(210);

        // and check the getter again
        expect(entity.getWidth()).to.eq(200);
        expect(entity.getHeight()).to.eq(210);
    }
}