/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { Singleton } from '../../../src/shared/helper';
import { RamStorage } from '../../../src/shared/storage';
import { expect } from 'chai';
import 'mocha';

class TestClass extends Singleton {

}

describe('shared/helper/Singleton.ts', () => {

    it('singleton should store its instance in the ram storage', () => {

        // ram storage should not contain any singleton classes
        expect(RamStorage.getSize("singleton.instance.TestClass")).to.eq(0);

        let test = TestClass.getInstance<TestClass>();

        // the storage should not grow
        expect(RamStorage.get<TestClass>("singleton.instance.TestClass")).to.eq(test);
    });

    it('bindInstace() sould bind the given instance to the storage', () => {

        let a = new TestClass();
        (<any>a).test = true;
        (<any>TestClass).bindInstance(a);

        // get from the storage
        let b = RamStorage.get<TestClass>("singleton.instance.TestClass");

        expect((<any>b).test).to.be.true;
    });

});