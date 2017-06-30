import { Vector2D } from 'shared/math';
import { Entity as BaseEntity } from 'shared/entity';
import { RenderableEntity } from 'client/entity/RenderableEntity';

/**
 * the base class for all game entities
 */
export abstract class Entity extends BaseEntity implements RenderableEntity {

    /**
     * the image that is rendered during game loop to display the entitiy
     */
    private currentTemplate: string;

    /**
     * the visibility flag
     */
    protected visible: boolean = true;

    /**
     * get the image asset that displays the current entity
     */
    public getImage(): string {

        return this.currentTemplate;
    }

    /**
     * set the new image for this entity
     *
     * @param image the current image that should represent this entity during rendering
     */
    public setImage(image: string): void {

        this.currentTemplate = image;
    }

    /**
     * is the entity visible? if not, the renderer will not render this entity
     */
    public isVisible(): boolean {

        return this.visible;
    }

    /**
     * sets the visibility of the entity
     */
    public setVisible(visible: boolean): void {

        this.visible = visible;
    }
}