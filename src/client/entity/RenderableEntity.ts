/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Image } from '../asset';
import { Point2, Entity } from '../../shared';

export interface RenderableEntity extends Entity {

    /**
     * get the image asset that displays the current entity
     */
    getImage(): string;

    /**
     * set the new image for this entity
     *
     * @param image the current image that should represent this entity during rendering
     */
    setImage(image: string): void;

    /**
     * is the entity visible? if not, the renderer will not render this entity
     */
    isVisible(): boolean;

    /**
     * sets the visibility of the entity
     */
    setVisible(visible: boolean): void;

    /**
     * get the position from the entity (top, left)
     */
    getPosition(): Point2;

    /**
     * get the current local entity scale
     */
    getScale(): number;

    /**
     * set a local entity scale. this is multiplied with the camera scale and the entity width / height
     */
    setScale(scale: number): void;
}
