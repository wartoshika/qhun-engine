/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton } from './Singleton';
import { EventName } from '../event/EventName';
import { Log } from '../log/Log';

interface CleanTask {
    event: EventName;
    ctor: () => any;
    callbackArguments?: string[];
    cleanFunction(targets: object[], ...callbackArguments: string[]): void;
}

/**
 * an internal garbage collector class to clear some memory for the
 * user.
 */
export class GarbageCollector extends Singleton {

    /**
     * holder of all registered targets for cleaning
     */
    private registeredTargets: {
        [constructorName: string]: object[]
    } = {};

    /**
     * the stack of all registered garbage collection processes
     */
    private registerStack: CleanTask[] = [];

    /**
     * the logger instance
     */
    private logger = Log.getLogger(GarbageCollector.name);

    constructor() {

        super();

        // register all events
        Object.keys(EventName).forEach((event) => {

            // register event and execute the cleaning
            const eventEnum = event as any as EventName;

            // register the event
            this.on(eventEnum, this.executeEvent.bind(this, eventEnum));
        });

        // bind instance
        GarbageCollector.bindInstance(this);
    }

    /**
     * register a property to be cleaned if a specific event occurs
     *
     * @param cleaning the nessesary objects to clean something
     */
    public registerCleaning(cleaning: CleanTask) {

        this.registerStack.push(cleaning);
    }

    /**
     *
     * @param ctorName the constructor name of the class
     * @param target the target class as instance
     */
    public addTarget(ctorName: string, target: object): void {

        if (!Array.isArray(this.registeredTargets[ctorName])) {

            this.registeredTargets[ctorName] = [];
        }

        this.registeredTargets[ctorName].push(target);
    }

    /**
     * get all targets by its constructor function
     */
    private getTargets(cleanTask: CleanTask): object[] {

        // no targets available?
        if (!this.registeredTargets[cleanTask.ctor.name]) {

            // log a warning message
            this.logger.warning(
                'Trying to clean at class', cleanTask.ctor.name,
                'but there aren\'t any registered targets.',
                'Please be sure you decorated the class with @enableGarbageCollection'
            );

            // no targets found!
            return [];
        }

        // get all of them!
        return this.registeredTargets[cleanTask.ctor.name];
    }

    /**
     * execute the garbage collector at the given event
     */
    private executeEvent(eventName: EventName): void {

        this.registerStack
            .filter((clean) => clean.event === eventName)
            .forEach((clean) => clean
                // call clear function for every listener
                .cleanFunction(
                // get all targets to clear
                this.getTargets(clean),
                // pass the callback args to the function if available
                ...(clean.callbackArguments ? clean.callbackArguments : [])
                ));
    }
}
