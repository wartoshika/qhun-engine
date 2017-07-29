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
import { Point2 } from '../../shared';

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
    protected followingEntity: Entity = null;

    /**
     * the position of the camera
     */
    protected position: Point2 = Point2.from(0, 0);

    /**
     * the world bounds for this camera
     */
    protected worldBounds: Point2;

    /**
     *
     * @param scale the scale of the world. 1 means that a tile of 32x32 will renderes on 32x32 pixel. scane 5 means that a tile of 32x32 will be rendered as (32*5)x(32*5) pixel...
     * @param mode the camera mode
     */
    constructor(
        private scale: number = 1
    ) { }

    /**
     * checks if an entity is visible by this camera
     */
    public abstract isEntityVisible(entity: Entity): boolean;

    /**
     * translates the given position of an entity or asset
     * to a new position including scale and entity following
     */
    public abstract translatePosition(currentPosition: Point2): Point2;

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
     * get the camera scale as point
     */
    public getScaleVector(): Point2 {

        return new Point2(this.scale, this.scale);
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
     * set the world size/bounds as unscaled pixel
     */
    public setWorldBounds(bounds: Point2): void {

        this.worldBounds = bounds;
    }

    /**
     * get the world size/bounds as unscaled pixel
     */
    public getWorldBounds(): Point2 {

        return this.worldBounds;
    }
}
