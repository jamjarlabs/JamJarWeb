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

import ScriptingReference from "./standard/scripting_engine/scripting_reference";

export {};

declare global {
    // Window is a globally defined interface, it does not conform to the I
    // prefix naming scheme.
    interface Window {
        /**
         * JamJarRefs is a mapping between a key to a JamJar scripting
         * reference, allows multiple games to exist in the same scope, and
         * scripting will continue to work.
         */
        JamJarRefs: Map<string, ScriptingReference> | undefined;
    }
}
