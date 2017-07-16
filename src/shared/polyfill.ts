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

interface Polyfill {

    require: string;
    fills: string;
}

/**
 * loads a polyfill if the object was not found
 */
export function polyfill(...modules: Polyfill[]): void {

    modules.forEach((_module) => {

        if (isNodeEnv()) {

            // load node polyfill
            (global as any)[_module.fills] = require(_module.require);

        } else if (isBrowserEnv()) {

            // load browser polyfill
            (window as any)[_module.fills] = require(_module.require);
        }

    });
}
