/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { LogLevel } from './LogLevel';

/**
 * a generic logger object
 */
export interface LoggerObject {

    debug: (...args: any[]) => void;
    info: (...args: any[]) => void;
    warn: (...args: any[]) => void;
    error: (...args: any[]) => void;
}

/**
 * a log wrapper to allow log levels and a more complex
 * logging structure
 */
export class Log {

    // the current loglevel
    private static logLevel: LogLevel = LogLevel.Debug;

    // the logger object
    private static loggerObject: LoggerObject = console;

    /**
     * sets the log level for the application environment
     *
     * @param level the new log level
     */
    public static setLogLevel(level: LogLevel): void {

        Log.logLevel = level;
    }

    /**
     * override the current logger object
     *
     * @param object the new logger object
     */
    public static overrideLoggerObject(object: LoggerObject): void {

        Log.loggerObject = object;
    }

    /**
     * logs the given data
     *
     * @param level the level to log in
     * @param params all params as vararg array
     */
    public static log(level: LogLevel, ...params: any[]): void {

        // log if the log level is ok
        if (parseInt(<any>level) >= parseInt(<any>Log.logLevel)) {

            // level ok, log
            Log.getLogFunctionByLevel(level)(
                `[Log.${LogLevel[level]}]`, ...params
            );
        }
    }

    /**
     * gets a callback function to log
     *
     * @param level the level to get the function from
     */
    private static getLogFunctionByLevel(level: LogLevel): Function {

        let callback = () => { };

        // go through the different log levels
        switch (level) {

            case LogLevel.Debug: callback = Log.loggerObject.debug; break;
            case LogLevel.Info: callback = Log.loggerObject.info; break;
            case LogLevel.Warning: callback = Log.loggerObject.warn; break;
            case LogLevel.Error: callback = Log.loggerObject.error; break;
        }

        return callback;
    }

    /**
     * get the current log level
     */
    public static getLogLevel(): LogLevel {

        return Log.logLevel;
    }

    /**
     * logs as debug level
     *
     * @param params all params as vararg array
     */
    public static debug(...params: any[]): void {

        Log.log(LogLevel.Debug, ...params);
    }

    /**
     * logs as info level
     *
     * @param params all params as vararg array
     */
    public static info(...params: any[]): void {

        Log.log(LogLevel.Info, ...params);
    }

    /**
     * logs as warning level
     *
     * @param params all params as vararg array
     */
    public static warning(...params: any[]): void {

        Log.log(LogLevel.Warning, ...params);
    }

    /**
     * logs as error level
     *
     * @param params all params as vararg array
     */
    public static error(...params: any[]): void {

        Log.log(LogLevel.Error, ...params);
    }
}