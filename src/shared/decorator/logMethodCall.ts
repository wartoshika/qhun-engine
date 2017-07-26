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
export function LogMethodCall(
    target: {}, key: string | symbol, descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
) {

    // load the logger
    const logger = Log.getLogger();

    return {
        value(...args: any[]) {

            // log the call
            logger.debug('@logMethodCall', `${target.constructor.name}:${key}()`);

            // original method call
            return descriptor.value.apply(this, args);
        }
    };
}
