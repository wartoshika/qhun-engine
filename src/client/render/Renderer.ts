import { Dimension } from 'shared/math';
import { OptionalRendering } from 'shared/entity';

/**
 * a basic renderer interface to have future space for eg webgl
 */
export interface Renderer {

    /**
     * set up the game environment to a given dimension
     */
    setup(gameDimension: Dimension): void;

    /**
     * this method is called during gameLoop before render is called
     */
    preRender?(): void;

    /**
     * the method where all the magic takes place. called in gameloop
     * to render all entities and other stuff
     */
    render(): void;

    /**
     * this method is called during gameLoop after render is called
     */
    postRender?(): void;

    /**
     * add one or many entities to the current game scene
     */
    addEntity(entity: OptionalRendering): void;

}