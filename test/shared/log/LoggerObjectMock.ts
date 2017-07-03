/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { LoggerObject } from '@shared';

/**
 * a mock logger object
 */
export class LoggerObjectMock implements LoggerObject {

    public debug(...args: any[]): void { }
    public info(...args: any[]): void { }
    public warn(...args: any[]): void { }
    public error(...args: any[]): void { }
}