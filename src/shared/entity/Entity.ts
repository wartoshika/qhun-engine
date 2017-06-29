import { Vector2D } from 'shared/math';
import { Image } from 'client/asset';
import { OptionalRendering } from 'shared/entity/OptionalRendering';
/**
 * the base class for all game entities
 */
export abstract class Entity implements OptionalRendering {

    /**
     * the image that is rendered during game loop to display the entitiy
     */
    private currentTemplate: Image;

    constructor(
        private position: Vector2D = new Vector2D(0, 0)
    ) { }

    /**
     * get the current position of the entity (center point)
     */
    public getPosition(): Vector2D {

        return this.position;
    }

    /**
     * get the image asset that displays the current entity
     */
    public getImage(): Image {

        return this.currentTemplate;
    }

    /**
     * set the new image for this entity
     *
     * @param image the current image that should represent this entity during rendering
     */
    public setImage(image: Image): void {

        this.currentTemplate = image;
    }

    /**
     * is the entity visible? if not, the renderer will not render this entity
     */
    public abstract isVisible(): boolean;
}