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
import { Singleton } from '../helper/Singleton';
import { Storage } from './Storage';

/**
 * holds objects in the ram of the operating unit
 */
export class RamStorage extends Singleton implements Storage {

    /**
     * the cache
     */
    private cache: {
        [cacheIndex: string]: any
    };

    /**
     * adds an elemement to the cache
     *
     * @param path the path to the object. dots can be used to structure
     * @param elemement the element to store
     */
    public add(path: string, elemement: any): void {

        this.cache[path] = elemement;
    }

    /**
     * removes an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    public remove(path: string): void {

        delete this.cache[path];
    }

    /**
     * reset the complete storage!
     */
    public clear(): void {

        this.cache = {};
    }

    /**
     * removes all entires in the given path
     *
     * @param path the path to clear
     * @return the amount of deleted objects
     */
    public clearPath(path: string): number {

        let counter = 0;

        Object.keys(this.cache).forEach((key) => {

            // if the path is present
            if (key.indexOf(path) === 0) {

                // remove the part
                delete this.cache[key];
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
    public get<T>(path: string): T {

        return this.cache[path] as T;
    }

    /**
     * get all elementes that fit the given path
     *
     * @param path the path to test
     */
    public getAllByPath<T>(path: string = ''): T[] {

        const elementStack: T[] = [];
        Object.keys(this.cache).forEach((key) => {

            if (key.indexOf(path) === 0)
                elementStack.push(this.get<T>(key));
        });

        return elementStack;
    }

    /**
     * checks if an object exists in the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    public has(path: string): boolean {

        return this.get(path) !== undefined;
    }

    /**
     * the path to one or many objects in the storage
     *
     * @param path the path to the object. dots can be used to structure
     */
    public amount(path: string): number {

        let counter = 0;
        Object.keys(this.cache).forEach((key) => {

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
    public getSize(path: string = '', type: FileSizeType = FileSizeType.Byte): number {

        let byteCounter = 0;
        Object.keys(this.cache).forEach((key) => {

            // if the path is present, update counter
            if (key.indexOf(path) === 0) byteCounter += sizeof(this.cache[key]);
        });

        const bytes = File.byteToSize(byteCounter, type);
        return Helper.roundToPrecision(bytes, 2);
    }
}
