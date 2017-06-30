import { Image } from 'client/asset';
import { Vector2D } from 'shared/math';

export interface OptionalRendering {

    /**
     * get the image asset that displays the current entity
     */
    getImage(): Image;

    /**
     * set the new image for this entity
     *
     * @param image the current image that should represent this entity during rendering
     */
    setImage(image: Image): void;

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
    getPosition(): Vector2D;
}