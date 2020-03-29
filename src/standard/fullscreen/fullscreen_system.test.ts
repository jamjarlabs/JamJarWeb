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

import FullscreenSystem from "./fullscreen_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import Reactor from "../../fake/reactor";

describe("FullscreenSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, FullscreenSystem, FullscreenSystem, IMessage];
    test.each<TestTuple>([
        [
            "Request Enter Fullscreen - fail to request fullscreen",
            new Error("fail to request fullscreen"),
            new FullscreenSystem(new FakeMessageBus(), ((): HTMLCanvasElement => {
                const canvas = document.createElement("canvas");
                canvas.requestFullscreen = (options?: FullscreenOptions): Promise<void> => {
                    throw ("fail to request fullscreen");
                };
                return canvas;
            })(), document,
                undefined,
                undefined,
                0
            ),
            new FullscreenSystem(new FakeMessageBus(), ((): HTMLCanvasElement => {
                const canvas = document.createElement("canvas");
                canvas.requestFullscreen = (options?: FullscreenOptions): Promise<void> => {
                    throw ("fail to request fullscreen");
                };
                return canvas;
            })(), document,
                undefined,
                undefined,
                0
            ),
            new Message(FullscreenSystem.MESSAGE_REQUEST_ENTER_FULLSCREEN)
        ],
        [
            "Request Enter Fullscreen - fail to request pointer lock",
            new Error("fail to request pointerlock"),
            new FullscreenSystem(new FakeMessageBus(), ((): HTMLCanvasElement => {
                const canvas = document.createElement("canvas");
                canvas.requestFullscreen = (options?: FullscreenOptions): Promise<void> => { return new Promise((resolve, reject) => resolve()); };
                canvas.requestPointerLock = (): void => {
                    throw ("fail to request pointerlock");
                };
                return canvas;
            })(), document,
                undefined,
                undefined,
                0
            ),
            new FullscreenSystem(new FakeMessageBus(), ((): HTMLCanvasElement => {
                const canvas = document.createElement("canvas");
                canvas.requestFullscreen = (options?: FullscreenOptions): Promise<void> => { return new Promise((resolve, reject) => resolve()); };
                canvas.requestPointerLock = (): void => {
                    throw ("fail to request pointerlock");
                };
                return canvas;
            })(), document,
                undefined,
                undefined,
                0
            ),
            new Message(FullscreenSystem.MESSAGE_REQUEST_ENTER_FULLSCREEN)
        ],
        [
            "Request Enter Fullscreen - success",
            undefined,
            new FullscreenSystem(new FakeMessageBus(), ((): HTMLCanvasElement => {
                const canvas = document.createElement("canvas");
                canvas.requestFullscreen = (options?: FullscreenOptions): Promise<void> => { return new Promise((resolve, reject) => resolve()); };
                canvas.requestPointerLock = (): void => { return; };
                return canvas;
            })(), document,
                undefined,
                undefined,
                0
            ),
            new FullscreenSystem(new FakeMessageBus(), ((): HTMLCanvasElement => {
                const canvas = document.createElement("canvas");
                canvas.requestFullscreen = (options?: FullscreenOptions): Promise<void> => { return new Promise((resolve, reject) => resolve()); };
                canvas.requestPointerLock = (): void => { return; };
                return canvas;
            })(), document,
                undefined,
                undefined,
                0
            ),
            new Message(FullscreenSystem.MESSAGE_REQUEST_ENTER_FULLSCREEN)
        ],
        [
            "Request Exit Fullscreen - fail to exit fullscreen",
            new Error("fail to exit fullscreen"),
            new FullscreenSystem(new FakeMessageBus(), document.createElement("canvas"), ((): HTMLDocument => {
                const doc = new HTMLDocument();
                doc.exitFullscreen = (): Promise<void> => { throw ("fail to exit fullscreen"); };
                return doc;
            })(),
                undefined,
                undefined,
                0
            ),
            new FullscreenSystem(new FakeMessageBus(), document.createElement("canvas"), ((): HTMLDocument => {
                const doc = new HTMLDocument();
                doc.exitFullscreen = (): Promise<void> => { throw ("fail to exit fullscreen"); };
                return doc;
            })(),
                undefined,
                undefined,
                0
            ),
            new Message(FullscreenSystem.MESSAGE_REQUEST_EXIT_FULLSCREEN)
        ],
        [
            "Request Exit Fullscreen - fail to exit pointer lock",
            new Error("fail to exit pointerlock"),
            new FullscreenSystem(new FakeMessageBus(), document.createElement("canvas"), ((): HTMLDocument => {
                const doc = new HTMLDocument();
                doc.exitFullscreen = (): Promise<void> => { return new Promise((resolve, reject): void => resolve()); };
                doc.exitPointerLock = (): Promise<void> => { throw ("fail to exit pointerlock"); };
                return doc;
            })(),
                undefined,
                undefined,
                0
            ),
            new FullscreenSystem(new FakeMessageBus(), document.createElement("canvas"), ((): HTMLDocument => {
                const doc = new HTMLDocument();
                doc.exitFullscreen = (): Promise<void> => { return new Promise((resolve, reject): void => resolve()); };
                doc.exitPointerLock = (): Promise<void> => { throw ("fail to exit pointerlock"); };
                return doc;
            })(),
                undefined,
                undefined,
                0
            ),
            new Message(FullscreenSystem.MESSAGE_REQUEST_EXIT_FULLSCREEN)
        ],
        [
            "Request Exit Fullscreen - success",
            undefined,
            new FullscreenSystem(new FakeMessageBus(), document.createElement("canvas"), ((): HTMLDocument => {
                const doc = new HTMLDocument();
                doc.exitFullscreen = (): Promise<void> => { return new Promise((resolve, reject): void => resolve()); };
                doc.exitPointerLock = (): void => { return; };
                return doc;
            })(),
                undefined,
                undefined,
                0
            ),
            new FullscreenSystem(new FakeMessageBus(), document.createElement("canvas"), ((): HTMLDocument => {
                const doc = new HTMLDocument();
                doc.exitFullscreen = (): Promise<void> => { return new Promise((resolve, reject): void => resolve()); };
                doc.exitPointerLock = (): void => { return; };
                return doc;
            })(),
                undefined,
                undefined,
                0
            ),
            new Message(FullscreenSystem.MESSAGE_REQUEST_EXIT_FULLSCREEN)
        ]
    ])("%p", (description: string, expected: Error | undefined, expectedState: FullscreenSystem, system: FullscreenSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});

/**
 * TestFullscreenSystem is an extension of the FullscreenSystem that exposes the fullscreen functions,
 * allows testing them without having to use JS event listeners
 */
class TestFullscreenSystem extends FullscreenSystem {
    public SimulateFullScreenEvent(event: Event): void {
        this.onFullscreenChange(event);
    }
}

describe("FullscreenSystem - toggle fullscreen", () => {
    type TestTuple = [string, Error | undefined, FullscreenSystem, TestFullscreenSystem, Event];
    test.each<TestTuple>([
        [
            "Fullscreen exit, fail to publish message",
            new Error("fail to publish"),
            new FullscreenSystem(new FakeMessageBus([
                new Reactor("Publish", () => { throw ("fail to publish"); })
            ]),
                document.createElement("canvas"), document,
                undefined,
                undefined,
                0
            ),
            new TestFullscreenSystem(new FakeMessageBus([
                new Reactor("Publish", () => { throw ("fail to publish"); })
            ]),
                document.createElement("canvas"), document,
                undefined,
                undefined,
                0
            ),
            new window.Event("test")
        ],
        [
            "Fullscreen exit, success",
            undefined,
            new FullscreenSystem(new FakeMessageBus(),
                document.createElement("canvas"), document,
                undefined,
                undefined,
                0
            ),
            new TestFullscreenSystem(new FakeMessageBus(),
                document.createElement("canvas"), document,
                undefined,
                undefined,
                0
            ),
            new window.Event("test")
        ],
        [
            "Fullscreen enter, fail to publish message",
            new Error("fail to publish"),
            new FullscreenSystem(new FakeMessageBus([
                new Reactor("Publish", () => { throw ("fail to publish"); })
            ]),
                document.createElement("canvas"),
                ((): HTMLDocument => {
                    Object.defineProperty(document, "fullscreenElement", {
                        writable: true,
                        value: document.createElement("canvas")
                    });
                    return document;
                })(),
                undefined,
                undefined,
                0
            ),
            new TestFullscreenSystem(new FakeMessageBus([
                new Reactor("Publish", () => { throw ("fail to publish"); })
            ]),
                document.createElement("canvas"),
                ((): HTMLDocument => {
                    Object.defineProperty(document, "fullscreenElement", {
                        writable: true,
                        value: document.createElement("canvas")
                    });
                    return document;
                })(),
                undefined,
                undefined,
                0
            ),
            new window.Event("test")
        ],
        [
            "Fullscreen enter, success",
            undefined,
            new FullscreenSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                ((): HTMLDocument => {
                    Object.defineProperty(document, "fullscreenElement", {
                        writable: true,
                        value: document.createElement("canvas")
                    });
                    return document;
                })(),
                undefined,
                undefined,
                0
            ),
            new TestFullscreenSystem(new FakeMessageBus(),
                document.createElement("canvas"),
                ((): HTMLDocument => {
                    Object.defineProperty(document, "fullscreenElement", {
                        writable: true,
                        value: document.createElement("canvas")
                    });
                    return document;
                })(),
                undefined,
                undefined,
                0
            ),
            new window.Event("test")
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: FullscreenSystem, system: TestFullscreenSystem, event: Event) => {
        if (expected instanceof Error) {
            expect(() => {
                system.SimulateFullScreenEvent(event);
            }).toThrow(expected);
        } else {
            expect(system.SimulateFullScreenEvent(event)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
        // Destroy required to remove event listeners
        system.Destroy();
        expectedState.Destroy();
    });
});