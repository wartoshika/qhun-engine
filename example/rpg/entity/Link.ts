/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
    Entity, Input, EntityAnimation
} from '@qhun-engine/client';

import {
    Point2, CollisionType, CanCollide, OnDirectionChange,
    Direction
} from '@qhun-engine/shared';

/**
 * the player entity
 */
@EntityAnimation([
    {
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
    }
])
export class Link extends Entity implements CanCollide, OnDirectionChange {

    protected scaleFactor: number = 2;

    constructor() {

        super(16, 24, new Point2(10, 10));

        // set initial image
        this.setImage('link_run[link_run_down_1]');
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
    public handleMovement(input: Input): void {

        // get current arrow keys
        const arrowKeys = input.getArrowKeys();
        const speed = 5;

        // handle movement for link
        if (arrowKeys.right) this.translatePosition(speed, 0);
        else if (arrowKeys.left) this.translatePosition(-speed, 0);
        if (arrowKeys.up) this.translatePosition(0, -speed);
        else if (arrowKeys.down) this.translatePosition(0, speed);

        // if no key is pressed, stop animation (idle state)
        if (
            !(arrowKeys.down || arrowKeys.left || arrowKeys.right || arrowKeys.up)
            &&
            this.isAnimationRunning()
        ) {

            // stop animation
            this.stopAnimation();
        }
    }

    /**
     * is fired if the entity changes its looking direction
     */
    public onDirectionChange(newDirection: Direction): void {

        // use this to change the animation of link when walking
        switch (newDirection) {

            case Direction.Left: this.playAnimation('run_left', true); break;
            case Direction.Right: this.playAnimation('run_right', true); break;
            case Direction.Up: this.playAnimation('run_up', true); break;
            case Direction.Down: this.playAnimation('run_down', true); break;
        }
    }

}
