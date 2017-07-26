/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { CameraMode } from './CameraMode';
import { World } from '../world';

import {
    Entity, Vector2D, Dimension
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
     * set the world size/bounds
     */
    setWorldBounds(bounds: Dimension): void;

    /**
     * get the world size/bounds
     */
    getWorldBounds(): Dimension;

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
     * checks if an entity is visible by this camera
     */
    isEntityVisible(entity: Entity): boolean;

    /**
     * translates the given position of an entity or asset
     * to a new position including scale and entity following
     */
    translatePosition(currentPosition: Vector2D): Vector2D;

}
