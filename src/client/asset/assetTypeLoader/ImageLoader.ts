/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Asset } from '../';
import { TypeLoader } from './';
import { Request } from '../../network';
import { Singleton, Binary } from '../../../shared';

/**
 * the image asset loader class
 */
export class ImageLoader extends Singleton implements TypeLoader {

    /**
     * load the asset into the given instance
     */
    public async load(path: string, instance: Asset): Promise<Asset> {

        // make an xhr call to the file
        return Request.getBinary(path).then((image) => {

            // create the image bitmap for the blob
            instance.setData(Binary.bufferToBlob(image));

            // return the filled instance
            return instance;
        });
    }
}
