/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Vector2D, Dimension } from '../math';
import { CollisionType } from '../collision';

export class GameObject {

    /**
     * the current collision type
     */
    protected collisionType: CollisionType = CollisionType.Rectangle;

    /**
     * the previous position.
     */
    private previousPosition: Vector2D = Vector2D.from(0);

    constructor(
        protected gameObjectWidth: number = 0,
        protected gameObjectHeight: number = 0,
        protected position: Vector2D = new Vector2D(0, 0)
    ) { }

    /**
     * get the width of the gameObject
     */
    public getWidth(): number {

        return this.gameObjectWidth;
    }

    /**
     * get the height of the gameObject
     */
    public getHeight(): number {

        return this.gameObjectHeight;
    }

    /**
     * get the current position of the gameObject ( top left )
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

        this.previousPosition = this.position;
        this.position = position;
    }

    /**
     * get gameObject width and height as dimension object
     */
    public getSize(): Dimension {

        return new Dimension(this.gameObjectWidth, this.gameObjectHeight);
    }

    /**
     * reset the position of the gameObject to its previous position
     */
    public restorePreviousPosition(): void {

        this.position = this.previousPosition;
    }

    /**
     * get the collision type of the game object
     */
    public getCollisionType(): CollisionType {

        return this.collisionType;
    }
}
