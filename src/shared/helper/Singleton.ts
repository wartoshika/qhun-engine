/**
 * a class to handle the singleton paradigmen
 */
export abstract class Singleton {

    // the instance storage
    private static _instance: any;

    /**
     * get the singleton instance
     */
    public static getInstance<T>(): T {

        return this._instance;
    }

    /**
     * bind the instance to access the singleton
     *
     * @param instance the instance to bind
     */
    protected static bindInstance(instance: object): void {

        this._instance = instance;
    }
}