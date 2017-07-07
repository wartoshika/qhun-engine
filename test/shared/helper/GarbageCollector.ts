/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
    EventName, EventEmitter, GarbageCollector, RamStorage,
    collectGargabe, Log
} from '@shared';

import { suite, test, context } from 'mocha-typescript';
import { expect } from 'chai';
import * as sinon from 'sinon';

import { UnitTestContext } from '../../';

@suite("shared/helper/GarbageCollector")
class Test {

    gc: GarbageCollector;
    context: UnitTestContext;

    before() {

        // clear the ram storage to have an empty event list
        RamStorage.clear();

        this.gc = GarbageCollector.getInstance<GarbageCollector>();
        this.context = new UnitTestContext();
    }

    @test "should listen to add available events during constructing"() {

        // count the listen events with the EventName enum.
        let expectedListeners = Object.keys(EventName).length;

        // lets check all events
        let registeredListeners = 0;
        Object.keys(EventName).forEach(eventKey => {

            registeredListeners += this.gc.getListeners(<any>eventKey).length;
        });

        // check the amounts
        expect(expectedListeners).to.eq(registeredListeners);
    }

    @test "should warn about executing a cleanTask with no registered target"() {

        // a small stub class for this test case
        class StubGcClass extends EventEmitter {

            @collectGargabe(EventName.AfterLoaded)
            public testProperty: any[] = [];
        }

        let stub = new StubGcClass();

        // get the logger for the gc
        let gcLogger = Log.getLogger(GarbageCollector.name);

        // class has no decorator for @enableGarbageCollection so
        // when executing the event registered by @collectGarbate()
        // the gc should warn!
        this.context.addSpy(gcLogger, "warning");

        // emit the registered event
        stub.emit(EventName.AfterLoaded);

        // warning should have been called!
        sinon.assert.called(this.context.getSpy(gcLogger, "warning"));
    }
}