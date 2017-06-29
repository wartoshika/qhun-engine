import { OptionalRendering } from 'shared/entity';
import { Singleton } from 'shared/helper';
import { Image } from 'client/asset';

/**
 * the basic renderer class that all renderers should extend
 */
export abstract class BasicRenderer extends Singleton {

    private entities: OptionalRendering[] = [];

    /**
     * get all renderable entities
     */
    protected getRenderableEntities(): OptionalRendering[] {

        let renderableEntities: OptionalRendering[] = [];
        this.entities.forEach(entity => {

            if (entity.isVisible()) renderableEntities.push(entity);
        });

        // just return the currently visible entities
        return renderableEntities;
    }

    /**
     * add an entity to the current game scene
     */
    public addEntity(entity: OptionalRendering): void {

        this.entities.push(entity);
    }

    /**
     * a function that allowes the transform an image asset to a renderable context
     * object.
    */
    public abstract imageToRenderObject(image: Image): any;
}