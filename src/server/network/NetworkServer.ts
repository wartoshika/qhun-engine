/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as express from 'express';
import * as socketio from 'socket.io';

import { Log } from '../../shared/log';

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

        // init websocket and bind to application
        this.socket = socketio(this.application);
        Log.info("Websocket started");
    }

    /**
     * binds a callback function to an event of socketio
     *
     * @param eventName the event name you choose between server and client
     * @param callback a function executed on event occur
     */
    public bindEvent(eventName: string, callback: Function): void {

        // pass this to socketio
        this.socket.on(eventName, callback);
    }

    /**
     * bind a callback to a new connecting player
     *
     * @param callback the handler function
     */
    public bindNewConnectionEvent(callback: (socket: SocketIO.Socket) => void): void {

        // pass this event to socketio
        this.socket.on("connection", callback);
    }
}