/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton, EventName, Vector2D } from '../../shared';

/**
 * a handler for window resize events
 */
export class WindowResizeEvent extends Singleton {

    constructor() {

        super();

        // add the event
        window.onresize = this.onResize.bind(this);
    }

    /**
     * listen for ui resize events and emit them in the engine internal
     * event handling with the destination coordinates as vector to resize
     * the different elements
     *
     * @param event the resize event
     */
    private onResize(event: UIEvent): void {

        this.emit(
            EventName.WindowResize,
            {},
            Vector2D.from(
                (event.target as Window).innerWidth,
                (event.target as Window).innerHeight
            )
        );
    }
}
