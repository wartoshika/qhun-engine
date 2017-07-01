/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { RamStorage } from '../../../src/shared/storage/RamStorage';
import { FileSizeType } from '../../../src/shared/helper'
import { expect } from 'chai';
import 'mocha';

describe('shared/storage/RamStorage.ts', () => {

    it('add() should be able to add an object', () => {

        RamStorage.clear();

        let element = { a: 'test' };
        let path = 'testPath.test';
        RamStorage.add(path, element);

        expect(RamStorage.get<any>(path)).to.eq(element);
    });

    it('getSize() should get an acurate memory footprint', () => {

        RamStorage.clear();

        let element = { test: 'test' };
        let path = 'testPath.test';
        RamStorage.add(path, element);

        expect(RamStorage.getSize('', FileSizeType.Byte)).to.be.eq(16);
    });

    it('remove() should remove one element', () => {

        RamStorage.clear();

        let el = { a: true };
        RamStorage.add("test", el);

        expect(RamStorage.getSize("test", FileSizeType.Byte)).to.be.greaterThan(0);

        RamStorage.remove("test");

        expect(RamStorage.getSize("test", FileSizeType.Byte)).to.eq(0);
        expect(RamStorage.get<any>("test")).to.eq(undefined);
    });

    it('has() should work correctly', () => {

        RamStorage.clear();

        expect(RamStorage.has("test")).to.be.false;

        let el = { a: true };
        RamStorage.add("test", el);

        expect(RamStorage.has("test")).to.be.true;
    });

    it('amount() should get the right amount from the storage cache', () => {

        RamStorage.clear();

        expect(RamStorage.amount("test")).to.eq(0);

        let el = { a: true };
        RamStorage.add("test", el);

        expect(RamStorage.amount("test")).to.eq(1);
    });

});