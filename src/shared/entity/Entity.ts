/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Point2 } from '../math';
import { Direction } from '../helper';
import { OnDirectionChange } from './OnDirectionChange';
import { GameObject } from './GameObject';
import { GenericEventEmitter, EventName } from '../event';

/**
 * the base class for all game entities
 */
export abstract class Entity extends GameObject {

    /**
     * the last known entity walking direction
     */
    private lastDirection: Direction = Direction.Unknown;

    /**
     * the position that should be translated during game update
     */
    private translatingPosition: Point2 = Point2.from(0);

    /**
     * the generic event emitter
     */
    private eventEmitter = GenericEventEmitter.getInstance<GenericEventEmitter>();

    constructor(
        entityWidth: number = 0,
        entityHeight: number = 0,
        position: Point2 = new Point2(0, 0)
    ) {

        super(entityWidth, entityHeight, position);

        // check if the entity implements OnEntityDirectionChange
        const chkImplDirChange = typeof (this as any as OnDirectionChange)
            .onDirectionChange === 'function';

        // check impls
        if (chkImplDirChange)
            this.eventEmitter.on(EventName.OnDirectionChange,
                (entity: Entity, newDirection: Direction) => {

                    // if it is this entity
                    if (entity !== this) return;

                    // fire impl function
                    (this as any as OnDirectionChange)
                        .onDirectionChange(newDirection);
                }
            );

    }

    /**
     * changes the position of the position by applying
     * a point addition
     *
     * @param positionTranslation
     * @param positionTranslationY
     */
    public translatePosition(
        positionTranslation: Point2 | number,
        positionTranslationY?: number
    ): void {

        // number given?
        if (isFinite(positionTranslation as number)) {

            positionTranslation = Point2.from(
                positionTranslation as number, positionTranslationY
            );
        }

        // add the position
        this.translatingPosition = this.translatingPosition.add(positionTranslation as Point2);
    }

    /**
     * get the position to translate during the next game update
     */
    public getTranslatingPosition(): Point2 {

        return this.translatingPosition;
    }

    /**
     * reset the translating position to 0,0
     */
    public resetTranslatePositon(): void {

        this.translatingPosition = Point2.from(0);
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
            EventName.OnDirectionChange,
            this, this, direction
        );
    }
}
