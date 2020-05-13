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

import FontRequest from "./font_request";

class FontAsset {
    /**
     * Message when a font asset is finished loading.
     */
    public static readonly MESSAGE_FINISH_LOAD = "finish_font_load";

    public name: string;

    public request: FontRequest;

    constructor(name: string, request: FontRequest) {
        this.name = name;
        this.request = request;
    }
}

export default FontAsset;