/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Binary } from '../../shared';

/**
 * a xhr network class to perform http requests
 */
export class Request {

    /**
     * make an asynchronus get request to the given url
     * and returns a array buffer
     *
     * @param path the url
     */
    public static async getBinary(path: string): Promise<ArrayBuffer> {

        return new Promise<ArrayBuffer>(resolve => {

            // create xhr instance and set properties
            let xhr = new XMLHttpRequest();
            xhr.responseType = 'arraybuffer';
            xhr.open('GET', path);

            // register finish event
            xhr.onload = () => {

                // resolve the promise with a
                resolve(<ArrayBuffer>xhr.response);
            };

            // send the request
            xhr.send();
        });
    }

    /**
     * make an asynchronus get request to the given url
     *
     * @param path the url
     */
    public static async get(path: string): Promise<string> {

        return new Promise<string>(resolve => {

            // create xhr instance and set properties
            let xhr = new XMLHttpRequest();
            xhr.open('GET', path);

            // register finish event
            xhr.onload = () => {

                resolve(xhr.response);
            };

            // send the request
            xhr.send();
        });
    }
}