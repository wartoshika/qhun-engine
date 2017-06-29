import { Webserver } from 'server/web';
import { NetworkServer } from 'server/network';
import { ServerConfig } from 'ServerConfig';
import { LogLevel, Log } from 'shared/log';

/**
 * the game server main class. loads all important things
 * and also provides a buildin webserver to serve the app
 */
export class Server {

    private webserver: Webserver;
    private network: NetworkServer;

    constructor(
        private serverConfig: ServerConfig
    ) {

        // set the log level
        Log.setLogLevel(serverConfig.logLevel);

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
new Server({
    webAdress: '127.0.0.1',
    webPort: 3000,
    logLevel: LogLevel.Debug
});