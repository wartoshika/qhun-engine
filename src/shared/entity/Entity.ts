import { Vector2D } from 'shared/math';

/**
 * the base class for all game entities
 */
export abstract class Entity {

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
     * set the entities new position
     *
     * @param position the new position
     */
    public setPosition(position: Vector2D): void {

        this.position = position;
    }
}