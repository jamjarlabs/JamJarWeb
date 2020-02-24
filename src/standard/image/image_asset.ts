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

class ImageAsset {
    public name: string;
    public image: HTMLImageElement;
    public success: boolean;
    public error?: Error;

    constructor(name: string, image: HTMLImageElement, success: boolean, error?: Error) {
        this.name = name;
        this.image = image;
        this.success = success;
        this.error = error;
    }
}

export default ImageAsset;