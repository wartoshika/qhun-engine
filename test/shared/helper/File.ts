/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { File, FileSizeType } from '../../../src/shared/helper';
import { expect } from 'chai';
import 'mocha';

describe('shared/helper/File.ts', () => {

    it('getFileExtension() should get the right file extension', () => {

        let filePath = "path/test/test.ext";
        expect(File.getFileExtension(filePath)).to.eq("ext");

        filePath = "C:\\path\\test.ext.txt";
        expect(File.getFileExtension(filePath)).to.eq("txt");

        filePath = "/root/text.txt.test.ts";
        expect(File.getFileExtension(filePath)).to.eq("ts");
    });

    it('byteToSize() should be working correltcy', () => {

        let byte = 1;
        let kilobyte = byte * 1024;
        let megabyte = 1024 * kilobyte;
        let gibabyte = 1024 * megabyte;
        let terrabyte = 1024 * gibabyte;

        // byte checking
        expect(File.byteToSize(byte, FileSizeType.Byte)).to.eq(1);
        expect(File.byteToSize(kilobyte, FileSizeType.Kilobyte)).to.closeTo(1, .1);
        expect(File.byteToSize(megabyte, FileSizeType.Megabyte)).to.closeTo(1, .1);
        expect(File.byteToSize(gibabyte, FileSizeType.Gigabyte)).to.closeTo(1, .1);
        expect(File.byteToSize(terrabyte, FileSizeType.Terrabyte)).to.closeTo(1, .1);
    });

});