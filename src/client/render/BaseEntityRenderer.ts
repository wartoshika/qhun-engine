/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { EntityRenderer } from './EntityRenderer';
import { AssetStorage } from '../asset/AssetStorage';
import { Singleton } from '../../shared/helper/Singleton';
import { RenderableEntity } from '../entity';
import { Camera } from '../camera/Camera';
import { WorldRenderer } from './WorldRenderer';
import { Point2, EventName, Log } from '../../shared';

/**
 * an entity renderer class that handles renderer unspecific things
 */
export abstract class BaseEntityRenderer extends Singleton implements EntityRenderer {

    /**
     * the current world that is renderes by the world renderer
     */
    protected worldRenderer: WorldRenderer;

    /**
     * the asset storage for entity images
     */
    protected assetStorage = AssetStorage.getInstance<AssetStorage>();

    /**
     * logger instance
     */
    private logger: Log = Log.getLogger(BaseEntityRenderer.name);

    constructor(
        protected drawingDimension: Point2
    ) {

        super();

        // register resize event
        this.on(EventName.WindowResize, (newWindowSize: Point2) => {

            // apply the new window size to determinate the right
            // camera offset and visibillity
            this.drawingDimension = newWindowSize;
        });
    }

    /**
     * renders the given entity
     */
    public abstract renderEntity(entity: RenderableEntity): void;

    /**
     * set the world renderer
     */
    public setWorldRenderer(worldRenderer: WorldRenderer): void {

        this.worldRenderer = worldRenderer;
    }

}
