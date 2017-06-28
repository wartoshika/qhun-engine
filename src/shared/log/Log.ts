import { LogLevel } from './LogLevel';

/**
 * a log wrapper to allow log levels and a more complex
 * logging structure
 */
export class Log {

    // the current loglevel
    private static logLevel: LogLevel = LogLevel.Debug;

    /**
     * sets the log level for the application environment
     *
     * @param level the new log level
     */
    public static setLogLevel(level: LogLevel): void {

        Log.logLevel = level;
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

            case LogLevel.Debug: callback = console.debug; break;
            case LogLevel.Info: callback = console.info; break;
            case LogLevel.Warning: callback = console.warn; break;
            case LogLevel.Error: callback = console.error; break;
        }

        return callback;
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