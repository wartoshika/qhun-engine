/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { polyfill } from '../polyfill';

polyfill(
    { require: "atob", fills: "atob" },
    { require: "w3c-blob", fills: "Blob" }
);

/**
 * a helper class for binary content
 */
export class Binary {

    /**
     * converts a data uri to a blob
     *
     * @param dataUri the data uri from the object
     */
    public static dataUriToBlob(dataUri: string): Blob {

        // @see https://stackoverflow.com/questions/12168909/blob-from-dataurl
        // convert base64 to raw binary data held in a string
        // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
        let byteString = atob(dataUri.split(',')[1]);

        // separate out the mime component
        let mimeString = dataUri.split(',')[0].split(':')[1].split(';')[0]

        // write the bytes of the string to an ArrayBuffer
        let ab = new ArrayBuffer(byteString.length);

        // create a view into the buffer
        let ia = new Uint8Array(ab);

        // set the bytes of the buffer to the correct values
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        // write the ArrayBuffer to a blob, and you're done
        let blob = new Blob([ab], { type: mimeString });
        return blob;
    }

    /**
     * converts a binary buffer into a string
     *
     * @param buffer the binary content
     */
    public static bufferToString(buffer: Buffer): string {

        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    }

    /**
     * converts a buffer to a blob instance
     *
     * @param buffer the buffer
     */
    public static bufferToBlob(buffer: Buffer | ArrayBuffer): Blob {

        if (buffer instanceof ArrayBuffer) {

            // cast to buffer
            buffer = Buffer.from(buffer);
        }
        return new Blob([new Uint8Array(buffer)]);
    }

    /**
     * converts a data uri to a buffer
     *
     * @param dataUri the given data uri
     */
    public static dataUriToBuffer(dataUri: string): Buffer {

        let binStr = atob(dataUri);

        // create a uint8array to store the characters
        let array = new Uint8Array(binStr.length);

        // add each char from the binary string
        for (let i = 0; i < binStr.length; i++) {

            array[i] = binStr.charCodeAt(i);
        }

        // finally
        return Buffer.from(array.buffer);
    }
}