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
    protected followingEntity: Entity = null;

    /**
     * the position of the camera
     */
    protected position: Vector2D = Vector2D.from(0, 0);

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
}
