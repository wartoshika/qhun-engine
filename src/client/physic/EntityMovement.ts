/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
    Singleton, Entity, Vector2D, Direction
} from '../../shared';

/**
 * a class that handles the movement of entities during game update
 */
export class EntityMovement extends Singleton {

    /**
     * handle entity movement for the given entities
     *
     * @param entities the entities to handle
     */
    public handleMovement(entities: Entity[]): void {

        // iterate through all
        entities.forEach((entity) => {

            // save the orig pos
            const originalPosition = entity.getPosition();

            // update the position of the entity
            const newPosition = entity.getPosition().add(
                entity.getTranslatingPosition()
            );
            entity.setPosition(newPosition);

            // calculate the direction
            const direction = this.calculateMovementDirection(originalPosition, newPosition);
            if (direction !== null)
                entity.setLastKnownDirection(direction);

            // reset translate position
            entity.resetTranslatePositon();
        });
    }

    /**
     * calculates the vector direction from two vectors
     *
     * @param originalPosition the original position
     * @param newPosition the new position
     */
    private calculateMovementDirection(originalPosition: Vector2D, newPosition: Vector2D): Direction {

        // get the axis movement
        const xMovement = originalPosition.substract(newPosition).x;
        const yMovement = originalPosition.substract(newPosition).y;

        // check the movement direction
        // first check y axis
        if (yMovement > 0) return Direction.Up;
        else if (yMovement < 0) return Direction.Down;

        // now x axis
        if (xMovement > 0) return Direction.Left;
        else if (xMovement < 0) return Direction.Right;

        // invalid direction
        return null;
    }
}
