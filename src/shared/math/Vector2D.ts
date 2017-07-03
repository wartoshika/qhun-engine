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
     *
     * @param x the x coordinate
     * @param y the y coordinate
     */
    constructor(
        x: T = <T>0,
        y: T = <T>0
    ) {
        super(x, y);
    }

    /**
     * helper method to get vector instances
     *
     * @param x the x value
     * @param y the y value. if no y value is present, x and y will come from x
     */
    public static from<T extends number = number>(x: T, y?: T): Vector2D<T> {

        return new Vector2D<T>(x, y !== undefined ? y : x);
    }

    /**
     * adds another vector
     *
     * @param vector the other vector
     */
    public add(vector: Vector2D<T>): Vector2D<T> {

        return new Vector2D<T>(
            <T>(this.x + vector.x),
            <T>(this.y + vector.y)
        );
    }

    /**
     * substract another vector
     *
     * @param vector the other vector
     */
    public substract(vector: Vector2D<T>): Vector2D<T> {

        return new Vector2D<T>(
            <T>(this.x - vector.x),
            <T>(this.y - vector.y)
        );
    }

    /**
     * divide another vector
     *
     * @param vector the other vector
     */
    public divide(vector: Vector2D<T>): Vector2D<T> {

        return new Vector2D<T>(
            <T>(this.x / vector.x),
            <T>(this.y / vector.y)
        );
    }

    /**
     * multiply two vectors
     *
     * @param vector the other vector
     */
    public multiply(vector: Vector2D<T>): Vector2D<T> {

        return new Vector2D<T>(
            <T>(this.x * vector.x),
            <T>(this.y * vector.y)
        );
    }

    /**
     * rounds the vector to a given precision
     */
    public round(precision: number = 2): Vector2D<T> {

        return new Vector2D<T>(
            <T>(Helper.roundToPrecision(this.x, precision)),
            <T>(Helper.roundToPrecision(this.y, precision))
        );
    }

    /**
     * calculates the distance of two vector points
     *
     * @param otherVector the other vector calculate to
     * @return the distance in pixel
     */
    public distanceToVector(otherVector: Vector2D<T>): number {

        return Math.sqrt(
            Math.pow((this.x - otherVector.x), 2)
            +
            Math.pow((this.y - otherVector.y), 2)
        );
    }

    /**
     * get the current vector divided by 2
     */
    public half(): Vector2D<T> {

        return this.divide(new Vector2D(2, 2));
    }

    /**
     * get the current vector multiply by 2
     */
    public double(): Vector2D<T> {

        return this.multiply(new Vector2D<T>(<T>2, <T>2));
    }

    /**
     * Math.abs() on x and y
     */
    public abs(): Vector2D<T> {

        return new Vector2D<T>(<T>Math.abs(this.x), <T>Math.abs(this.y));
    }
}