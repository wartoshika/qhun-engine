/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CameraMode } from './CameraMode';
import { Entity } from '../../shared/entity';

/**
 * the view for the player into the game
 */
export class Camera {

    /**
     * the entitiy which the camera should follow
     */
    private followingEntity: Entity = null;

    /**
     *
     * @param scale the scale of the world. 1 means that a tile of 32x32 will renderes on 32x32 pixel. scane 5 means that a tile of 32x32 will be rendered as (32*5)x(32*5) pixel...
     * @param mode the camera mode
     */
    constructor(
        private scale: number = 1,
        private readonly mode: CameraMode = CameraMode.Orthogonal
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