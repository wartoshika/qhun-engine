/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Dimension } from '../../shared/math';
import { RenderableEntity } from '../entity';
import { AssetLoader } from '../asset';
import { Game } from '../Game';
import { ClientConfig } from '../ClientConfig';

/**
 * a basic renderer interface to have future space for eg webgl
 */
export interface Renderer {

    /**
     * set up the game environment to a given dimension
     */
    setup(clientConfig: ClientConfig): void;

    /**
     * this method is called during gameLoop before render is called
     */
    preRender?(): void;

    /**
     * the method where all the magic takes place. called in gameloop
     * to render all entities and other stuff
     */
    render(): void;

    /**
     * this method is called during gameLoop after render is called
     */
    postRender?(): void;

    /**
     * add one or many entities to the current game scene
     */
    addEntity(entity: RenderableEntity): void;
}