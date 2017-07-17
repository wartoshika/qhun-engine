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
     * bind the instance to the singleton storage
     *
     * @param instance the instance that should be bound
     */
    public static bindInstance(instance: any): void {

        // save the instance
        this.instance = instance;
    }

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

    constructor() {
        super();

        const staticContext = (this.constructor as typeof Singleton);

        // check if allready constructed
        if (staticContext.instance !== null)
            throw new Error('Singleton can only be constructed once');

        // bind instance
        staticContext.bindInstance(this);
    }
}
