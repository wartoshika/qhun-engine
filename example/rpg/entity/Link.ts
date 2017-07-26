/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
    Entity, InputArrowKeys
} from '@qhun-engine/client';

import {
    Vector2D, CollisionType, CanCollide
} from '@qhun-engine/shared';

/**
 * the player entity
 */
export class Link extends Entity implements CanCollide {

    protected scaleFactor: number = 2;

    constructor() {

        super(16, 24, new Vector2D(10, 10));

        // add the animations for the player
        this.addAnimation({
            name: 'run_down',
            sprite: 'link_run',
            states: [
                { image: 'link_run_down_1', duration: 100 },
                { image: 'link_run_down_2', duration: 100 },
                { image: 'link_run_down_3', duration: 100 },
                { image: 'link_run_down_4', duration: 100 },
                { image: 'link_run_down_5', duration: 100 },
                { image: 'link_run_down_6', duration: 100 }
            ]
        }, {
                name: 'run_up',
                sprite: 'link_run',
                states: [
                    { image: 'link_run_up_1', duration: 100 },
                    { image: 'link_run_up_2', duration: 100 },
                    { image: 'link_run_up_3', duration: 100 },
                    { image: 'link_run_up_4', duration: 100 },
                    { image: 'link_run_up_5', duration: 100 },
                    { image: 'link_run_up_6', duration: 100 },
                ]
            }, {
                name: 'run_right',
                sprite: 'link_run',
                states: [
                    { image: 'link_run_right_1', duration: 100 },
                    { image: 'link_run_right_2', duration: 100 },
                    { image: 'link_run_right_3', duration: 100 },
                    { image: 'link_run_right_4', duration: 100 },
                    { image: 'link_run_right_5', duration: 100 },
                    { image: 'link_run_right_6', duration: 100 },
                ]
            }, {
                name: 'run_left',
                sprite: 'link_run',
                states: [
                    { image: 'link_run_left_1', duration: 100 },
                    { image: 'link_run_left_2', duration: 100 },
                    { image: 'link_run_left_3', duration: 100 },
                    { image: 'link_run_left_4', duration: 100 },
                    { image: 'link_run_left_5', duration: 100 },
                    { image: 'link_run_left_6', duration: 100 },
                ]
            });

        // play idle animation on constructing
        this.playAnimation('run_down', true);
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
    public onCollision(otherEntity: Entity): void {

        console.log(this, 'collided with', otherEntity);
    }

    /**
     * handles the movement and animation for link
     *
     * @param arrowKeys the current pressed keys
     */
    public handleMovement(arrowKeys: InputArrowKeys): void {

        // move the player
        if (arrowKeys.left) {

            this.setPosition(this.position.add(
                new Vector2D(-5, 0)
            ));
            this.playAnimation('run_left', true);
        } else if (arrowKeys.right) {

            this.setPosition(this.position.add(
                new Vector2D(5, 0)
            ));
            this.playAnimation('run_right', true);
        }

        if (arrowKeys.down) {

            this.setPosition(this.position.add(
                new Vector2D(0, 5)
            ));
            this.playAnimation('run_down', true);
        } else if (arrowKeys.up) {

            this.setPosition(this.position.add(
                new Vector2D(0, -5)
            ));
            this.playAnimation('run_up', true);
        }

        // idle without animation
        if (
            !(arrowKeys.down || arrowKeys.left || arrowKeys.right || arrowKeys.up)
            &&
            this.isAnimationRunning()
        ) {

            // stop animation
            this.stopAnimation();
        }
    }

}
