/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Entity } from '../entity';
import { World, TILE_NOT_ON_MAP } from '../world';
import { Camera } from '../camera';
import {
    Point2, Singleton, GameObject, Direction,
    CollisionDetection as BaseCollisionDetection
} from '../../shared';

export class CollisionDetection extends Singleton {

    /**
     * the hit test calculator
     */
    protected collisionDetection = BaseCollisionDetection
        .getInstance<BaseCollisionDetection>();

    /**
     * check if entities collides with the world
     *
     * @param world the world to check
     */
    public entitiesWithWorld(world: World): void {

        // get all tiles that are collidable by the world
        const collisionTiles = world.getTileMap().getCollidableTileNumbers();

        // world tile size to calculate the position on the map
        // as tile position
        const tileSize = Point2.from(
            world.getTileMap().getSize().x,
            world.getTileMap().getSize().y
        );

        // check if the position of the entity is realistic
        // there will be an antomatic position correction
        // if the entity is on an object that should collide with
        // the entity
        world.getEntities().forEach((entity: Entity) => {

            const tiles: number[] = [];

            // get the tile where the entity stands on
            const gameObjectMap: GameObject[] = [];
            const position = entity.getPosition()
                .divide(tileSize)
                .floor();

            // add tiles for all directions
            /**
             * X | X | X
             * X | E | X
             * X | X | X
             */
            gameObjectMap.push(
                new GameObject(
                    tileSize.x, tileSize.y,
                    position.add(Point2.from(1, 0))
                ),
                new GameObject(
                    tileSize.x, tileSize.y,
                    position.add(Point2.from(0, 1))
                ),
                new GameObject(
                    tileSize.x, tileSize.y,
                    position.add(Point2.from(0, -1))
                ),
                new GameObject(
                    tileSize.x, tileSize.y,
                    position.add(Point2.from(-1, 0))
                )/*,
                new GameObject(
                    tileSize.x, tileSize.y,
                    position.add(Point2.from(-1, -1))
                ),
                new GameObject(
                    tileSize.x, tileSize.y,
                    position.add(Point2.from(1, -1))
                ),
                new GameObject(
                    tileSize.x, tileSize.y,
                    position.add(Point2.from(1, 1))
                ),
                new GameObject(
                    tileSize.x, tileSize.y,
                    position.add(Point2.from(-1, 1))
                )*/
            );

            // check for collision detection
            gameObjectMap.forEach((object) => {

                // check if the tile is collidable
                const tileIsCollidable = world.getTileNumbersForPosition(
                    object.getPosition()
                ).filter((tileNumber) =>
                    // check world bounds with -2
                    collisionTiles.indexOf(tileNumber) !== -1 || tileNumber === TILE_NOT_ON_MAP
                    ).length > 0;

                if (!tileIsCollidable) return;

                // update tile position to fit the world entity position
                object.setPosition(
                    object.getPosition()
                        .multiply(tileSize)
                );

                // make a collision detection and restore position
                if (this.collisionDetection.hitTest(
                    entity, object
                )) entity.restorePreviousPosition();
            });

        });
    }
}
