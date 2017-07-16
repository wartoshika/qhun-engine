/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Asset } from '../';

/**
 * a general interface for asset loaders
 */
export interface TypeLoader {

    /**
     * load the asset into the given instance
     * @info this function should be async!
     */
    load(path: string, instance: Asset): Promise<Asset | Asset[]>;
}
