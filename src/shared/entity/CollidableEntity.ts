/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Entity } from '../entity/Entity';
import { CanCollide } from '../entity/CanCollide';
import { CollisionType } from '../collision';
import { Vector2D } from '../math';

/**
 * an entity that can collide with other collidable entities
 */
export abstract class CollidableEntity extends Entity implements CanCollide {

    constructor(
        private entityWidth: number,
        private entityHeight: number,
        position: Vector2D = Vector2D.from(0, 0)
    ) {
        super(position);
    }

    /**
     * get the entities collision type
     */
    public abstract getCollisionType(): CollisionType;

    /**
     * an event handler that will fire if another entity collided with this instance
     */
    public abstract onCollision(otherEntity: CollidableEntity): void;

    /**
     * get the width of the entity
     */
    public getWidth(): number {

        return this.entityWidth;
    }

    /**
     * get the height of the entity
     */
    public getHeight(): number {

        return this.entityHeight;
    }

    /**
     * get the width of the entity
     */
    public setWidth(width: number): void {

        this.entityWidth = width;
    }

    /**
     * get the height of the entity
     */
    public setHeight(height: number): void {

        this.entityHeight = height;
    }

}
