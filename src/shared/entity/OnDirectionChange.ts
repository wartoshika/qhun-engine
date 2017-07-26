/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Direction } from '../helper';

/**
 * an interface that signals if an entities looking direction changes.
 * can be used to trigger entity walking animations
 */
export interface OnDirectionChange {

    /**
     * is fired if the entity changes its looking direction
     */
    onDirectionChange(newDirection: Direction): void;
}
