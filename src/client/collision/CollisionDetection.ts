/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Entity, CollidableEntity, Direction } from '../entity';
import { World } from '../world';
import { Camera } from '../camera';
import { Vector2D } from '../../shared/math';

export class CollisionDetection {

    /**
     * checks if the given entities collides with the world
     *
     * @param entities the entities to test
     * @param world the current world
     */
    public static entitiesWithWorld(
        entities: Entity[], world: World, camera: Camera
    ): void {

        // only take entities that can collide
        entities.filter(entity => entity instanceof CollidableEntity).forEach((entity: CollidableEntity) => {

            // calculate the entity position in every direction from its
            // hitbox
            let position: {
                [direction: number]: Vector2D
            } = {};

            // get the position of the entity
            let entityPosition = entity.getPosition();
            let tileDimension = world.getTileMap().getDimension();
            let entityCollidesWithWorldBounds = entity.getWorldBoundCollision();

            // calculate the tile position on the map
            let tilePosition = entityPosition
                .divide(camera.getScaleVector())
                .divide(Vector2D.from(tileDimension.y, tileDimension.y))
                .round(0);

            // now the system should check if the entity can move
            position[Direction.Left] = tilePosition.add(Vector2D.from(-1, 0));
            position[Direction.Right] = tilePosition.add(Vector2D.from(1, 0));
            position[Direction.Up] = tilePosition.add(Vector2D.from(0, -1));
            position[Direction.Down] = tilePosition.add(Vector2D.from(0, 1));

            // iterate the directions
            Object.keys(position).forEach(key => {

                let direction = <Direction>parseInt(key);
                let collision = false;

                // get the tile numbers that are at the players point
                let tileNumbers = world.getTileNumbersForPosition(position[direction]);

                if ((<any>window).log === true) {
                    if (direction === Direction.Right) {

                        console.log(tileNumbers);
                        (<any>window).log = false;
                    }
                }

                // on a collidable tile?
                let collidableTileNumbers = world.getCollidableTileNumbers();

                // test collision
                tileNumbers.forEach(number => {

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
        });
    }
}