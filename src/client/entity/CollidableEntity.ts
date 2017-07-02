/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Entity } from './Entity';
import { CanCollide } from './CanCollide';
import { Vector2D } from '../../shared/math';
import { CollisionType } from '../../shared/collision';
import { HasMass } from './HasMass';

/**
 * a helper type for eg. blocked directions
 */
export enum Direction {

    Left, Right, Up, Down
};

interface DirectionBlocked {
    [generic: string]: boolean,
    Left: boolean,
    Right: boolean,
    Up: boolean,
    Down: boolean
}

/**
 * the client class for a collidable entity
 */
export abstract class CollidableEntity extends Entity implements CanCollide, HasMass {

    /**
     * the current mass of the entity
     */
    protected mass: number = 0;

    /**
     * the state of entity world bound collision
     */
    protected collidesWithWorldBounds: boolean = true;

    /**
     * a state object for blocked directions
     */
    protected directionBlocked: DirectionBlocked = {
        Left: false,
        Right: false,
        Up: false,
        Down: false
    };

    constructor(
        private entityWidth: number,
        private entityHeight: number,
        position: Vector2D
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
     * get the current mass of the entity
     */
    public getMass(): number {

        return this.mass;
    }

    /**
     * set a new mass to an entity
     */
    public setMass(mass: number): void {

        this.mass = mass;
    }

    /**
     * get the directions of the entity that are blocked
     */
    public getBlockedDirections(): DirectionBlocked {

        return this.directionBlocked;
    }

    /**
     * set the given direction as blocked or unblocked
     *
     * @param direction the direction
     * @param blocked blocked or not?
     */
    public setDirectionBlocked(direction: Direction, blocked: boolean = true): void {

        this.directionBlocked[Direction[direction]] = blocked;
    }

    /**
     * allow this entity to collide with the world bounds
     * and set the direction to blocked at the end of the world
     *
     * @param collision if the entity should collide with the world bound
     */
    public setWorldBoundCollision(collision: boolean = true): void {

        this.collidesWithWorldBounds = collision;
    }

    /**
     * get the current world bound collision state
     */
    public getWorldBoundCollision(): boolean {

        return this.collidesWithWorldBounds;
    }
}