/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as sinon from 'sinon';

/**
 * a wrapper class for sinon fake xhr because sinon can not respond with
 * a blob answer
 */
export class SinonFakeXhr {

    /**
     * all catched requests
     */
    private requests: sinon.SinonFakeXMLHttpRequest[] = [];

    /**
     * the fake xhr instance
     */
    private xhr: sinon.SinonFakeXMLHttpRequest;

    /**
     * binds the global xmlhttprequest to sinon
     */
    constructor() {

        this.xhr = sinon.useFakeXMLHttpRequest();
        (<any>global).XMLHttpRequest = this.xhr;

        // start recording
        this.recordRequests();
    }

    /**
     * restores the requests
     */
    public restoreXhr(): void {

        this.xhr.restore();
    }

    /**
     * begin recording the requests
     */
    public recordRequests(): void {

        // set up the request mock
        this.xhr.onCreate = (xhr: sinon.SinonFakeXMLHttpRequest) => {

            // stack the requests
            this.requests.push(xhr);
        };
    }

    /**
     * get all currently recorded requests
     */
    public getRequests(): sinon.SinonFakeXMLHttpRequest[] {

        return this.requests;
    }
}