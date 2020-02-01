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

/* eslint @typescript-eslint/no-explicit-any: 0 */
// Requires any type as used in reflection to stub methods

class Reactor {
    public name: string
    public logic: (...args: any[]) => any

    constructor(name: string, logic: (...args: any[]) => any) {
        this.name = name;
        this.logic = logic;
    }
}

export default Reactor;