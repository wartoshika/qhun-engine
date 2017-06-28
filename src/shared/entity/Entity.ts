import { Vector2D } from 'shared/math';

/**
 * the base class for all game entities
 */
export class Entity {

    constructor(
        private position: Vector2D = new Vector2D(0, 0)
    ) { }

    /**
     * get the current position of the entity (center point)
     */
    public getPosition(): Vector2D {

        return this.position;
    }
}