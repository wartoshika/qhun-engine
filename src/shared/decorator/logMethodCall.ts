/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Log } from '../log';

/**
 * a decorator for logging method calls to debug console
 *
 * @param target
 * @param propertyKey
 * @param descriptor
 */
export function logMethodCall(
    target: Object, key: string | symbol, descriptor: TypedPropertyDescriptor<Function>
) {

    return {
        value: function (...args: any[]) {

            // log the call
            Log.debug("@logMethodCall", `${target.constructor.name}:${key}()`);

            // original method call
            return descriptor.value.apply(this, args);
        }
    }
}