import { LogLevel } from 'shared/log';

/**
 * provides a basic interface for the server config
 */
export interface ServerConfig {

    /**
     * the listen adress for the buildin webserver
     */
    webAdress?: string;

    /**
     * the port of the buildin webserver
     */
    webPort?: number;

    /**
     * the desired log level
     */
    logLevel?: LogLevel;
}