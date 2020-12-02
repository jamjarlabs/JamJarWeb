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
    return { type, ...eventInitDict };
};
global.window.BeforeUnloadEvent = function () {};
global.window.DOMRect = function (x, y, width, height) {
    return {
        x,
        y,
        width,
        height,
        left: x - width / 2,
        right: x + width / 2,
        top: y + height / 2,
        bottom: y - height / 2,
    };
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
global.window.WebGL2RenderingContext.POINTS = 0;
global.window.WebGL2RenderingContext.LINES = 0;
global.window.WebGL2RenderingContext.LINE_STRIP = 0;
global.window.WebGL2RenderingContext.TRIANGLES = 0;
global.window.WebGL2RenderingContext.TRIANGLE_STRIP = 0;
global.window.WebGL2RenderingContext.TRIANGLE_FAN = 0;

global.window.AudioContext = function () {
    return {};
};
global.window.AudioBuffer = function () {
    return {};
};
global.window.AudioBufferSourceNode = function () {
    return {};
};
global.window.MediaElementAudioSourceNode = function () {
    return {};
};
global.window.HTMLMediaElement = function () {
    return {};
};
global.window.MediaStreamAudioDestinationNode = function () {
    return {};
};
global.window.MediaStreamAudioSourceNode = function () {
    return {};
};
global.window.MediaStream = function () {
    return {};
};
global.window.MediaStreamTrackAudioSourceNode = function () {
    return {};
};
global.window.AnalyserNode = function () {
    return {};
};
global.window.BiquadFilterNode = function () {
    return {};
};
global.window.AudioBufferSourceNode = function () {
    return {};
};
global.window.ChannelMergerNode = function () {
    return {};
};
global.window.ChannelSplitterNode = function () {
    return {};
};
global.window.ConstantSourceNode = function () {
    return {};
};
global.window.ConvolverNode = function () {
    return {};
};
global.window.DelayNode = function () {
    return {};
};
global.window.DynamicsCompressorNode = function () {
    return {};
};
global.window.GainNode = function () {
    return {};
};
global.window.IIRFilterNode = function () {
    return {};
};
global.window.OscillatorNode = function () {
    return {};
};
global.window.PannerNode = function () {
    return {};
};
global.window.PeriodicWave = function () {
    return {};
};
global.window.ScriptProcessorNode = function () {
    return {};
};
global.window.StereoPannerNode = function () {
    return {};
};
global.window.WaveShaperNode = function () {
    return {};
};
global.window.AudioParam = function () {
    return {};
};
global.window.AudioNode = function () {
    return {};
};
global.window.Response = function () {
    return {};
};
global.window.fetch = function () {
    return Promise.resolve();
};

global.window.WebGLTexture = function () {
    return {};
};
global.window.WebGLShader = function () {
    return {};
};
global.window.WebGLProgram = function () {
    return {};
};
global.window.ImageData = function (width, height) {
    const data = new Uint8ClampedArray(width * height);
    data.fill(0);
    return { width, height, data };
};
// Workaround for JSON marshalling maps, used in testing
// From https://stackoverflow.com/a/43705077/6052295
Map.prototype.toJSON = function () {
    return [...this];
};
