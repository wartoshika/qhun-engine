/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export declare type InjectorKeys = 'Storage';

/**
 * a holder for dependency injecton
 */
export class InjectorRegistry {

    public static add(key: InjectorKeys, value: any): void {

        InjectorRegistry.registry[key] = value;
    }

    public static get<T = any>(key: InjectorKeys): T {

        return InjectorRegistry.registry[key] as T;
    }

    private static registry: {
        [key: string]: any
    } = {};
}
