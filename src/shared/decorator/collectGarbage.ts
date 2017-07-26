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
export function CollectGarbage(event: EventName, cleanVal?: any): PropertyDecorator {

    return (target: {}, propertyKey: string | symbol) => {

        // the collector function
        const collectGarbage = (targets: object[]) => {

            // for size calc
            let size = 0;

            // iterate all targets
            targets.forEach((targetInstance) => {

                // cleck if property exists
                if ((targetInstance as any)[propertyKey]) {

                    // clean it!
                    size += objectSizeof((targetInstance as any)[propertyKey]);
                    (targetInstance as any)[propertyKey] = cleanVal;
                }
            });

            // print log
            Log.getLogger('@' + CollectGarbage.name).debug(
                'cleared', File.byteToSize(size, FileSizeType.Kilobyte) + 'KB'
            );
        };

        // register the deletion event in the garbage collector
        const collector = GarbageCollector.getInstance<GarbageCollector>();
        collector.registerCleaning({
            event,
            ctor: target.constructor as () => any,
            cleanFunction: collectGarbage
        });
    };
}
