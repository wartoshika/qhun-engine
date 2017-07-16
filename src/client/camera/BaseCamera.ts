/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Entity } from '../entity';
import { World } from '../world';
import { CameraMode } from './CameraMode';
import { Camera } from './Camera';

import {
    Vector2D
} from '../../shared';

/**
 * the view for the player into the game
 */
export abstract class BaseCamera implements Camera {

    /**
     * the camera mode
     */
    protected abstract readonly mode: CameraMode;

    /**
     * the entitiy which the camera should follow
     */
    private followingEntity: Entity = null;

    /**
     * the current camera world bounds
     */
    private worldBounds: Vector2D = null;

    /**
     *
     * @param scale the scale of the world. 1 means that a tile of 32x32 will renderes on 32x32 pixel. scane 5 means that a tile of 32x32 will be rendered as (32*5)x(32*5) pixel...
     * @param mode the camera mode
     */
    constructor(
        private scale: number = 1
    ) { }

    /**
     * get the camera mode
     */
    public getMode(): CameraMode {

        return this.mode;
    }

    /**
     * get the current world scale modificator
     */
    public getScale(): number {

        return this.scale;
    }

    /**
     * get the camera scale as vector
     */
    public getScaleVector(): Vector2D {

        return new Vector2D(this.scale, this.scale);
    }

    /**
     * set the current world scale modificator
     */
    public setScale(scale: number): void {

        this.scale = scale;
    }

    /**
     * follows one entity
     *
     * @param entity the entity to follow
     */
    public followEntity(entity: Entity): void {

        this.followingEntity = entity;
    }

    /**
     * get the current entity the camera follows.
     * can be undefined is the camera is not following an entity
     */
    public getFollowingEntity(): Entity {

        return this.followingEntity;
    }

    /**
     * if the camera should be allways within the world, set the world
     * bounds to the current active world
     */
    public setWorldBounds(world: World): void {

        const dimension = world.getWorldDimension();
        this.worldBounds = new Vector2D(
            dimension.x,
            dimension.y
        );
    }

    /**
     * get the current world bounds.
     *
     * @warning return value can be null if no bounds are available!
     */
    public getWorldBounds(): Vector2D {

        const wb = this.worldBounds;
        if (!wb) return wb;

        // add the current camera scale
        return wb.multiply(new Vector2D(this.getScale(), this.getScale()));
    }
}
