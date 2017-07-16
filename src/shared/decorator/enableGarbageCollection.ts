/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { GarbageCollector } from '../helper';

/**
 * a class decorator that enabled garbage collecting on this class.
 * this is required to use @collectGarbage as property decorator
 */
export function enableGarbageCollection<T extends { new(...args: any[]): {} }>(ctor: T) {

    return class extends ctor {

        constructor(...args: any[]) {
            super();

            // register the instance at the gc
            const gc = GarbageCollector.getInstance<GarbageCollector>();
            gc.addTarget(ctor.name, this);
        }
    };
}
