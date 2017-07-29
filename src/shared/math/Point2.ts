/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Helper } from './Helper';

/**
 * represents a 2D point with x and y coordinates.
 */
export class Point2<T extends number = number> {

    /**
     * helper method to get point instances
     *
     * @param x the x value
     * @param y the y value. if no y value is present, x and y will come from x
     */
    public static from<StaticType extends number = number>(x: StaticType, y?: StaticType): Point2<StaticType> {

        return new Point2<StaticType>(x, y !== undefined ? y : x);
    }

    /**
     *
     * @param xVal the x coordinate
     * @param yVal the y coordinate
     */
    constructor(
        protected xVal: T = 0 as T,
        protected yVal: T = 0 as T
    ) { }

    get x(): T { return this.xVal; }
    set x(value: T) { this.xVal = value; }

    get y(): T { return this.yVal; }
    set y(value: T) { this.yVal = value; }

    /**
     * adds another point
     *
     * @param point the other point
     */
    public add(point: Point2): Point2 {

        return new Point2(
            (this.xVal as number + point.x) as T,
            (this.yVal as number + point.y) as T
        );
    }

    /**
     * substract another point
     *
     * @param point the other point
     */
    public substract(point: Point2): Point2 {

        return new Point2(
            (this.xVal as number - point.x) as T,
            (this.yVal as number - point.y) as T
        );
    }

    /**
     * divide another point
     *
     * @param point the other point
     */
    public divide(point: Point2): Point2 {

        return new Point2(
            (this.xVal as number / point.x) as T,
            (this.yVal as number / point.y) as T
        );
    }

    /**
     * multiply two points
     *
     * @param point the other point
     */
    public multiply(point: Point2): Point2 {

        return new Point2(
            (this.xVal as number * point.x) as T,
            (this.yVal as number * point.y) as T
        );
    }

    /**
     * rounds the point to a given precision
     */
    public round(precision: number = 2): Point2 {

        return new Point2(
            (Helper.roundToPrecision(this.xVal, precision)) as T,
            (Helper.roundToPrecision(this.yVal, precision)) as T
        );
    }

    /**
     * calculates the distance of two point points
     *
     * @param otherVector the other point calculate to
     * @return the distance in pixel
     */
    public distanceToVector(otherVector: Point2): number {

        return Math.sqrt(
            Math.pow((this.xVal as number - otherVector.x), 2)
            +
            Math.pow((this.yVal as number - otherVector.y), 2)
        );
    }

    /**
     * get the current point divided by 2
     */
    public half(): Point2 {

        return this.divide(Point2.from(2));
    }

    /**
     * get the current point multiply by 2
     */
    public double(): Point2 {

        return this.multiply(Point2.from(2));
    }

    /**
     * Math.abs() on x and y
     */
    public abs(): Point2 {

        return new Point2(Math.abs(this.xVal) as T, Math.abs(this.yVal) as T);
    }

    /**
     * clamps the given value to between min and max
     *
     * @param min the min value
     * @param max the max value
     */
    public clamp(min: Point2, max: Point2): Point2 {

        return Point2.from(
            Math.max(min.xVal, Math.min(max.xVal, this.xVal)),
            Math.max(min.yVal, Math.min(max.yVal, this.yVal))
        );
    }

    /**
     * floors both coordinates using Math.floor
     */
    public floor(): Point2 {

        return Point2.from(
            Math.floor(this.xVal),
            Math.floor(this.yVal)
        );
    }

    /**
     * ceil both coordinates using Math.ceil
     */
    public ceil(): Point2 {

        return Point2.from(
            Math.ceil(this.xVal),
            Math.ceil(this.yVal)
        );
    }
}
