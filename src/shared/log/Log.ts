/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { LogLevel } from './LogLevel';
import { Singleton } from '../helper/Singleton';
import { RamStorage } from '../storage/RamStorage';

/**
 * a log wrapper to allow log levels and a more complex
 * logging structure
 */
export class Log extends Singleton {

    /**
     * get the logger instance with prefixing for better
     * detection
     *
     * @param prefix the prefix string
     */
    public static getLogger(prefix?: string): Log {

        if (!RamStorage.has(this.generateStorageName(prefix))) {

            // get the constructor and store an instance of the class at the ram storage
            const constructor = this as any as { new(): Log };
            const logger = new constructor();
            logger.prefix = prefix;
            RamStorage.add(this.generateStorageName(prefix), logger);
        }

        // get the instance
        return RamStorage.get<Log>(this.generateStorageName(prefix));
    }

    /**
     * override the generate storage name method to allow prefixing the
     * log instance
     *
     * @param prefix the desired prefix
     */
    protected static generateStorageName(prefix?: string): string {

        return `singleton.instance.${this.name}.${prefix}`;
    }

    // the current loglevel
    protected logLevel: LogLevel = LogLevel.Debug;

    /**
     * the current log prefix
     */
    private prefix: string = '';

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
    public log(level: LogLevel, ...params: any[]): void {

        // log if the log level is ok
        if (
            parseInt(level as any, 10) >= parseInt(this.logLevel as any, 10)
            &&
            this.logLevel !== LogLevel.None
        ) {

            let prefix = '';
            if (this.prefix) {
                prefix = `[${this.prefix}]`;
            }

            this.getLogFunctionByLevel(level)(
                `[${this.constructor.name}.${LogLevel[level]}]${prefix}`, ...params
            );
        }
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
    public debug(...params: any[]): void {

        this.log(LogLevel.Debug, ...params);
    }

    /**
     * logs as info level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    public info(...params: any[]): void {

        this.log(LogLevel.Info, ...params);
    }

    /**
     * logs as warning level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    public warning(...params: any[]): void {

        this.log(LogLevel.Warning, ...params);
    }

    /**
     * logs as error level
     *
     * @param optionalPrefix if this is a constructor, the log will pre prefixed with its name. if not, the param will just printed
     * @param params all params as vararg array
     */
    public error(...params: any[]): void {

        this.log(LogLevel.Error, ...params);
    }

    /**
     * gets a callback function to log
     *
     * @param level the level to get the function from
     */
    protected getLogFunctionByLevel(level: LogLevel): () => void {

        let callback;

        // go through the different log levels
        switch (level) {

            case LogLevel.Debug: callback = console.debug; break;
            case LogLevel.Info: callback = console.info; break;
            case LogLevel.Warning: callback = console.warn; break;
            case LogLevel.Error: callback = console.error; break;
        }

        return callback;
    }
}
