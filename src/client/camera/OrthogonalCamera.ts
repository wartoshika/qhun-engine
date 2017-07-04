/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { BaseCamera } from './BaseCamera';
import { CameraMode } from './CameraMode';

/**
 * an orthogonal camera for the view of the player
 */
export class OrthogonalCamera extends BaseCamera {

    /**
     * the camera mode
     */
    protected mode: CameraMode = CameraMode.Orthogonal
}