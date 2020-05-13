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

// Workaround for https://github.com/kulshekhar/ts-jest/issues/1035 https://github.com/jsdom/jsdom/issues/2527
// Taken from: https://github.com/kulshekhar/ts-jest/issues/1035#issuecomment-486442977
global.window.PointerEvent = function (type, eventInitDict) { 
    return { type, ...eventInitDict }
};
global.window.BeforeUnloadEvent = function () { };
global.window.DOMRect = function (x, y, width, height) {
    return { x, y, width, height, left: x - width / 2, right: x + width / 2, top: y + height / 2, bottom: y - height / 2 }
};
global.window.WebGL2RenderingContext = function () {
    return {};
};
global.window.WebGL2RenderingContext.NEAREST = 0;
global.window.WebGL2RenderingContext.LINEAR = 0;
global.window.WebGL2RenderingContext.LINEAR_MIPMAP_LINEAR = 0;
global.window.WebGL2RenderingContext.REPEAT = 0;
global.window.WebGL2RenderingContext.MIRRORED_REPEAT = 0;
global.window.WebGL2RenderingContext.CLAMP_TO_EDGE = 0;

global.window.WebGLTexture = function () {
    return {};
};
global.window.WebGLShader = function () {
    return {};
};
global.window.WebGLProgram = function () {
    return {};
};
global.window.ImageData = function(width, height) {
    const data = new Uint8ClampedArray(width * height);
    data.fill(0);
    return { width, height, data };
};
// Workaround for JSON marshalling maps, used in testing
// From https://stackoverflow.com/a/43705077/6052295
Map.prototype.toJSON = function () {
    return [...this]
}