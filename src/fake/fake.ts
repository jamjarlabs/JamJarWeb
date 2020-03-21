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

import Reactor from "./reactor";

abstract class Fake {
    constructor(reactors: Reactor[] = []) {
        return new Proxy(this, {
            // Require any in this function as it uses reflection and can return any type
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            get: function (target, prop, receiver, ...args): any {
                for (let i = 0; i < reactors.length; i++) {
                    const reactor = reactors[i];
                    if (reactor.name == prop.toString()) {
                        return reactor.logic;
                    }
                }
                return Reflect.get(target, prop, receiver)
            }
        });
    }
}

export default Fake;