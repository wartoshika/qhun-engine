/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { EventName } from './EventName';
import { RamStorage } from '../storage';

// the type for storing event listeners
interface EventListener {
    [eventName: string]: Array<() => any>;
}

/**
 * a class that can emit events and can add listeners to events
 */
export abstract class EventEmitter<E = EventName> {

    /**
     * listen on the given event
     *
     * @param event the desired event
     * @param listener the listener function
     */
    public on(event: E, listener: () => any): this {

        // first get all listeners
        let listeners = RamStorage.get<EventListener>(EventEmitter.name);

        // check if listeners is defined
        if (!listeners) {
            listeners = {};
        }

        // create array context if not allready done
        if (!Array.isArray(listeners[event as any])) {

            listeners[event as any] = [];
        }

        // stack it up
        listeners[event as any].push(listener);

        // save it back to the storage
        RamStorage.add(EventEmitter.name, listeners);

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

        // get all listeners for this event
        const listeners = RamStorage.get<EventListener>(EventEmitter.name);

        // is listeners defined?
        if (!listeners) {

            // cancel
            return this;
        }

        // get all functions for this event
        const eventFunctions = listeners[event as any];

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

        // get all listeners from the storage
        const listeners = RamStorage.get<EventListener>(EventEmitter.name);

        // check if the event has listeners
        if (!listeners) return [];
        else if (!listeners[event as any]) return [];

        // return the listeners
        return listeners[event as any];
    }
}
