/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { LogLevel } from './LogLevel';
import { Singleton } from '../helper/Singleton';

/**
 * a log wrapper to allow log levels and a more complex
 * logging structure
 */
export class Log extends Singleton {

    // the current loglevel
    protected logLevel: LogLevel = LogLevel.Debug;

    /**
     * sets the log level for the application environment
     *
     * @param level the new log level
     */
    public setLogLevel(level: LogLevel): void {

        this.logLevel = level;
    }

    /**
     * logs the given data
     *
     * @param level the level to log in
     * @param optionalPrefix the optional prefix
     * @param params all params as vararg array
     */
    public log(level: LogLevel, optionalPrefix: new () => any | any, ...params: any[]): void {

        // log if the log level is ok
        if (parseInt(<any>level) >= parseInt(<any>this.logLevel)) {

            // empty prefix
            let prefix = "";

            // level ok, now check if there should be a prefix
            if (typeof optionalPrefix === 'function' && optionalPrefix.name !== 'function') {

                // set the prefix
                prefix = "[" + optionalPrefix.name + "]";
            } else {

                // add this param to the normal param stack
                params.push(optionalPrefix);
            }

            this.getLogFunctionByLevel(level)(
                `[${this.constructor.name}.${LogLevel[level]}]${prefix}`, ...params
            );
        }
    }

    /**
     * gets a callback function to log
     *
     * @param level the level to get the function from
     */
    protected getLogFunctionByLevel(level: LogLevel): Function {

        let callback = () => { };

        // go through the different log levels
        switch (level) {

            case LogLevel.Debug: callback = console.debug; break;
            case LogLevel.Info: callback = console.info; break;
            case LogLevel.Warning: callback = console.warn; break;
            case LogLevel.Error: callback = console.error; break;
        }

        return callback;
    }

    /**
     * get the current log level
     */
    public getLogLevel(): LogLevel {

        return this.logLevel;
    }

    /**
     * logs as debug level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    public debug(optionalPrefix?: any, ...params: any[]): void {

        this.log(LogLevel.Debug, optionalPrefix, ...params);
    }

    /**
     * logs as info level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    public info(optionalPrefix?: any, ...params: any[]): void {

        this.log(LogLevel.Info, optionalPrefix, ...params);
    }

    /**
     * logs as warning level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    public warning(optionalPrefix?: any, ...params: any[]): void {

        this.log(LogLevel.Warning, optionalPrefix, ...params);
    }

    /**
     * logs as error level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    public error(optionalPrefix?: any, ...params: any[]): void {

        this.log(LogLevel.Error, optionalPrefix, ...params);
    }
}