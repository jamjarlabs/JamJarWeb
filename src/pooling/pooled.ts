/*
Copyright 2020 JamJar Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import IPoolable from "./ipoolable";

/**
 * Pooled is the base class for any object that needs to implement object pooling.
 * This base class keeps track of all object pools through static global memory, providing generic methods for
 * requesting objects from the pools, freeing memory up for the pools to use, and initializing the pools to a certain
 * size.
 * The pooled class also provides a required objectInPool variable to allow instances to be marked as available in the
 * pool, used to avoid duplicating objects in the same pool (multiple free calls on the same object).
 */
abstract class Pooled {
    /**
     * objectInPool is true if an object is made available in the object pool. If it is false it is not
     * currently available in the object pool.
     * This is used to avoid adding the same object to the same object pool multiple times if there are successive
     * calls to free the the same object.
     */
    public objectInPool = false;

    /**
     * pools is the global, static mapping of string keys to object pools.
     * An object pool contains two pieces of data, the maximum size of the pool (first value), and the objects that
     * make up the pool as an array (second value).
     */
    protected static pools: Map<string, [number, IPoolable[]]> = new Map();

    /**
     * new is used to request a new object from the pool specified, if the pool is unavailable or empty it will use
     * the type to provision a new object through a constructor.
     * This is a generic method, it includes a cast to the generic type provided - this cast can fail if the objects
     * returned from the pool are not the type expected.
     * @param poolKey The key of the pool to retrieve from.
     * @param type The fallback constructor to use if the pool is not initialized/empty.
     * @param args The args to use when creating/recycling the object.
     */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    protected static new<T extends IPoolable>(poolKey: string, type: { new(...args: any): T }, args: any[]): T {
        // Get any object pool with matching key, if no pool just create unpooled object
        const pool = Pooled.pools.get(poolKey);

        if (pool === undefined) {
            // No pool initialized, create unpooled object
            return new type(...args);
        }

        // Check for a free entry in the pool, if one is free recycle and use it
        if (pool[1].length > 0) {
            // Will always be non-undefined as the length is > 0
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            const recycled = pool[1].shift()!.Recycle(args) as T;
            recycled.objectInPool = false;
            return recycled;
        }

        // No free entry, create unpooled object
        return new type(...args);
    }

    /**
     * free is used to mark a provided object as free in the pool provided. This method can be called multiple times
     * with the same object, it will only add one entry to the pool.
     * @param poolKey The key of the pool to add the object to.
     * @param obj The object to add to the pool.
     */
    protected static free(poolKey: string, obj: IPoolable): void {
        // Object hasn't already been added to the pool
        if (obj.objectInPool) {
            return;
        }

        // Get pool, if it doesn't exist just return
        const pool = Pooled.pools.get(poolKey);
        if (pool === undefined) {
            return;
        }

        // Check if the pool is smaller than it's maximum size (first value is pool max size, second value is objects
        // in the pool.
        if (pool[0] > pool[1].length) {
            // Pool is not full, add the new object to the pool, mark that the object has been added to the pool
            pool[1].push(obj);
            obj.objectInPool = true;
        }
    }

    /**
     * init is used to initialize an object pool to a certain size. This method takes a key of the pool to initialize,
     * an 'empty generator' which is a function that should return an empty/blank instance of the object being pooled
     * which can be overwritten at a later point, and the maximum size of the pool (which it will be initialized to
     * at the start using the empty generator).
     * @param poolKey
     * @param emptyGenerator
     * @param size
     */
    protected static init(poolKey: string, emptyGenerator: () => IPoolable, size: number): void {
        // Create an empty pool of maximum size provided
        const pool: [number, IPoolable[]] = [size, []];
        // Generate enough empty/blank objects to fill up to the maximum pool size and add to the pool
        for (let i = 0; i < size; i++) {
            const empty = emptyGenerator();
            empty.objectInPool = true;
            pool[1].push(empty);
        }
        Pooled.pools.set(poolKey, pool);
    }
}

export default Pooled;
