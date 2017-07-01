/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

// the dependency to get the memory footprint ob stored objects
let sizeof = require('object-sizeof');

import { Helper } from '../math';
import { File, FileSizeType } from '../helper/File';

/**
 * holds objects in the ram of the operating unit
 */
export class RamStorage {

    // the private cache object
    private static cache: {
        [path: string]: any
    } = {};

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
     * get an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static get<T>(path: string): T {

        return <T>RamStorage.cache[path];
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
        Object.keys(RamStorage.cache).forEach(key => {

            // if the path is present, update counter
            if (key.indexOf(path) === 0) counter++;
        });

        return counter;
    }

    /**
     * calculates the used memory for the selected objects in the storage.
     * unit is in MB or the given type
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static getSize(path: string = "", type: FileSizeType = FileSizeType.Byte): number {

        let byteCounter = 0;
        Object.keys(RamStorage.cache).forEach(key => {

            // if the path is present, update counter
            if (key.indexOf(path) === 0) byteCounter += sizeof(RamStorage.cache[key]);
        });

        let mb = File.byteToSize(byteCounter, type);
        return Helper.roundToPrecision(mb, 2);
    }
}