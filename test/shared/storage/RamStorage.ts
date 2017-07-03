/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { RamStorage, Helper, FileSizeType } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';


beforeEach(() => {

    RamStorage.clear();
})

@suite("shared/math/Dimension")
class TestRamStorage {

    @test "add() should be able to add an object"() {

        let element = { a: 'test' };
        let path = 'testPath.test';
        RamStorage.add(path, element);

        expect(RamStorage.get<any>(path)).to.eq(element);
    }

    @test "getSize() should get an acurate memory footprint"() {

        let element = { test: 'test' };
        let path = 'testPath.test';
        RamStorage.add(path, element);

        expect(RamStorage.getSize('', FileSizeType.Byte)).to.be.eq(16);
    }

    @test "remove() should remove one element"() {

        let el = { a: true };
        RamStorage.add("test", el);

        expect(RamStorage.getSize("test", FileSizeType.Byte)).to.be.greaterThan(0);

        RamStorage.remove("test");

        expect(RamStorage.getSize("test", FileSizeType.Byte)).to.eq(0);
        expect(RamStorage.get<any>("test")).to.eq(undefined);
    }

    @test "has() should work correctly"() {

        expect(RamStorage.has("test")).to.be.false;

        let el = { a: true };
        RamStorage.add("test", el);

        expect(RamStorage.has("test")).to.be.true;
    }

    @test "amount() should get the right amount from the storage cache"() {

        expect(RamStorage.amount("test")).to.eq(0);

        let el = { a: true };
        RamStorage.add("test", el);

        expect(RamStorage.amount("test")).to.eq(1);
    }
}