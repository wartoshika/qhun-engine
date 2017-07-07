/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { enableGarbageCollection, GarbageCollector, Singleton } from '@shared';

import { suite, test, context } from 'mocha-typescript';
import { expect } from 'chai';

// stub class with decorator
@enableGarbageCollection
class GcClass { }

// stub class without decorator
class NonGcClass { }

class GcClassSuper extends Singleton { }

@suite("shared/decorator/enableGarbageCollection")
class Test {

    gc: GarbageCollector;

    before() {

        // clear the target register of the gc instance
        this.gc = GarbageCollector.getInstance<GarbageCollector>();

        // remove all targets!
        (<any>this.gc)["registeredTargets"] = [];

        // check requirement
        expect(this.getGcTargets().length).to.eq(0);
    }

    private getGcTargets(): {
        [constructorName: string]: object[]
    } {

        return (<any>this.gc)["registeredTargets"];
    }

    @test "class decorator should register the instance during constructing in the gc target storage"() {

        // first instanciate the non gc class. no target should be registered
        let nonGc = new NonGcClass();

        // targets have to be empty
        expect(this.getGcTargets().length).to.eq(0);

        // instantiate the gc class
        let gc = new GcClass();

        // target should have been registered
        let targets = this.getGcTargets();
        expect(targets.length).to.eq(0);

        // the target should be linked now!
        expect(targets[GcClass.name][0]).to.eq(gc);
    }

    @test "the super class of the target should not interfere with the decorator mixin class"() {

        // the class decorator return a mixin class as ts class extend.
        // if the target class has a super class, the mixin should not
        // interfere with it!
        let gcSuper = new GcClassSuper();

        // class should be typeof GcClassSuper and Singleton
        expect(gcSuper instanceof GcClassSuper).to.be.true;
        expect(gcSuper instanceof Singleton).to.be.true;

        // the static getInstance function has to be available
        expect(typeof GcClassSuper.getInstance).to.eq('function');
    }
}