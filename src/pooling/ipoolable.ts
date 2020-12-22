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

import IFreeable from "./ifreeable";

/**
 * IPoolable defines the required properties of an object that is able to be pooled using an object pool.
 */
interface IPoolable extends IFreeable {
    /**
     * objectInPool is used to mark if the instance of the object is currently pooled.
     */
    objectInPool: boolean;
    /**
     * Recycle is used to reuse an existing object instance, using the arguments provided - similar to a constructor,
     * but must be repeatable.
     * @param args The arguments to use when recycling the object instance
     */
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    Recycle(...args: any): IPoolable;
}

export default IPoolable;
