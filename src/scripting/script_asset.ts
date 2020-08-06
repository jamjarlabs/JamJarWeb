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

class ScriptAsset {
    public static readonly MESSAGE_FINISH_LOAD = "finish_script_load";

    public name: string;
    public code: string;
    public error?: Error;

    constructor(name: string,
        code: string,
        error?: Error) {
        this.name = name;
        this.code = code;
        this.error = error;
    }
}

export default ScriptAsset;
