import { CollidableEntity } from 'client/entity';
import { Vector2D } from 'shared/math';
import { CollisionType } from 'shared/collision';

/**
 * the player entity
 */
export class Player extends CollidableEntity {

    constructor() {

        super(20, 20, new Vector2D(10, 10));

        // add the animations for the player
        this.addAnimation({
            name: 'idle',
            sprite: 'player',
            states: [
                {
                    image: 'red_eyes_open', duration: 2500
                },
                {
                    image: 'red_eyes_closed', duration: 250
                },
                {
                    image: 'red_eyes_open', duration: 250
                },
                {
                    image: 'red_eyes_closed', duration: 250
                }
            ]
        }, {
                name: 'jump',
                sprite: 'player',
                states: [
                    { image: 'red_mouth_open', duration: -1 }
                ]
            });
    }

    /**
     * get the entities collision type
     */
    public getCollisionType(): CollisionType {

        return CollisionType.Circle;
    }

    /**
     * an event handler that will fire if another entity collided with this instance
     */
    public onCollision(otherEntity: CollidableEntity): void {

        console.log(this, "collided with", otherEntity);
    }

}