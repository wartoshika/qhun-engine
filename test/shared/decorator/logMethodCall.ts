/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { logMethodCall, Log } from '@shared';

import { suite, test, context } from 'mocha-typescript';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { LoggerObjectMock } from '../log/LoggerObjectMock';

// stub class
class StubClass {

    @logMethodCall
    public test(): void { }
}

@suite("shared/decorator/logMethodCall")
class TestLogMethodCall {

    @context static callSpy: sinon.SinonSpy;

    // set up a spy
    static before() {

        // set the mock
        let mock = new LoggerObjectMock();
        Log.overrideLoggerObject(mock);

        // debug log should be printed
        TestLogMethodCall.callSpy = sinon.spy(mock, 'debug');
    }

    after() {

        // restore the spy
        TestLogMethodCall.callSpy.restore();
    }

    @test "@logMethodCall() should log the call"() {

        // check the call
        let stub = new StubClass();

        // log should not occured here
        expect(TestLogMethodCall.callSpy.notCalled)

        // call the decorated method
        stub.test();

        // log should be done
        expect(TestLogMethodCall.callSpy.called);
    }
}