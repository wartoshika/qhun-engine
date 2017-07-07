/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { EventEmitter, RamStorage } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

// a custum evnt enumeration because EventEmitter is generic
enum CustomEvent {
    CoolEvent, BetterEvent, BestEvent
}

// stub class impl. for event emitter
class StubEventEmitter extends EventEmitter<CustomEvent> { }

@suite("shared/event/EventEmitter")
class TestEntity {

    emitter: StubEventEmitter;

    before() {

        // clear all events in the storage
        RamStorage.clear();

        this.emitter = new StubEventEmitter();
    }

    @test "should be able to add listeners to events"() {

        // add some listeners
        this.emitter.on(CustomEvent.CoolEvent, () => { });
        this.emitter.on(CustomEvent.BetterEvent, () => { });
        this.emitter.on(CustomEvent.BetterEvent, () => { });
        this.emitter.on(CustomEvent.BestEvent, () => { });

        // count the events
        expect(this.emitter.getListeners(CustomEvent.CoolEvent).length).to.eq(1);
        expect(this.emitter.getListeners(CustomEvent.BetterEvent).length).to.eq(2);
        expect(this.emitter.getListeners(CustomEvent.BestEvent).length).to.eq(1);
    }

    @test async "should be able to emit a registered event"(done: Function) {

        // register an event
        this.emitter.on(CustomEvent.CoolEvent, () => {

            // event emitted, done!
            done();
        });

        // emit it
        this.emitter.emit(CustomEvent.CoolEvent);
    }

    @test "should work with no registered listeners"() {

        // get listeners should be zero
        expect(this.emitter.getListeners(CustomEvent.CoolEvent).length).to.eq(0);

        // just emit, done register any events
        this.emitter.emit(CustomEvent.CoolEvent);
    }

    @test "registering other events and fire a non registered one should work"() {

        this.emitter.on(CustomEvent.CoolEvent, () => {

            // if this statement is reached, the wrong event was fired!
            expect(false, "wrong event emitted").to.be.true;
        });
        expect(this.emitter.getListeners(CustomEvent.BetterEvent).length).to.eq(0);

        // fire the event, should work without error
        this.emitter.emit(CustomEvent.BetterEvent);
    }

    @test "emit an event with a special function bound context"() {

        // the context to add to the function
        let context = {
            test: true
        };

        // es5 function declaration is required for a bound context!
        let callback = function() {

            // if this callback is fired, the context variable should be
            // the this context
            expect((<any>this).test).to.be.true;
        };

        // register an event
        this.emitter.on(CustomEvent.BestEvent, callback);

        // emit the event
        this.emitter.emit(CustomEvent.BestEvent, context);
    }
}