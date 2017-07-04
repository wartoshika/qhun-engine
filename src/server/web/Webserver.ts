/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

// need the index file in the build directory
require('file-loader?name=[name].[ext]!./index.html');

import * as http from 'http';
import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';

import { Log } from '../../shared/log';

/**
 * the buildin webserver to serve the client
 */
export class Webserver {

    private app: any;
    private httpServer: http.Server;

    /**
     * the logger instance
     */
    private logger = Log.getLogger(Webserver.name);

    constructor(
        listenAdress: string = "127.0.0.1",
        port: number = 3000,
        app: express.Application = express()
    ) {
        // setup server
        this.httpServer = http.createServer(app);

        // start listening
        this.httpServer.listen(port, listenAdress);
        this.logger.info("Listening at ", `${listenAdress}:${port}`);

        // handle http calls
        app.get('/*', this.serveApplication.bind(this));
    }

    /**
     * handles incomming file calls
     *
     * @param request
     * @param response
     */
    private serveApplication(
        request: any, response: express.Response
    ): void {

        // get the requested file from the request object
        let file = request.url;
        if (file === "/")
            file = "index.html";

        // @todo: do not serve the server.js file for security reasons!
        // get the file and send it back to the client
        let absolutePath = path.resolve(`./dist/${file}`);

        try {

            response.type(file.split('.').pop());
            response.send(fs.readFileSync(absolutePath));
        } catch (e) {

            response.sendStatus(404);
        }
    }

    /**
     * gets the current express application
     *
     * @return the passed through app at constructing time or a newly created app if no parameter was given during constructing
     */
    public getApplication(): express.Application {

        return this.app;
    }
}