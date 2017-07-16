/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { EventName } from './EventName';
import { Storage } from '../storage/Storage';
import { inject } from '../decorator/inject';

// the type for storing event listeners
interface EventListener {
    [eventName: string]: Array<() => any>;
}

/**
 * a class that can emit events and can add listeners to events
 */
export abstract class EventEmitter<E = EventName> {

    /**
     * the stack of events
     */
    private eventStack: EventListener = {};

    /**
     * listen on the given event
     *
     * @param event the desired event
     * @param listener the listener function
     */
    public on(event: E, listener: () => any): this {

        // create array context if not allready done
        if (!Array.isArray(this.eventStack[event as any])) {

            this.eventStack[event as any] = [];
        }

        // stack it up
        this.eventStack[event as any].push(listener);

        // chaning context
        return this;
    }

    /**
     * emit an event
     *
     * @param event the event name
     * @param listenerBoundContext this context of the executed function. default: null
     * @param args optional parameter to pass to the listener function
     */
    public emit(event: E, listenerBoundContext?: object, ...args: any[]): this {

        // is listeners defined?
        if (!this.eventStack[event as any]) {

            // cancel
            return this;
        }

        // get all functions for this event
        const eventFunctions = this.eventStack[event as any];

        // are there any?
        if (Array.isArray(eventFunctions)) {

            // execute them
            eventFunctions.forEach((ev: () => any) => {

                // take the context or no context
                if (!listenerBoundContext)
                    listenerBoundContext = {};

                // call it
                ev.apply(listenerBoundContext, args);
            });
        }

        // chaning context
        return this;
    }

    /**
     * get all registered listeners for the given event
     *
     * @param event the event to get the listeners for
     */
    public getListeners(event: E): Array<() => any> {

        // check if the event has listeners
        if (!this.eventStack) return [];
        else if (!this.eventStack[event as any]) return [];

        // return the listeners
        return this.eventStack[event as any];
    }
}
