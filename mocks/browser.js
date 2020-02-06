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

/**
 * JSDOM for mocking DOM interactions, such as event listeners.
 */

const jsdom = require("jsdom")
const { JSDOM } = jsdom;
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

// Workaround for https://github.com/kulshekhar/ts-jest/issues/1035 https://github.com/jsdom/jsdom/issues/2527
// Taken from: https://github.com/kulshekhar/ts-jest/issues/1035#issuecomment-486442977
global.window.PointerEvent = function (type, eventInitDict) { 
    return { type, ...eventInitDict }
};
global.window.BeforeUnloadEvent = function () { };
global.window.DOMRect = function (x, y, width, height) {
    return { x, y, width, height, left: x - width / 2, right: x + width / 2, top: y + height / 2, bottom: y - height / 2 }
};