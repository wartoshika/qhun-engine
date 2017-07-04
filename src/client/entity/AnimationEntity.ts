/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Entity } from '../../shared/entity';
import { AnimationableEntity } from './AnimationableEntity';
import { Animation, InlineAnimation } from './Animation';
import { Log } from '../../shared/log';
import { RenderableEntity } from './RenderableEntity';

/**
 * a base class for animations on entities
 */
export abstract class AnimationEntity extends Entity implements AnimationableEntity, RenderableEntity {

    /**
     * all animations of the entity
     */
    protected animationStack: InlineAnimation[] = [];

    /**
     * the image that is rendered during game loop to display the entitiy
     */
    private currentTemplate: string;

    /**
     * the visibility flag
     */
    protected visible: boolean = true;

    /**
     * the currently active animation
     */
    protected currentAnimation: Animation;

    /**
     * the current scale factor
     */
    protected scaleFactor: number = 1;

    /**
     * the logger instance
     */
    private logger = Log.getLogger(AnimationEntity.name);

    /**
     * add one or many animations to the entity
     */
    public addAnimation(...animations: InlineAnimation[]): void {

        this.animationStack.push(...animations);
    }

    /**
     * play the given animation
     * @todo: possible observable return type to let the user know when an animation changes it's state
     */
    public playAnimation(name: string, loop: boolean = false): void {

        // if there is allready a running animation, stop it
        if (this.currentAnimation) {

            // if the animation name is the same, ignore the call
            if (this.currentAnimation.getName() === name) return;

            // stop and play the new animation
            this.currentAnimation.stopAndRestore();
        }

        // get the animation player
        let animation = this.animationStack.find(a => a.name === name);

        // check if the animation is valid
        if (!animation) {

            this.logger.warning("Animation", name, "was not added to", this.constructor.name, ". Ignoring this animation.");
            return;
        }

        // play!
        this.currentAnimation = new Animation(animation, this, loop);
        this.currentAnimation.play();
    }

    /**
     * stops the currently playing animation
     */
    public stopAnimation(): void {

        // currently playing an animation?
        if (!this.currentAnimation) {

            // log a warning
            this.logger.warning("trying to stop an animation on", this.constructor.name, "but there is no active animation");
            return;
        }

        // stops the animation
        this.currentAnimation.stopAndRestore();
        this.currentAnimation = null;
    }

    /**
     * check if any or a spefific animation is running
     *
     * @param name the name or nothing
     */
    public isAnimationRunning(name?: string): boolean {

        return (!name && !!this.currentAnimation)
            ||
            (name && this.currentAnimation && this.currentAnimation.getName() === name);
    }

    /**
     * get the image asset that displays the current entity
     */
    public getImage(): string {

        return this.currentTemplate;
    }

    /**
     * set the new image for this entity
     *
     * @param image the current image that should represent this entity during rendering
     */
    public setImage(image: string): void {

        this.currentTemplate = image;
    }

    /**
     * is the entity visible? if not, the renderer will not render this entity
     */
    public isVisible(): boolean {

        return this.visible;
    }

    /**
     * sets the visibility of the entity
     */
    public setVisible(visible: boolean): void {

        this.visible = visible;
    }

    /**
     * get the current scale
     */
    public getScale(): number {

        return this.scaleFactor;
    }

    /**
     * set the current local entity scale
     *
     * @param scale the new scale
     */
    public setScale(scale: number): void {

        this.scaleFactor = scale;
    }
}