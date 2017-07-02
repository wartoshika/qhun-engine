/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Sprite } from '../asset';
import { Singleton } from '../../shared/helper';
import { Log } from '../../shared/log';
import { AnimationEntity } from './AnimationEntity';

/**
 * a type for inline object animations
 */
export interface InlineAnimation {

    /**
     * the name of the animation. used for playing them later
     */
    name: string;

    /**
     * the path to the animation sprite
     */
    sprite: string;

    /**
     * the different states of the animation
     */
    states: InlineAnimationState[];
}

/**
 * a type for online animation states
 */
export interface InlineAnimationState {

    /**
     * the sub image of the sprite
     */
    image: string;

    /**
     * the amount of miliseconds the animation should be visible.
     * a duration of -1 means, that this state should be infinitly.
     */
    duration: number;
}

/**
 * a class that handles entity animations for different states
 */
export class Animation {

    /**
     * the holder of the entities image before playing the animation
     */
    private previousEntityImage: string;

    /**
     * holder of the current visible animation phase
     */
    private currentAnimationPhase: number = 0;

    /**
     * holder of the timeout event
     */
    private currentTimeoutHolder: number;

    constructor(
        private animation: InlineAnimation,
        private entity: AnimationEntity,
        private loop: boolean = false
    ) { }

    /**
     * play one animation
     *
     * @todo: possible observable return type to let the user know when an animation changes it's state
     *
     * @param animation the animation to play
     */
    public play(): void {

        // save the image of the entity
        this.previousEntityImage = this.entity.getImage();

        // display the animation
        this.nextAnimationFrame();
    }

    /**
     * get the name of the animation
     */
    public getName(): string {

        return this.animation.name;
    }

    /**
     * displays the next animation frame
     */
    private nextAnimationFrame(): void {

        // get the current state
        let currentState = this.animation.states[this.currentAnimationPhase];

        // set the image of the entity
        this.entity.setImage(`${this.animation.sprite}[${currentState.image}]`);

        // request the next state
        this.currentAnimationPhase += 1;

        // check if the animation should loop or if there is a next animation state
        if (this.loop || this.currentAnimationPhase < this.animation.states.length) {

            // checks if the state should overflow
            if (this.loop && this.currentAnimationPhase >= this.animation.states.length) {

                this.currentAnimationPhase = 0;
            }

            // wait for the next frame request
            if (currentState.duration !== -1)
                this.currentTimeoutHolder = window.setTimeout(this.nextAnimationFrame.bind(this), currentState.duration);
        } else {

            // animation is completed
            this.stopAndRestore();
        }
    }

    /**
     * stops the animation and restores the image of the entity
     */
    public stopAndRestore(): void {

        // stop the animation
        window.clearTimeout(this.currentTimeoutHolder);

        // restores the image
        // currently no restore
        // @todo: should this be optional?
        //this.entity.setImage(this.previousEntityImage);
    }
}