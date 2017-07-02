/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Renderer } from '../render/Renderer';
import { Dimension } from '../../shared/math';
import { Log } from '../../shared/log';
import { Image, AssetLoader, AssetType } from '../asset';
import { World } from '../world';
import { Camera } from '../camera';
import { BasicRenderer } from '../render/BasicRenderer';
import { ClientConfig } from '../ClientConfig';
import { CanvasWorldRenderer } from './CanvasWorldRenderer';
import { CameraOffsetCalculator } from './CameraOffsetCalculator';

import { RamStorage } from '../../shared/storage';

const FPS_OFFSET = 25;

/**
 * a game renderer based on the html canvas element
 */
export class CanvasRenderer extends BasicRenderer implements Renderer {

    /**
     * the holder of the canvas element
     */
    private canvas: HTMLCanvasElement;

    /**
     * the 2d rendering context of the game canvas
     */
    private ctx: CanvasRenderingContext2D;

    /**
     * the asset loader instance
     */
    private assetLoader: AssetLoader;

    /**
     * the game height and width holder
     */
    private gameDimension: Dimension;

    /**
     * holder of the client config
     */
    private clientConfig: ClientConfig;

    /**
     * holder of the canvas world renderer
     */
    private worldRenderer: CanvasWorldRenderer = null;

    private currentCamera: Camera = null;

    constructor() {
        super();

        // get the asset loader
        this.assetLoader = AssetLoader.getInstance<AssetLoader>();

        // bind the instance
        CanvasRenderer.bindInstance(this);
    }

    /**
     * set up the game environment to a given dimension
     */
    public setup(clientConfig: ClientConfig): void {

        // call super function
        super.setup(clientConfig);
        this.clientConfig = clientConfig;

        // save the dimension and create the canvas
        this.gameDimension = clientConfig.gameDimension;
        this.createCanvas();

        // get the 2d context
        this.ctx = this.canvas.getContext('2d');
    }

    /**
     * set the current camera as the users view into the game
     */
    public setCamera(camera: Camera): void {

        this.currentCamera = camera;
    }

    /**
     * print the current fps on the screen
     *
     * @param fps the current fps
     */
    protected printFps(): void {

        // print only if the user want this
        if (!this.clientConfig.printFps) return;

        // calculate the fps
        this.calculateFps();

        // write the fps number to the canvas context
        this.ctx.fillStyle = "white";
        this.ctx.font = "30px Arial";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.fps.fps.toFixed(0), FPS_OFFSET, FPS_OFFSET);

        // black stroke
        this.ctx.strokeStyle = "black";
        this.ctx.font = "361x Arial";
        this.ctx.textAlign = "center";
        this.ctx.strokeText(this.fps.fps.toFixed(0), FPS_OFFSET, FPS_OFFSET);
    }

    /**
     * creates the canvas element and append it to the given parentNode
     */
    private createCanvas(): void {

        // create the canvas
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);

        // apply the game dimension
        this.canvas.setAttribute('width', `${this.gameDimension.x}px`);
        this.canvas.setAttribute('height', `${this.gameDimension.y}px`);
        this.canvas.setAttribute('style', 'display:block;position:absolute;');
    }

    /**
     * pre rendering
     */
    public preRender(): void {

        // clear the current canvas
        this.ctx.clearRect(0, 0, this.gameDimension.x, this.gameDimension.y);

        // check if a world should be rendered
        if (this.worldRenderer) {

            // render it!
            this.worldRenderer.render();
        }
    }

    /**
     * the method where all the magic takes place. called in gameloop
     * to render all entities and other stuff
     */
    public render(): void {

        // get all entities that shoule be visible by the client
        // @todo: only render entitites that are visible by the camera
        let visibleEntities = this.getRenderableEntities();

        // render the entity at its center point
        visibleEntities.forEach(entity => {


            // calculate the new height and width and draw the entity
            (<any>this.ctx).drawImage(
                ...CameraOffsetCalculator.imageScaleDrawEntity(entity, this.currentCamera)
            );
        });

        // print fps
        this.printFps();

        // fps update
        this.fps.lastUpdate = +new Date();
    }

    /**
     * set the current visible world as background
     */
    public setWorld(world: World): void {

        // instantiate the world renderer
        this.worldRenderer = new CanvasWorldRenderer(
            world, this.canvas, this.ctx, this.currentCamera
        );
    }

}