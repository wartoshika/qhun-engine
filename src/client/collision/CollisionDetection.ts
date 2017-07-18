/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Entity } from '../entity';
import { World } from '../world';
import { Camera } from '../camera';
import { Vector2D } from '../../shared/math';

export class CollisionDetection {

    /**
     * check if entities collides with the world
     *
     * @param world the world to check
     */
    public static entitiesWithWorld(world: World): void {

        /*// only take entities that can collide
        entities.filter((entity) => entity instanceof CollidableEntity).forEach((entity: CollidableEntity) => {

            // calculate the entity position in every direction from its
            // current position
            const position: {
                [direction: number]: Vector2D
            } = {};

            // get the position of the entity
            const entityPosition = entity.getPosition();
            const tileDimension = world.getTileMap().getDimension();
            const entityCollidesWithWorldBounds = entity.getWorldBoundCollision();

            // calculate the tile position on the map
            const tilePosition = entityPosition
                .divide(camera.getScaleVector())
                .divide(Vector2D.from(tileDimension.y, tileDimension.y))
                .round(0);

            // now the system should check if the entity can move
            position[Direction.Left] = tilePosition.add(Vector2D.from(-1, 0));
            position[Direction.Right] = tilePosition.add(Vector2D.from(1, 0));
            position[Direction.Up] = tilePosition.add(Vector2D.from(0, -1));
            position[Direction.Down] = tilePosition.add(Vector2D.from(0, 1));

            // iterate the directions
            Object.keys(position).forEach((key) => {

                const direction = parseInt(key, 10) as Direction;
                let collision = false;

                // get the tile numbers that are at the players point
                const tileNumbers = world.getTileNumbersForPosition(position[direction]);

                // on a collidable tile?
                const collidableTileNumbers = world.getTileMap().getCollidableTileNumbers();

                // test collision
                tileNumbers.forEach((number) => {

                    // does the number exist?
                    if (
                        // collidable tile
                        collidableTileNumbers.indexOf(number) !== -1
                        ||
                        // world bound
                        (entityCollidesWithWorldBounds && number === -2)
                    ) {

                        collision = true;
                    }
                });

                // set the direction
                entity.setDirectionBlocked(direction, collision);
            });
        });*/
    }
}
