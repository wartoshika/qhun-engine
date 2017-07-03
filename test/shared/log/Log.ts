/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * TestLog software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Log, LogLevel, LoggerObject } from '@shared';

import { suite, test, context } from 'mocha-typescript';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { LoggerObjectMock } from './LoggerObjectMock';

@suite("shared/log/Log")
class TestLog {

    @context static debugSpy: sinon.SinonSpy;
    @context static infoSpy: sinon.SinonSpy;
    @context static warningSpy: sinon.SinonSpy;
    @context static errorSpy: sinon.SinonSpy;

    // before all
    static before() {

        // debug level
        Log.setLogLevel(LogLevel.Debug);

        // set the mock
        let mock = new LoggerObjectMock();
        Log.overrideLoggerObject(mock);

        // set up the spies on the mock
        TestLog.debugSpy = sinon.spy(mock, 'debug');
        TestLog.infoSpy = sinon.spy(mock, 'info');
        TestLog.warningSpy = sinon.spy(mock, 'warn');
        TestLog.errorSpy = sinon.spy(mock, 'error');
    }

    // after each
    after() {

        TestLog.debugSpy.restore();
        TestLog.infoSpy.restore();
        TestLog.warningSpy.restore();
        TestLog.errorSpy.restore();
    }

    @test "setLogLevel() should work correctly"() {

        Log.setLogLevel(LogLevel.Debug);
        expect(Log.getLogLevel()).to.eq(LogLevel.Debug);
    }

    @test "debug() should log at debug level"() {

        Log.debug("test");
        expect(TestLog.debugSpy.called, "debug message was not printed");

        expect(TestLog.infoSpy.notCalled);
        expect(TestLog.warningSpy.notCalled);
        expect(TestLog.errorSpy.notCalled);
    }

    @test "info() should log at info level"() {

        Log.info("test");
        expect(TestLog.infoSpy.called, "info message was not printed");

        expect(TestLog.debugSpy.notCalled);
        expect(TestLog.warningSpy.notCalled);
        expect(TestLog.errorSpy.notCalled);
    }

    @test "warning() should log at warning level"() {

        Log.warning("test");
        expect(TestLog.warningSpy.called, "warning message was not printed");

        expect(TestLog.debugSpy.notCalled);
        expect(TestLog.infoSpy.notCalled);
        expect(TestLog.errorSpy.notCalled);
    }

    @test "error() should log at error level"() {

        Log.error("test");
        expect(TestLog.errorSpy.called, "error message was not printed");

        expect(TestLog.debugSpy.notCalled);
        expect(TestLog.infoSpy.notCalled);
        expect(TestLog.warningSpy.notCalled);
    }

    @test "higher loglevel should not print lower level"() {

        // set higher log level
        Log.setLogLevel(LogLevel.Info);

        Log.debug("test");
        expect(TestLog.debugSpy.notCalled, "debug called but there is a higher loglevel");
    }
}