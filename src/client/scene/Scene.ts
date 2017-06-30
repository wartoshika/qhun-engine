import { Game } from 'Game';

/**
 * a basic scene
 */
export abstract class Scene {

    /**
     * creates the scene. the new scene starts only if the promise is resolved.
     *
     * @param game the current game holder instance
     */
    public abstract async create(game: Game): Promise<void>;

    /**
     * the update function called during game loop for the currently
     * active scene
     *
     * @param game the current game holder instance
     */
    public abstract update(game: Game): void;

    /**
     * called if the scene changes. only if the promise is resolved, the
     * new scene will start
     *
     * @param game the current game holder instance
     */
    public abstract async destroy(game: Game): Promise<void>;
}