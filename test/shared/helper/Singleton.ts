/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

class TestClass extends Singleton { }

@suite("shared/helper/Singleton")
class TestSingleton {

    before() {

        // reset singleton instance
        TestClass.bindInstance(null);
    }

    @test "singleton should store its instance"() {

        let testClass = new TestClass();

        // get the class
        let test = TestClass.getInstance<TestClass>();

        // vars should be equal
        expect(testClass).to.eq(test);
    }

    @test "singleton should fail on constructing multiple instances"() {

        let error = false;
        let testClass = new TestClass();

        try {

            let otherTestClass = new TestClass();
        } catch (e) {

            error = true;
        }

        expect(error, "singleton can be created multiple times").to.be.true;
    }
}