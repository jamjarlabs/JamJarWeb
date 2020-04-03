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

import FontAsset from "../../rendering/font_asset";

class FontMapping {
    public width: number;
    public asset: FontAsset;
    public characters: Map<string, number>

    constructor(width: number, asset: FontAsset, characters: Map<string, number>) {
        this.width = width;
        this.asset = asset;
        this.characters = characters;
    }
}

export default FontMapping;