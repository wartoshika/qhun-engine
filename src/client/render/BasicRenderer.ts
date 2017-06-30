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

            // only visible entities
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
}