/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton } from '../../shared/helper';

export interface InputArrowKeys {

    left: boolean;
    right: boolean;
    up: boolean;
    down: boolean;
}

/**
 * a basic class to get user input like keybord or mouse data
 */
export class Input extends Singleton {

    /**
     * the currently pressed keys
     */
    private currentKeyInput: number[] = [];

    constructor() {

        super();

        // add events
        this.addEventListener();

        // bind singleton
        Input.bindInstance(this);
    }

    /**
     * add window events to captcher user input
     */
    private addEventListener(): void {

        window.addEventListener('keydown', this.onKeydown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    /**
     * reset all keys
     */
    private restoreKeys(): void {

        this.currentKeyInput = [];
    }

    /**
     * fires on user key input
     *
     * @param event the event
     */
    private onKeydown(event: KeyboardEvent): void {

        // add the key to the stack
        if (this.currentKeyInput.indexOf(event.keyCode) === -1)
            this.currentKeyInput.push(event.keyCode);
    }

    /**
     * fires if the user stop pressing one key
     *
     * @param event the event
     */
    private onKeyUp(event: KeyboardEvent): void {

        // removes the code from the key input
        this.currentKeyInput.splice(this.currentKeyInput.indexOf(event.keyCode), 1);
    }

    /**
     * get the current user input for arrow keys
     */
    public getArrowKeys(): InputArrowKeys {

        return <InputArrowKeys>{
            down: this.currentKeyInput.indexOf(40) !== -1,
            up: this.currentKeyInput.indexOf(38) !== -1,
            left: this.currentKeyInput.indexOf(37) !== -1,
            right: this.currentKeyInput.indexOf(39) !== -1
        };
    }
}