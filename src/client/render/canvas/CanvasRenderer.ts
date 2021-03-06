/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { BasicRenderer } from '../BasicRenderer';
import { Point2, EventName } from '../../../shared';
import { ClientConfig } from '../../ClientConfig';
import { AnimationEntity } from '../../entity/AnimationEntity';
import { World } from '../../world/World';
import { CanvasWorldRenderer } from './CanvasWorldRenderer';
import { CanvasEntityRenderer } from './CanvasEntityRenderer';
import { RenderableEntity } from '../../entity/RenderableEntity';
import { Entity as ClientEntity } from '../../entity/Entity';

const FPS_OFFSET = 25;

/**
 * a game renderer based on the html canvas element
 */
export class CanvasRenderer extends BasicRenderer {

    /**
     * the holder of the canvas element
     */
    private canvas: HTMLCanvasElement;

    /**
     * the 2d rendering context of the game canvas
     */
    private ctx: CanvasRenderingContext2D;

    /**
     * the game height and width holder
     */
    private gameDimension: Point2;

    /**
     * holder of the client config
     */
    private clientConfig: ClientConfig;

    /**
     * set up the game environment to a given size
     */
    public setup(clientConfig: ClientConfig): void {

        // store the config
        this.clientConfig = clientConfig;

        // save the size and create the canvas
        this.gameDimension = this.createCanvas();

        // get the 2d context
        this.ctx = this.canvas.getContext('2d');

        // init entity renderer
        this.entityRenderer = new CanvasEntityRenderer(
            Point2.from(
                this.gameDimension.x, this.gameDimension.y
            ),
            this.ctx
        );
    }

    /**
     * get the current drawing size in pixel
     */
    public getDrawingDimension(): Point2 {

        return this.gameDimension;
    }

    /**
     * pre rendering
     */
    public preRender(): void {

        // clear the current canvas (check performance when not clearing)
        // this.ctx.fillStyle = '#000';
        // this.ctx.fillRect(0, 0, this.gameDimension.x, this.gameDimension.y);

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

        // only render if a world renderer is present
        if (!this.worldRenderer || !this.entityRenderer) return;

        // get all renderable entities and ignore invisible ones
        // test for RenderableEntity is better but interface match is not possible...
        const visibleEntities = this.worldRenderer
            .getWorld().getEntities()
            .filter((entity) => {
                return entity instanceof ClientEntity;
            }).forEach((entity) => {

                // render the entity at its center point
                this.entityRenderer.renderEntity(entity as RenderableEntity);
            });

        // print fps
        this.printFps();

        // fps update
        this.fps.lastUpdate = +new Date();
    }

    /**
     * set the current visible world as background
     */
    public async setWorld(world: World): Promise<void> {

        // instantiate the world renderer
        this.worldRenderer = new CanvasWorldRenderer(
            world, this.canvas, this.ctx, this.currentCamera
        );

        // let the entity renderer know about the existing of the world renderer
        this.entityRenderer.setWorldRenderer(this.worldRenderer);

        // watit until the clusters has been created
        return await this.worldRenderer.preRenderLayers();
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
        this.ctx.fillStyle = 'white';
        this.ctx.font = '30px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText(this.fps.fps.toFixed(0), FPS_OFFSET, FPS_OFFSET);

        // black stroke
        this.ctx.strokeStyle = 'black';
        this.ctx.font = '361x Arial';
        this.ctx.textAlign = 'center';
        this.ctx.strokeText(this.fps.fps.toFixed(0), FPS_OFFSET, FPS_OFFSET);
    }

    /**
     * creates the canvas element and append it to the given parentNode
     *
     * @return get the canvas size
     */
    private createCanvas(): Point2 {

        // create the canvas
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);

        // calculate the initial height and width
        const height = window.innerHeight;
        const width = window.innerWidth;

        // apply the game size
        this.canvas.setAttribute('width', `${height}px`);
        this.canvas.setAttribute('height', `${width}px`);
        this.canvas.setAttribute('style', 'display:block;position:absolute;');

        // start listen to window resize event
        this.on(EventName.WindowResize, (newWindowSize: Point2) => {

            // resize the canvas
            this.canvas.width = newWindowSize.x;
            this.canvas.height = newWindowSize.y;

            // apply to dom
            this.canvas.setAttribute('width', `${newWindowSize.x}px`);
            this.canvas.setAttribute('height', `${newWindowSize.y}px`);
        });

        return new Point2(width, height);
    }

}
