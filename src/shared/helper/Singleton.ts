/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { RamStorage } from '../storage';
import { EventEmitter } from '../event';

/**
 * a class to handle the singleton paradigmen
 */
export abstract class Singleton extends EventEmitter {

    /**
     * get the singleton instance
     */
    public static getInstance<T>(): T {

        if (!RamStorage.has(this.generateStorageName())) {

            // get the constructor and store an instance of the class at the ram storage
            const constructor = this as any as { new(): T };
            RamStorage.add(this.generateStorageName(), new constructor());
        }

        // get the instance
        return RamStorage.get<T>(this.generateStorageName());
    }

    /**
     * generates a storage name for the instance storing
     *
     * @param className the class name
     */
    protected static generateStorageName(): string {

        return `singleton.instance.${this.name}`;
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
