/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AnimationEntity, InlineAnimation } from '../entity';

/**
 * register the given animations to the entity class
 *
 * @param animations the animations to register
 */
export function EntityAnimation(animations: InlineAnimation[]) {

    return (target: any): any => {

        // save orig constructor
        const originalConstructor = target as (new (...args: any[]) => AnimationEntity);

        // build a new constructor
        function addEntityAnimationConstructor(...args: any[]) {

            // construct the original instance
            const inst = new originalConstructor(...args);

            // check instance origin
            if (!(inst instanceof AnimationEntity)) {

                // print error
                throw new Error(`${inst} is not derived from ${AnimationEntity.constructor.name}`);
            }

            // add the animations
            inst.addAnimation(...animations);

            // return the changed instance
            return inst;
        }

        // override the constructor
        addEntityAnimationConstructor.prototype = originalConstructor.prototype;
        return addEntityAnimationConstructor;
    };
}
