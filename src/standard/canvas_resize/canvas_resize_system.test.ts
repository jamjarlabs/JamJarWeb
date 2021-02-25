/*
Copyright 2021 JamJar Authors

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

import FakeResizeObserver from "../../fake/fake_resize_observer";
import FakeScreen from "../../fake/fake_screen";
import FakeMessageBus from "../../fake/message_bus";
import IMessage from "../../message/imessage";
import Message from "../../message/message";
import FullscreenSystem from "../fullscreen/fullscreen_system";
import CanvasResizeSystem from "./canvas_resize_system";

describe("CanvasResizeSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, CanvasResizeSystem, CanvasResizeSystem, IMessage];
    test.each<TestTuple>([
        [
            "Set aspect ratio, no payload",
            undefined,
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new FakeResizeObserver(),
                0
            ),
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                new FakeResizeObserver(),
                0
            ),
            new Message(CanvasResizeSystem.MESSAGE_SET_ASPECT_RATIO),
        ],
        [
            "Set aspect ratio, fullscreen, 50x50 screen, aspect ratio 2/1, canvas 50x25",
            undefined,
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                2 / 1,
                null,
                undefined,
                true,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 50;
                    screen.height = 50;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                1 / 1,
                null,
                undefined,
                true,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 50;
                    screen.height = 50;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new Message(CanvasResizeSystem.MESSAGE_SET_ASPECT_RATIO, 2 / 1),
        ],
        [
            "Set aspect ratio, not fullscreen, 100x100 wrapper, aspect ratio 4/3, canvas 100x75",
            undefined,
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                ((): HTMLElement => {
                    const wrapper = document.createElement("div");
                    Object.defineProperty(wrapper, "clientWidth", {
                        value: 100,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(wrapper, "clientHeight", {
                        value: 100,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                    return wrapper;
                })(),
                4 / 3,
                null,
                undefined,
                false,
                new FakeScreen(),
                new FakeResizeObserver(),
                0
            ),
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                ((): HTMLElement => {
                    const wrapper = document.createElement("div");
                    Object.defineProperty(wrapper, "clientWidth", {
                        value: 100,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(wrapper, "clientHeight", {
                        value: 100,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                    return wrapper;
                })(),
                1 / 1,
                null,
                undefined,
                false,
                new FakeScreen(),
                new FakeResizeObserver(),
                0
            ),
            new Message(CanvasResizeSystem.MESSAGE_SET_ASPECT_RATIO, 4 / 3),
        ],
        [
            "Set aspect ratio, not fullscreen, 100x100 wrapper, aspect ratio 4/3, max resolution 50x50, canvas 50x25",
            undefined,
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                ((): HTMLElement => {
                    const wrapper = document.createElement("div");
                    Object.defineProperty(wrapper, "clientWidth", {
                        value: 100,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(wrapper, "clientHeight", {
                        value: 100,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                    return wrapper;
                })(),
                4 / 3,
                [50, 50],
                undefined,
                false,
                new FakeScreen(),
                new FakeResizeObserver(),
                0
            ),
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                ((): HTMLElement => {
                    const wrapper = document.createElement("div");
                    Object.defineProperty(wrapper, "clientWidth", {
                        value: 100,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                    Object.defineProperty(wrapper, "clientHeight", {
                        value: 100,
                        writable: true,
                        enumerable: true,
                        configurable: true,
                    });
                    return wrapper;
                })(),
                1 / 1,
                [50, 50],
                undefined,
                false,
                new FakeScreen(),
                new FakeResizeObserver(),
                0
            ),
            new Message(CanvasResizeSystem.MESSAGE_SET_ASPECT_RATIO, 4 / 3),
        ],
        [
            "Set maximum resolution, no payload",
            undefined,
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                1 / 1,
                null,
                undefined,
                true,
                new FakeScreen(),
                new FakeResizeObserver(),
                0
            ),
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                1 / 1,
                null,
                undefined,
                true,
                new FakeScreen(),
                new FakeResizeObserver(),
                0
            ),
            new Message(CanvasResizeSystem.MESSAGE_SET_MAX_RESOLUTION),
        ],
        [
            "Set maximum resolution, fullscreen, 100x100 screen, aspect ratio 2/1, maximum resolution 50x50, canvas 50x25",
            undefined,
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                2 / 1,
                [50, 50],
                undefined,
                true,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 100;
                    screen.height = 100;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                2 / 1,
                null,
                undefined,
                true,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 100;
                    screen.height = 100;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new Message(CanvasResizeSystem.MESSAGE_SET_MAX_RESOLUTION, [50, 50]),
        ],
        [
            "Unset maximum resolution, fullscreen, 100x100 screen, aspect ratio 4/3, canvas 100x75",
            undefined,
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                4 / 3,
                null,
                undefined,
                true,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 100;
                    screen.height = 100;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                4 / 3,
                [50, 50],
                undefined,
                true,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 100;
                    screen.height = 100;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new Message(CanvasResizeSystem.MESSAGE_SET_MAX_RESOLUTION, null),
        ],
        [
            "Enter fullscreen",
            undefined,
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                4 / 3,
                null,
                undefined,
                true,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 100;
                    screen.height = 100;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                4 / 3,
                null,
                undefined,
                false,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 100;
                    screen.height = 100;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new Message(FullscreenSystem.MESSAGE_ENTER_FULLSCREEN, null),
        ],
        [
            "Exit fullscreen",
            undefined,
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                4 / 3,
                null,
                undefined,
                false,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 100;
                    screen.height = 100;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new CanvasResizeSystem(
                new FakeMessageBus(),
                document.createElement("canvas"),
                document.createElement("div"),
                4 / 3,
                null,
                undefined,
                true,
                ((): Screen => {
                    const screen = new FakeScreen();
                    screen.width = 100;
                    screen.height = 100;
                    return screen;
                })(),
                new FakeResizeObserver(),
                0
            ),
            new Message(FullscreenSystem.MESSAGE_EXIT_FULLSCREEN, null),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            expectedState: CanvasResizeSystem,
            system: CanvasResizeSystem,
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
