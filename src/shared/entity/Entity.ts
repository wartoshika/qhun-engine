/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Vector2D } from '../math';
import { Direction } from '../helper';
import { OnEntityDirectionChange } from '../entity';
import { GenericEventEmitter, EventName } from '../event';

/**
 * the base class for all game entities
 */
export abstract class Entity {

    /**
     * the last known entity walking direction
     */
    private lastDirection: Direction = Direction.Unknown;

    /**
     * the position that should be translated during game update
     */
    private translatingPosition: Vector2D = Vector2D.from(0);

    /**
     * the generic event emitter
     */
    private eventEmitter = GenericEventEmitter.getInstance<GenericEventEmitter>();

    constructor(
        protected entityWidth: number = 0,
        protected entityHeight: number = 0,
        protected position: Vector2D = new Vector2D(0, 0)
    ) {

        // check if the entity implements OnEntityDirectionChange
        const chkImplDirChange = typeof (this as any as OnEntityDirectionChange)
            .onEntityDirectionChange === 'function';

        // check impls
        if (chkImplDirChange)
            this.eventEmitter.on(EventName.OnEntityDirectionChange,
                (entity: Entity, newDirection: Direction) => {

                    // if it is this entity
                    if (entity !== this) return;

                    // fire impl function
                    (this as any as OnEntityDirectionChange)
                        .onEntityDirectionChange(newDirection);
                }
            );

    }

    /**
     * get the width of the entity
     */
    public getWidth(): number {

        return this.entityWidth;
    }

    /**
     * get the height of the entity
     */
    public getHeight(): number {

        return this.entityHeight;
    }

    /**
     * get the current position of the entity ( top left )
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

    /**
     * changes the position of the position by applying
     * a vector addition
     *
     * @param positionTranslation
     * @param positionTranslationY
     */
    public translatePosition(
        positionTranslation: Vector2D | number,
        positionTranslationY?: number
    ): void {

        // number given?
        if (isFinite(positionTranslation as number)) {

            positionTranslation = Vector2D.from(
                positionTranslation as number, positionTranslationY
            );
        }

        // add the position
        this.translatingPosition = this.translatingPosition.add(positionTranslation as Vector2D);
    }

    /**
     * get the position to translate during the next game update
     */
    public getTranslatingPosition(): Vector2D {

        return this.translatingPosition;
    }

    /**
     * reset the translating position to 0,0
     */
    public resetTranslatePositon(): void {

        this.translatingPosition = Vector2D.from(0);
    }

    /**
     * get the last known direction of the entity
     */
    public getLastKnownDirection(): Direction {

        return this.lastDirection;
    }

    /**
     * set the last looking entity direction
     *
     * @param direction the direction to set
     */
    public setLastKnownDirection(direction: Direction): void {

        this.lastDirection = direction;

        // trigger event
        this.eventEmitter.emit(
            EventName.OnEntityDirectionChange,
            this, this, direction
        );
    }
}
