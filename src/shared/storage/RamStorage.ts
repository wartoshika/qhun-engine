/**
 * holds objects in the ram of the operating unit
 */
export class RamStorage {

    // the private cache object
    private static cache: {
        [path: string]: any
    } = {};

    /**
     * adds an elemement to the cache
     *
     * @param path the path to the object. dots can be used to structure
     * @param elemement the element to store
     */
    public static add(path: string, elemement: any): void {

        RamStorage.cache[path] = elemement;
    }

    /**
     * removes an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static remove(path: string): void {

        delete RamStorage.cache[path];
    }

    /**
     * get an element from the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static get<T>(path: string): T {

        return <T>RamStorage.cache[path];
    }

    /**
     * checks if an object exists in the cache
     *
     * @param path the path to the object. dots can be used to structure
     */
    public static has(path: string): boolean {

        return RamStorage.get(path) !== undefined;
    }
}