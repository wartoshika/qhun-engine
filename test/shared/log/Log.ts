/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Log, LogLevel } from '../../../src/shared/log';
import { expect } from 'chai';
import 'mocha';

describe('shared/log/Log.ts', () => {

    it('setLogLevel() should work correctly', () => {

        Log.setLogLevel(LogLevel.Debug);
        expect(Log.getLogLevel()).to.eq(LogLevel.Debug);
    });
});