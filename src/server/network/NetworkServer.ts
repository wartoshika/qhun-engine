import * as express from 'express';
import * as socketio from 'socket.io';

import { Log } from 'shared/log';

/**
 * the network base to use a client-server based structure
 * with websocket as transport protocol
 */
export class NetworkServer {

    /**
     * the servers socket
     */
    private socket: SocketIO.Server;

    /**
     *
     * @param application the application to bind the websocket
     */
    constructor(
        private application: express.Application
    ) {

        this.bindWebsocketToApplication();
    }

    /**
     * binds a websocket to the applications router
     */
    private bindWebsocketToApplication(): void {

        this.socket = socketio(this.application);
        Log.info("Websocket started");
    }
}