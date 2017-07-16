/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

function isNodeEnv(): boolean {

    return typeof global !== 'undefined';
}

function isBrowserEnv(): boolean {

    return typeof window !== 'undefined';
}

export enum PolyfillModules {

    atob, w3cBlob
}

/**
 * loads a polyfill if the object was not found
 */
export function polyfill(...modules: PolyfillModules[]): void {

    modules.forEach((_module) => {

        let mod: any;
        let provide: string;

        switch (_module) {

            case PolyfillModules.atob:

                mod = require('atob');
                provide = 'atob';
                break;

            case PolyfillModules.w3cBlob:

                mod = require('w3c-blob');
                provide = 'Blob';
                break;
        }

        // provide the polyfill
        if (isNodeEnv() && !(global as any)[provide]) {

            // load node polyfill
            (global as any)[provide] = mod;

        } else if (isBrowserEnv() && !(window as any)[provide]) {

            // load browser polyfill
            (window as any)[provide] = mod;
        }

    });
}
