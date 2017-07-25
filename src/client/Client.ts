/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { AssetRegister } from './asset/AssetRegister';
import { Game } from './Game';
import { Input } from './input/Input';
import { CollisionDetection } from './collision/CollisionDetection';
import { QhunEngineBootstrap } from './QhunEngineBootstrap';
import { ClientConfig } from './ClientConfig';

import { WindowResizeEvent } from './event';

/**
 * the initiation class of the game client
 */
export abstract class Client extends QhunEngineBootstrap {

    constructor(
        protected clientConfig: ClientConfig
    ) {
        super(clientConfig);

        // add different events
        this.addEvents();
    }

    /**
     * preload function that allows to load sprites and do some heavy
     * stuff before the game actually starts
     */
    public abstract preload(assetRegister: AssetRegister): void;

    /**
     * a function that is called if the preload phase is completed
     * you now have access to the registered assets
     */
    public abstract async loaded(game: Game): Promise<void>;

    /**
     * update function handles the interaction with the player eg. the keybord
     * input and changing the players direction or speed.
     * this method is called during game loop BEFORE rendering!
     *
     * @warning dont do heavy stuff in here because this meight cause performance issues
     */
    public abstract update(game: Game, input: Input): void;

    /**
     * the game loop where all things come together
     */
    protected gameLoop(): void {

        // call update method
        this.update(this.gameInstance, this.inputInstance);

        // run collision detection
        // CollisionDetection.entitiesWithWorld(
        //    this.renderer.getWorld()
        // );

        // render the game
        if (typeof this.renderer.preRender === 'function') this.renderer.preRender();
        this.renderer.render();
        if (typeof this.renderer.postRender === 'function') this.renderer.postRender();

        // request the next game frame
        window.requestAnimationFrame(this.gameLoop.bind(this));
    }

    /**
     * add different event handlers
     */
    private addEvents(): void {

        const resizeEvent = new WindowResizeEvent();
    }
}
