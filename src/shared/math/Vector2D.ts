/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Helper } from './Helper';
import { Dimension } from './Dimension';

/**
 * represents a 2D vector with x and y coordinates.
 */
export class Vector2D<T extends number = number> extends Dimension {

    /**
     * helper method to get vector instances
     *
     * @param x the x value
     * @param y the y value. if no y value is present, x and y will come from x
     */
    public static from<StaticType extends number = number>(x: StaticType, y?: StaticType): Vector2D<StaticType> {

        return new Vector2D<StaticType>(x, y !== undefined ? y : x);
    }

    /**
     *
     * @param x the x coordinate
     * @param y the y coordinate
     */
    constructor(
        x: T = 0 as T,
        y: T = 0 as T
    ) {
        super(x, y);
    }

    /**
     * adds another vector
     *
     * @param vector the other vector
     */
    public add(vector: Vector2D): Vector2D {

        return new Vector2D(
            (this.x + vector.x) as T,
            (this.y + vector.y) as T
        );
    }

    /**
     * substract another vector
     *
     * @param vector the other vector
     */
    public substract(vector: Vector2D): Vector2D {

        return new Vector2D(
            (this.x - vector.x) as T,
            (this.y - vector.y) as T
        );
    }

    /**
     * divide another vector
     *
     * @param vector the other vector
     */
    public divide(vector: Vector2D): Vector2D {

        return new Vector2D(
            (this.x / vector.x) as T,
            (this.y / vector.y) as T
        );
    }

    /**
     * multiply two vectors
     *
     * @param vector the other vector
     */
    public multiply(vector: Vector2D): Vector2D {

        return new Vector2D(
            (this.x * vector.x) as T,
            (this.y * vector.y) as T
        );
    }

    /**
     * rounds the vector to a given precision
     */
    public round(precision: number = 2): Vector2D {

        return new Vector2D(
            (Helper.roundToPrecision(this.x, precision)) as T,
            (Helper.roundToPrecision(this.y, precision)) as T
        );
    }

    /**
     * calculates the distance of two vector points
     *
     * @param otherVector the other vector calculate to
     * @return the distance in pixel
     */
    public distanceToVector(otherVector: Vector2D): number {

        return Math.sqrt(
            Math.pow((this.x - otherVector.x), 2)
            +
            Math.pow((this.y - otherVector.y), 2)
        );
    }

    /**
     * get the current vector divided by 2
     */
    public half(): Vector2D {

        return this.divide(new Vector2D(2, 2));
    }

    /**
     * get the current vector multiply by 2
     */
    public double(): Vector2D {

        return this.multiply(new Vector2D(2 as T, 2 as T));
    }

    /**
     * Math.abs() on x and y
     */
    public abs(): Vector2D {

        return new Vector2D(Math.abs(this.x) as T, Math.abs(this.y) as T);
    }
}
