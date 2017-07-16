/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

// the dependency to get the memory footprint ob stored objects
const sizeof = require('object-sizeof');

import { Helper } from '../math';
import { File, FileSizeType } from '../helper/File';

/**
 * holds objects in the ram of the operating unit
 */
export class RamStorage {

    /**
     * adds an elemement to the cache
     *
     * @param path the path to the object. dots can be used to structure
     * @param elemement the element to store
     */
    public static add(path: string, elemement: any): void {

        RamStorage.cache[path] = elemement;
    }

    /**
     * removes an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static remove(path: string): void {

        delete RamStorage.cache[path];
    }

    /**
     * reset the complete storage!
     */
    public static clear(): void {

        this.cache = {};
    }

    /**
     * removes all entires in the given path
     *
     * @param path the path to clear
     * @return the amount of deleted objects
     */
    public static clearPath(path: string): number {

        let counter = 0;

        Object.keys(RamStorage.cache).forEach((key) => {

            // if the path is present
            if (key.indexOf(path) === 0) {

                // remove the part
                delete RamStorage.cache[key];
                counter++;
            }
        });

        return counter;
    }

    /**
     * get an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static get<T>(path: string): T {

        return RamStorage.cache[path] as T;
    }

    /**
     * checks if an object exists in the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static has(path: string): boolean {

        return RamStorage.get(path) !== undefined;
    }

    /**
     * the path to one or many objects in the storage
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static amount(path: string): number {

        let counter = 0;
        Object.keys(RamStorage.cache).forEach((key) => {

            // if the path is present, update counter
            if (key.indexOf(path) === 0) counter++;
        });

        return counter;
    }

    /**
     * calculates the used memory for the selected objects in the storage.
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static getSize(path: string = '', type: FileSizeType = FileSizeType.Byte): number {

        let byteCounter = 0;
        Object.keys(RamStorage.cache).forEach((key) => {

            // if the path is present, update counter
            if (key.indexOf(path) === 0) byteCounter += sizeof(RamStorage.cache[key]);
        });

        const bytes = File.byteToSize(byteCounter, type);
        return Helper.roundToPrecision(bytes, 2);
    }

    // the private cache object
    private static cache: {
        [path: string]: any
    } = {};
}
