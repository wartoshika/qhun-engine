/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Renderer } from 'client/render/Renderer';
import { Dimension } from 'shared/math';
import { Log } from 'shared/log';
import { Image, AssetLoader, AssetType } from 'client/asset';
import { BasicRenderer } from 'client/render/BasicRenderer';

import { RamStorage } from 'shared/storage';

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

    constructor() {
        super();

        // some logging
        Log.info("Using", this, "as Renderer");

        // get the asset loader
        this.assetLoader = AssetLoader.getInstance<AssetLoader>();

        // bind the instance
        CanvasRenderer.bindInstance(this);
    }

    /**
     * set up the game environment to a given dimension
     */
    public setup(gameDimension: Dimension): void {

        // save the dimension and create the canvas
        this.gameDimension = gameDimension;
        this.createCanvas();

        // get the 2d context
        this.ctx = this.canvas.getContext('2d');
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
     * the method where all the magic takes place. called in gameloop
     * to render all entities and other stuff
     */
    public render(): void {

        // clear the current canvas
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(0, 0, this.gameDimension.x, this.gameDimension.y);

        // get all entities that shoule be visible by the client
        // @todo: only render entitites that are visible by the camera
        let visibleEntities = this.getRenderableEntities();

        // render the entity at its center point
        visibleEntities.forEach(entity => {

            // draw the entity
            this.ctx.drawImage(

                // get the image of the entity
                this.assetLoader.getAsset<Image>(
                    entity.getImage(), AssetType.Image
                ).getData(),

                entity.getPosition().x,
                entity.getPosition().y
            );
        });

    }

}