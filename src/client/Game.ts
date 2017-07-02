/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton } from '../shared/helper';
import { Renderer } from './render';
import { Entity } from './entity';
import { Scene } from './scene';
import { World } from './world';
import { Log } from '../shared/log';
import { Camera } from './camera';

declare type Thing = Entity | Scene | World | Camera;

/**
 * a class that handles adding of entities, cameras, physics ...
 */
export class Game extends Singleton {

    /**
     * the holder of the currently visible scene
     */
    protected currentScene: Scene;

    /**
     * holder of the registered worlds
     */
    protected worldStack: { [worldName: string]: World } = {};

    constructor(
        private renderer: Renderer
    ) {
        super();

        // bind singleton
        Game.bindInstance(this);
    }

    /**
     * add a thing to the game
     *
     * @param things the things to add
     */
    public add(...things: Thing[]): void {

        // iterate through all things
        things.forEach(thing => {

            // check the type of the thing
            if (thing instanceof Entity) {

                this.addEntity(<Entity>thing);
            } else if (thing instanceof Scene) {

                this.addScene(<Scene>thing);
            } else if (thing instanceof World) {

                this.addWorld(<World>thing);
            } else if (thing instanceof Camera) {

                this.addCamera(<Camera>thing);
            }
        });
    }

    /**
     * add one entity to the game
     *
     * @param entity the entity to add
     */
    public addEntity(entity: Entity): void {

        this.renderer.addEntity(entity);
    }

    /**
     * add a camera to the game
     *
     * @param camera the camera to add
     */
    public addCamera(camera: Camera): void {

        // currently only one camera can be added.
        this.renderer.setCamera(camera);
    }


    /**
     * add one world to the game
     *
     * @param world the world to add
     */
    public addWorld(world: World): void {

        this.worldStack[world.getName()] = world;
    }

    /**
     * add one scene to the game
     *
     * @param scene the scene to add
     * @param autostart should the scene start?
     */
    public addScene(scene: Scene, autostart: boolean = false): void {

        if (autostart) {

            // load the scene
            this.loadScene(scene);
        }
    }

    /**
     * get the currently visible scene
     */
    public getCurrentScene(): Scene {

        return this.currentScene;
    }

    /**
     * load a new scene
     *
     * @param scene the scene to load
     */
    public async loadScene(scene: Scene): Promise<void> {

        let promise = new Promise<void>(r => r());

        // destruct the current scene
        if (this.currentScene) {

            // wait for complete destruction
            await this.currentScene.destroy(this);
        }

        // set the new scene
        this.currentScene = scene;
        this.currentScene.create(this);
    }

    /**
     * load a world and render it in the background
     *
     * @param world the world name to load
     */
    public loadWorld(world: string): void {

        // does the world exists?
        if (!(world in this.worldStack)) {

            // print error
            Log.error("Trying to load", world, "but this world does not exists");
            return;
        }

        // set the world in the renderer
        this.renderer.setWorld(this.worldStack[world]);
    }
}