/**
 * Copyright (c) 2017 Oliver Warrings <dev@qhun.de>
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import { EventName } from '../event';
import { GarbageCollector, File, FileSizeType } from '../helper';
import { Log } from '../log/Log';

const objectSizeof = require('object-sizeof');

/**
 * a property decorator to define a phase in wich the property
 * will be emptied
 *
 * @param event property will be cleared on the defined event
 * @param clearVal the new value that will be the property value
 */
export function collectGargabe(event: EventName, cleanVal?: any): PropertyDecorator {

    return (target: Object, propertyKey: string | symbol) => {

        // the collector function
        let collectGarbage = (targets: object[]) => {

            // for size calc
            let size = 0;

            // iterate all targets
            targets.forEach(target => {

                // cleck if property exists
                if ((<any>target)[propertyKey]) {

                    //clean it!
                    size += objectSizeof((<any>target)[propertyKey]);
                    (<any>target)[propertyKey] = cleanVal;
                }
            });

            // print log
            Log.getLogger('@' + collectGargabe.name).debug(
                "cleared", File.byteToSize(size, FileSizeType.Kilobyte) + "KB"
            )
        };

        // register the deletion event in the garbage collector
        let collector = GarbageCollector.getInstance<GarbageCollector>();
        collector.registerCleaning({
            event: event,
            ctor: target.constructor,
            cleanFunction: collectGarbage
        });
    }
}