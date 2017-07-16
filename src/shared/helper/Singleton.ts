/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { EventEmitter } from '../event/EventEmitter';

/**
 * a class to handle the singleton paradigmen
 */
export abstract class Singleton extends EventEmitter {

    /**
     * get the singleton instance
     */
    public static getInstance<T>(): T {

        if (!this.instance) {

            // get the constructor and store an instance of the class at the ram storage
            const constructor = this as any as { new(): T };
            this.instance = new constructor();
        }

        return this.instance as T;
    }

    protected static instance: {} = null;

    /**
     * bind the instance to the singleton storage
     *
     * @param instance the instance that should be bound
     */
    protected static bindInstance(instance: any): void {

        // save the instance
        this.instance = instance;
    }
}
