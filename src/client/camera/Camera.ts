/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CameraMode } from './CameraMode';
import { World } from '../world';

import {
    Entity, Vector2D
} from '../../shared';

/**
 * the view for the player into the game
 */
export interface Camera {

    /**
     * get the camera mode
     */
    getMode(): CameraMode;

    /**
     * get the current world scale modificator
     */
    getScale(): number;

    /**
     * get the camera scale as vector
     */
    getScaleVector(): Vector2D;

    /**
     * set the current world scale modificator
     */
    setScale(scale: number): void;

    /**
     * follows one entity
     *
     * @param entity the entity to follow
     */
    followEntity(entity: Entity): void;

    /**
     * get the current entity the camera follows.
     * can be undefined is the camera is not following an entity
     */
    getFollowingEntity(): Entity;

    /**
     * if the camera should be allways within the world, set the world
     * bounds to the current active world
     */
    setWorldBounds(world: World): void;

    /**
     * get the current world bounds.
     *
     * @warning return value can be null if no bounds are available!
     */
    getWorldBounds(): Vector2D;

}