/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { World } from '@qhun-engine/client';

export class Level1 extends World {

    public onWorldInit(): void {

        console.log('world init!');
    }
}
