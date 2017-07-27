/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { LogMethodCall, Log, LogLevel } from '@shared';

import { suite, test, context } from 'mocha-typescript';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { UnitTestContext } from '../../';

// stub class
class StubClass {

    @LogMethodCall
    public test(): void { }
}

@suite("shared/decorator/LogMethodCall")
class Test {

    context: UnitTestContext;

    // set up a spy
    before() {

        // prepare the suite
        this.context = new UnitTestContext();
        let logger = Log.getLogger();
        logger.setLogLevel(LogLevel.Debug);

        // bind context
        this.context.add('logger', logger);

        // add the spies
        this.context.addSpy(console, 'debug');
    }

    after() {

        // restore the spy
        this.context.removeAllSpies();
    }

    @test "@LogMethodCall() should log the call"() {

        // check the call
        let stub = new StubClass();

        // log should not occured here
        sinon.assert.notCalled(this.context.getSpy(console, 'debug'));

        // call the decorated method
        stub.test();

        // log should be done
        sinon.assert.called(this.context.getSpy(console, 'debug'));
    }
}