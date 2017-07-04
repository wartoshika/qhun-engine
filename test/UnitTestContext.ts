/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as sinon from 'sinon';
import { context } from 'mocha-typescript';

interface InlineSpy {
    target: object,
    func: string,
}

interface DefinedSpy extends InlineSpy {
    restore: sinon.SinonSpy
}

/**
 * a unit test base class
 */
export class UnitTestContext {

    // the private context save storage
    @context
    private objectStore: { [index: string]: any } = {};

    // the registered spies in the context
    @context
    private spies: DefinedSpy[] = [];

    /**
     * add a var to the class context
     *
     * @param name the name, important to get it later
     * @param obj the object to store
     */
    public add(name: string, obj: any): void {

        this.objectStore[name] = obj;
    }

    /**
     * get a var from the context
     *
     * @param name the name
     */
    public get<T = any>(name: string): T {

        return <T>this.objectStore[name];
    }

    /**
     * creates a sinon spy on the target object and watches the function
     *
     * @param target the object to spy on
     * @param func the function name to spy on (do not work for static functions)
     */
    public addSpy(target: object, func: string): void {

        // spy on the target
        let newSpyFunction = sinon.stub(target, func);

        // save the spie
        if (newSpyFunction)
            this.spies.push({
                target: target,
                func: func,
                restore: newSpyFunction
            });
    }

    /**
     * get a sinon spy from a spied object
     *
     * @param target the spied object
     * @param func the spied function name
     */
    public getSpy(target: { [func: string]: any }, func: string): sinon.SinonSpy {

        // check if the object is a spy
        let spy = this.spies.find(spy => spy.target === target && spy.func === func);

        // does the spy exist
        if (!spy) {
            throw 'Never spied on function ' + func;
        }

        // cast the spy
        return <sinon.SinonSpy>(<any>spy.target)[spy.func];
    }

    /**
     * remove the given spies
     *
     * @param spies the spies to remove
     */
    public removeSpy(...spies: InlineSpy[]): void {

        // restore all
        spies.forEach(spy => {

            // find defined spy
            spy = this.spies.find(s => s.target === spy.target && s.func === spy.func);

            // parse the target
            let target = (<any>spy.target)[spy.func];

            // check if the restore function is available
            if (typeof target['restore'] === 'function') {

                // restore using it dedicated function
                target['restore']();
            } else {

                // restore using the original function
                (<any>spy.target)[spy.func] = (<DefinedSpy>spy).restore;
            }
        });
    }

    /**
     * removes all spies from this text
     */
    public removeAllSpies(): void {

        this.removeSpy(...this.spies);
    }

}