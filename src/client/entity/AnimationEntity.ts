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
        if (this.currentAnimation)
            this.currentAnimation.stopAndRestore();

        // get the animation player
        let animation = this.animationStack.find(a => a.name === name);

        // check if the animation is valid
        if (!animation) {

            Log.warning("Animation", name, "was not added to", this.constructor.name, ". Ignoring this animation.");
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
            Log.warning("trying to stop an animation on", this.constructor.name, "but there is no active animation");
            return;
        }

        // stops the animation
        this.currentAnimation.stopAndRestore();
        this.currentAnimation = null;
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
}