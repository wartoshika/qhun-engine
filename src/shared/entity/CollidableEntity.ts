import { Entity } from 'shared/entity/Entity';
import { CanCollide } from 'shared/entity/CanCollide';
import { CollisionType } from 'shared/collision';

/**
 * an entity that can collide with other collidable entities
 */
export abstract class CollidableEntity extends Entity implements CanCollide {

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
    public abstract getWidth(): number;

    /**
     * get the height of the entity
     */
    public abstract getHeight(): number;
}