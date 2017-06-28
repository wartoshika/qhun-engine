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
}