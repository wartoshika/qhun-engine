import { RamStorage } from 'shared/storage';

/**
 * a class to handle the singleton paradigmen
 */
export abstract class Singleton {

    // the instance storage
    private static _instance: any;

    /**
     * generates a storage name for the instance storing
     *
     * @param className the class name
     */
    private static generateStorageName(): string {

        return `singleton.instance.${this.name}`;
    }

    /**
     * get the singleton instance
     */
    public static getInstance<T>(): T {

        let instance = null;
        if (!RamStorage.has(this.generateStorageName())) {

            // get the constructor and store an instance of the class at the ram storage
            let constructor = <{ new (): T }><any>this;
            RamStorage.add(this.generateStorageName(), new constructor());
        }

        // get the instance
        return RamStorage.get<T>(this.generateStorageName());
    }
}