/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * a helper class for file and path things
 */
export class File {

    /**
     * get the file extension of a path
     *
     * @param path the path to the file
     */
    public static getFileExtension(path: string) {

        return path.split('').pop();
    }
}