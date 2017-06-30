import { OptionalRendering } from 'shared/entity';
import { Singleton } from 'shared/helper';
import { Image } from 'client/asset';
import { Game } from 'Game';

/**
 * the basic renderer class that all renderers should extend
 */
export abstract class BasicRenderer extends Singleton {

    private entities: OptionalRendering[] = [];

    /**
     * holds the game instance
     */
    protected gameInstance: Game;

    /**
     * get all renderable entities
     */
    protected getRenderableEntities(): OptionalRendering[] {

        let renderableEntities: OptionalRendering[] = [];
        this.entities.forEach(entity => {

            // only visible entities and entities that have an image
            if (entity.isVisible() && entity.getImage())
                renderableEntities.push(entity);
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