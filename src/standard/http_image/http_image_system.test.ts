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

import HTTPImageSystem from "./http_image_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import Reactor from "../../fake/reactor";
import ImageAsset from "../../rendering/image/image_asset";
import TextureWrapping from "../../rendering/texture/texture_wrapping";
import TextureFiltering from "../../rendering/texture/texture_filtering";

describe("HTTPImageSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, HTTPImageSystem, HTTPImageSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown message",
            undefined,
            new HTTPImageSystem(new FakeMessageBus(), undefined, undefined, 0, []),
            new HTTPImageSystem(new FakeMessageBus(), undefined, undefined, 0, []),
            new Message("unknown"),
        ],
        [
            "Flush, 3 images, publish fail",
            new Error("publish fail"),
            new HTTPImageSystem(new FakeMessageBus(), undefined, undefined, 0, [
                new ImageAsset(
                    "test",
                    new window.Image(),
                    true,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    false
                ),
                new ImageAsset(
                    "test1",
                    new window.Image(),
                    false,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    false
                ),
                new ImageAsset(
                    "test2",
                    new window.Image(),
                    true,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    false
                ),
            ]),
            new HTTPImageSystem(
                new FakeMessageBus([
                    new Reactor("Publish", () => {
                        throw "publish fail";
                    }),
                ]),
                undefined,
                undefined,
                0,
                [
                    new ImageAsset(
                        "test",
                        new window.Image(),
                        true,
                        TextureWrapping.CLAMP_TO_EDGE,
                        TextureWrapping.MIRRORED_REPEAT,
                        TextureFiltering.NEAREST,
                        TextureFiltering.BILINEAR,
                        false,
                        false
                    ),
                    new ImageAsset(
                        "test1",
                        new window.Image(),
                        false,
                        TextureWrapping.CLAMP_TO_EDGE,
                        TextureWrapping.MIRRORED_REPEAT,
                        TextureFiltering.NEAREST,
                        TextureFiltering.BILINEAR,
                        false,
                        false
                    ),
                    new ImageAsset(
                        "test2",
                        new window.Image(),
                        true,
                        TextureWrapping.CLAMP_TO_EDGE,
                        TextureWrapping.MIRRORED_REPEAT,
                        TextureFiltering.NEAREST,
                        TextureFiltering.BILINEAR,
                        false,
                        false
                    ),
                ]
            ),
            new Message(HTTPImageSystem.MESSAGE_REQUEST_FLUSH),
        ],
        [
            "Flush, 3 images, publish fail",
            undefined,
            new HTTPImageSystem(new FakeMessageBus(), undefined, undefined, 0, [
                new ImageAsset(
                    "test",
                    new window.Image(),
                    true,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    true
                ),
                new ImageAsset(
                    "test1",
                    new window.Image(),
                    false,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    false
                ),
                new ImageAsset(
                    "test2",
                    new window.Image(),
                    true,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    false
                ),
            ]),
            new HTTPImageSystem(new FakeMessageBus(), undefined, undefined, 0, [
                new ImageAsset(
                    "test",
                    new window.Image(),
                    true,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    true
                ),
                new ImageAsset(
                    "test1",
                    new window.Image(),
                    false,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    false
                ),
                new ImageAsset(
                    "test2",
                    new window.Image(),
                    true,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    false
                ),
            ]),
            new Message(HTTPImageSystem.MESSAGE_REQUEST_FLUSH),
        ],
        [
            "Clear, remove 3 images",
            undefined,
            new HTTPImageSystem(new FakeMessageBus(), undefined, undefined, 0, []),
            new HTTPImageSystem(new FakeMessageBus(), undefined, undefined, 0, [
                new ImageAsset(
                    "test",
                    new window.Image(),
                    true,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    true
                ),
                new ImageAsset(
                    "test1",
                    new window.Image(),
                    false,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    false
                ),
                new ImageAsset(
                    "test2",
                    new window.Image(),
                    true,
                    TextureWrapping.CLAMP_TO_EDGE,
                    TextureWrapping.MIRRORED_REPEAT,
                    TextureFiltering.NEAREST,
                    TextureFiltering.BILINEAR,
                    false,
                    false
                ),
            ]),
            new Message(HTTPImageSystem.MESSAGE_REQUEST_CLEAR),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            expectedState: HTTPImageSystem,
            system: HTTPImageSystem,
            message: IMessage
        ) => {
            if (expected instanceof Error) {
                expect(() => {
                    system.OnMessage(message);
                }).toThrow(expected);
            } else {
                expect(system.OnMessage(message)).toEqual(expected);
            }
            expect(system).toEqual(expectedState);
        }
    );
});
