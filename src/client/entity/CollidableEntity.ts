import { Entity } from 'client/entity/Entity';
import { CanCollide } from 'client/entity/CanCollide';
import { Vector2D } from 'shared/math';
import { CollisionType } from 'shared/collision';

/**
 * the client class for a collidable entity
 */
export abstract class CollidableEntity extends Entity implements CanCollide {

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
}