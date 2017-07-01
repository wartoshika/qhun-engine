/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { InlineAnimation } from './Animation';

/**
 * an interface for entities that can be animated
 */
export interface AnimationableEntity {

    /**
     * add one or many animations to the entity
     */
    addAnimation(...animations: InlineAnimation[]): void;

    /**
     * play the given animation
     */
    playAnimation(name: string, loop: boolean): void;

    /**
     * stops the currently playing animation
     */
    stopAnimation(): void;
}