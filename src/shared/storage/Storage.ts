/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { FileSizeType } from '../helper';

/**
 * a storage interface for different storage capabillities
 */
export interface Storage {

    /**
     * adds an elemement to the cache
     *
     * @param path the path to the object. dots can be used to structure
     * @param elemement the element to store
     */
    add(path: string, elemement: any): void;

    /**
     * removes an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    remove(path: string): void;

    /**
     * reset the complete storage!
     */
    clear(): void;

    /**
     * removes all entires in the given path
     *
     * @param path the path to clear
     * @return the amount of deleted objects
     */
    clearPath(path: string): number;

    /**
     * get an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    get<T>(path: string): T;

    /**
     * get all elementes that fit the given path
     *
     * @param path the path to test
     */
    getAllByPath<T>(path: string): T[];

    /**
     * checks if an object exists in the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    has(path: string): boolean;

    /**
     * the path to one or many objects in the storage
     *
     * @param path the path to the object. dots can be used to structure
     */
    amount(path: string): number;

    /**
     * calculates the used memory for the selected objects in the storage.
     *
     * @param path the path to the object. dots can be used to structure
     */
    getSize(path: string, type: FileSizeType): number;

}
