/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * TestLog software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Log, LogLevel } from '@shared';

import { suite, test, context } from 'mocha-typescript';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { UnitTestContext } from '../../';

class TestPrefixClass { }

@suite("shared/log/Log")
class Test {

    context = new UnitTestContext();

    before() {

        // prepare the test
        let logger = Log.getInstance<Log>();
        logger.setLogLevel(LogLevel.Debug);

        // create context
        this.context = new UnitTestContext();

        // add the spies
        this.context.addSpy(console, 'debug');
        this.context.addSpy(console, 'info');
        this.context.addSpy(console, 'warn');
        this.context.addSpy(console, 'error');

        // add the logger
        this.context.add('logger', logger);
    }

    // after each
    after() {

        // reset log level
        this.context.get<Log>('logger').setLogLevel(LogLevel.Debug);

        // remove all spies
        this.context.removeAllSpies();
    }

    @test "setLogLevel() should work correctly"() {

        let log = this.context.get<Log>('logger');

        log.setLogLevel(LogLevel.Debug);
        expect(log.getLogLevel()).to.eq(LogLevel.Debug);
    }

    @test "debug() should log at debug level"() {

        // make a test log
        let log = this.context.get<Log>('logger');
        log.debug("test debug call");

        // spy should be called
        sinon.assert.called(this.context.getSpy(console, 'debug'));
        sinon.assert.notCalled(this.context.getSpy(console, 'info'));
        sinon.assert.notCalled(this.context.getSpy(console, 'warn'));
        sinon.assert.notCalled(this.context.getSpy(console, 'error'));
    }


    @test "info() should log at info level"() {

        // make a test log
        let log = this.context.get<Log>('logger');
        log.info("test info call");

        // spy should be called
        sinon.assert.called(this.context.getSpy(console, 'info'));
        sinon.assert.notCalled(this.context.getSpy(console, 'debug'));
        sinon.assert.notCalled(this.context.getSpy(console, 'warn'));
        sinon.assert.notCalled(this.context.getSpy(console, 'error'));
    }

    @test "warning() should log at warning level"() {

        // make a test log
        let log = this.context.get<Log>('logger');
        log.warning("test info call");

        // spy should be called
        sinon.assert.called(this.context.getSpy(console, 'warn'));
        sinon.assert.notCalled(this.context.getSpy(console, 'debug'));
        sinon.assert.notCalled(this.context.getSpy(console, 'info'));
        sinon.assert.notCalled(this.context.getSpy(console, 'error'));
    }

    @test "error() should log at error level"() {

        // make a test log
        let log = this.context.get<Log>('logger');
        log.error("test info call");

        // spy should be called
        sinon.assert.called(this.context.getSpy(console, 'error'));
        sinon.assert.notCalled(this.context.getSpy(console, 'debug'));
        sinon.assert.notCalled(this.context.getSpy(console, 'info'));
        sinon.assert.notCalled(this.context.getSpy(console, 'warn'));
    }

    @test "higher loglevel should not print lower level"() {

        // set higher log level
        let log = this.context.get<Log>('logger');
        log.setLogLevel(LogLevel.Info);

        // test call
        log.debug("test");

        // spy should not be called
        sinon.assert.notCalled(this.context.getSpy(console, 'debug'));
    }

    @test "prefixing should work"() {

        // test a log without prefixing
        let log = this.context.get<Log>('logger');
        log.info("infoText");

        // spy should be called
        sinon.assert.calledWithExactly(this.context.getSpy(console, 'info'), ...[
            `[${log.constructor.name}.Info]`,
            "infoText"
        ]);

        // log with prefix
        log.warning(TestPrefixClass, "test1", "test2");

        // check spy
        sinon.assert.calledWithExactly(this.context.getSpy(console, 'warn'), ...[
            `[${log.constructor.name}.Warning][${TestPrefixClass.name}]`,
            "test1", "test2"
        ]);

    }
}