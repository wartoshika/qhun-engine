/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

export enum FileSizeType {
    Byte, Kilobyte, Megabyte, Gigabyte, Terrabyte,
}

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

        return path.split('.').pop();
    }

    /**
     * converts a byle number to a given superset
     *
     * @param bytes the base byte number
     * @param type the wanted type
     */
    public static byteToSize(bytes: number, type: FileSizeType): number {

        return bytes / Math.pow(1024, type as number);
    }
}
