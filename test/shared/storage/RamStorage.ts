/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { RamStorage, Helper, FileSizeType } from '@shared';

import { suite, test } from 'mocha-typescript';
import { expect } from 'chai';

@suite("shared/math/RamStorage")
class TestRamStorage {

    storage: RamStorage;

    static before() {

        RamStorage.bindInstance(null);
    }

    before() {

        this.storage = RamStorage.getInstance<RamStorage>();
    }

    constructor() {

        beforeEach(() => {

            this.storage.clear();
        });
    }

    @test "add() should be able to add an object"() {

        let element = { a: 'test' };
        let path = 'testPath.test';
        this.storage.add(path, element);

        expect(this.storage.get<any>(path)).to.eq(element);
    }

    @test "getSize() should get an acurate memory footprint"() {

        let element = { test: 'test' };
        let path = 'testPath.test';
        this.storage.add(path, element);

        expect(this.storage.getSize('', FileSizeType.Byte)).to.be.eq(16);
    }

    @test "remove() should remove one element"() {

        let el = { a: true };
        this.storage.add("test", el);

        expect(this.storage.getSize("test", FileSizeType.Byte)).to.be.greaterThan(0);

        this.storage.remove("test");

        expect(this.storage.getSize("test", FileSizeType.Byte)).to.eq(0);
        expect(this.storage.get<any>("test")).to.eq(undefined);
    }

    @test "has() should work correctly"() {

        expect(this.storage.has("test")).to.be.false;

        let el = { a: true };
        this.storage.add("test", el);

        expect(this.storage.has("test")).to.be.true;
    }

    @test "amount() should get the right amount from the storage cache"() {

        expect(this.storage.amount("test")).to.eq(0);

        let el = { a: true };
        this.storage.add("test", el);

        expect(this.storage.amount("test")).to.eq(1);
    }
}