/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { RamStorage } from '../storage/RamStorage';
import { InjectorKeys, InjectorRegistry } from '../helper/InjectorRegistry';

/**
 * injects a defined object into the method as param
 */
export function Injector<T>(injectorKey: InjectorKeys) {

    return (target: {}, propertyKey: string | symbol) => {

        (target as any)[propertyKey] = InjectorRegistry.get(injectorKey);
    };
}
