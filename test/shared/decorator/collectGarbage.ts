/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import {
    collectGargabe, EventName, EventEmitter,
    Singleton, enableGarbageCollection
} from '@shared';

import { suite, test, context } from 'mocha-typescript';
import { expect } from 'chai';
import * as sinon from 'sinon';

// stub class
@enableGarbageCollection
class StubClass {

    @collectGargabe(EventName.BeforePreload, [])
    public heavyProperty: any[] = ["test", true];
}

// event fireing class
class TestEventEmitter extends EventEmitter {

    public fireBeforePreloadEvent() {
        this.emit(EventName.BeforePreload);
    }
}

@suite("shared/decorator/collectGargabe")
class Test {

    @test "should clear the value on the specified event"() {

        // init the event emitter and stub class
        let emitter = new TestEventEmitter();
        let stub = new StubClass();

        // check if the property still has its values
        expect(stub.heavyProperty.length).to.eq(2);

        // fire garbage collection event
        emitter.fireBeforePreloadEvent();

        // the value should be now empty array
        expect(Array.isArray(stub.heavyProperty)).to.be.true;
        expect(stub.heavyProperty.length).to.eq(0);

    }
}