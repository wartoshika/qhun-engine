/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Asset } from '../';
import { TypeLoader } from './';
import { Singleton } from '../../../shared';

/**
 * the image asset loader class
 */
export class AudioLoader extends Singleton implements TypeLoader {

    /**
     * load the asset into the given instance
     */
    public async load(path: string, instance: Asset): Promise<Asset> {

        return instance;
    }
}
