/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

/**
 * the newton units as seperate type for a better readabillity
 */
export declare type newtons = number;

/**
 * simple math helper class
 */
export class Helper {

    /**
     * calculates a random degree
     */
    public static randomDegree(): number {

        return Math.floor(Math.random() * 359) + 1;
    }

    /**
     * transforms a degree number to radian number
     *
     * @param degree the given degree
     */
    public static degreeToRadian(degree: number): number {

        return degree * Math.PI / 180;
    }

    /**
     * transforms a radian number to degree
     *
     * @param radian the radian value
     */
    public static radianToDegree(radian: number): number {

        return radian * (180 / Math.PI);
    }

    /**
     * rounds to a given precision
     *
     * @param number the number to round
     * @param precision the precision
     */
    public static roundToPrecision(number: number, precision: number = 2): number {

        return +number.toFixed(precision);
    }

    /**
     * converts mass to newtons based on a given force
     *
     * @param mass the mass of the object
     * @param force the gravity force
     */
    public static massToWeight(mass: number, force: number): newtons {

        return mass * force;
    }
}