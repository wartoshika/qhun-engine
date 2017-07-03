/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Log, LogLevel } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

@suite("shared/log/Log")
class TestLog {

    @test "setLogLevel() should work correctly"() {

        Log.setLogLevel(LogLevel.Debug);
        expect(Log.getLogLevel()).to.eq(LogLevel.Debug);
    }
}