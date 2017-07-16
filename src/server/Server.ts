/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Webserver } from './web';
import { NetworkServer } from './network';
import { ServerConfig } from './ServerConfig';
import { LogLevel, Log } from '../shared';

/**
 * the game server main class. loads all important things
 * and also provides a buildin webserver to serve the app
 */
export class Server {

    private webserver: Webserver;
    private network: NetworkServer;

    /**
     * logger instance
     */
    private logger = Log.getLogger(Server.name);

    constructor(
        private serverConfig: ServerConfig
    ) {

        // set the log level
        this.logger.setLogLevel(serverConfig.logLevel);

        // start the webserver
        this.webserver = new Webserver(
            serverConfig.webAdress,
            serverConfig.webPort
        );

        // start network
        this.network = new NetworkServer(
            this.webserver.getApplication()
        );
    }
}

// start the webserver
const server = new Server({
    webAdress: '127.0.0.1',
    webPort: 3000,
    logLevel: LogLevel.Debug
});
