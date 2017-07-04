/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { RamStorage } from '../storage';

/**
 * a class to handle the singleton paradigmen
 */
export abstract class Singleton {
    /**
     * generates a storage name for the instance storing
     *
     * @param className the class name
     */
    protected static generateStorageName(): string {

        return `singleton.instance.${this.name}`;
    }

    /**
     * get the singleton instance
     */
    public static getInstance<T>(): T {

        let instance = null;
        if (!RamStorage.has(this.generateStorageName())) {

            // get the constructor and store an instance of the class at the ram storage
            let constructor = <{ new (): T }><any>this;
            RamStorage.add(this.generateStorageName(), new constructor());
        }

        // get the instance
        return RamStorage.get<T>(this.generateStorageName());
    }

    /**
     * bind the instance to the singleton storage
     *
     * @param instance the instance that should be bound
     */
    protected static bindInstance(instance: any): void {

        // save the instance
        RamStorage.add(this.generateStorageName(), instance);
    }
}