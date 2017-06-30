import { Scene } from 'client/scene/Scene';
import { Game } from 'Game';

/**
 * a basic loading screen scene
 */
export class LoadingScreenScene extends Scene {

    /**
     * creates the scene. the new scene starts only if the promise is resolved.
     *
     * @param game the current game holder instance
     */
    public async create(game: Game): Promise<void> {

        console.log("scene create");
    }

    /**
     * the update function called during game loop for the currently
     * active scene
     *
     * @param game the current game holder instance
     */
    public update(game: Game): void {

       // console.log("scene update");
    }

    /**
     * called if the scene changes. only if the promise is resolved, the
     * new scene will start
     *
     * @param game the current game holder instance
     */
    public async destroy(game: Game): Promise<void> {

        console.log("scene destroy");
    }
}