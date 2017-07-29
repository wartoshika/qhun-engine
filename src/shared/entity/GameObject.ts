/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Point2 } from '../math';
import { CollisionType } from '../collision';

export class GameObject {

    /**
     * the current collision type
     */
    protected collisionType: CollisionType = CollisionType.Rectangle;

    /**
     * the previous position.
     */
    private previousPosition: Point2 = Point2.from(0);

    constructor(
        protected gameObjectWidth: number = 0,
        protected gameObjectHeight: number = 0,
        protected position: Point2 = new Point2(0, 0)
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
    public getPosition(): Point2 {

        return this.position;
    }

    /**
     * set the entities new position
     *
     * @param position the new position
     */
    public setPosition(position: Point2): void {

        this.previousPosition = this.position;
        this.position = position;
    }

    /**
     * get gameObject width and height as size object
     */
    public getSize(): Point2 {

        return new Point2(this.gameObjectWidth, this.gameObjectHeight);
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
