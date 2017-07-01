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
export class Vector2D extends Dimension {

    /**
     *
     * @param x the x coordinate
     * @param y the y coordinate
     */
    constructor(
        x: number = 0,
        y: number = 0
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
            this.x + vector.x,
            this.y + vector.y
        );
    }

    /**
     * substract another vector
     *
     * @param vector the other vector
     */
    public substract(vector: Vector2D): Vector2D {

        return new Vector2D(
            this.x - vector.x,
            this.y - vector.y
        );
    }

    /**
     * divide another vector
     *
     * @param vector the other vector
     */
    public divide(vector: Vector2D): Vector2D {

        return new Vector2D(
            this.x / vector.x,
            this.y / vector.y
        );
    }

    /**
     * multiply two vectors
     *
     * @param vector the other vector
     */
    public multiply(vector: Vector2D): Vector2D {

        return new Vector2D(
            this.x * vector.x,
            this.y * vector.y
        );
    }

    /**
     * rounds the vector to a given precision
     */
    public round(precision: number = 2): Vector2D {

        return new Vector2D(
            Helper.roundToPrecision(this.x, precision),
            Helper.roundToPrecision(this.y, precision)
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
}