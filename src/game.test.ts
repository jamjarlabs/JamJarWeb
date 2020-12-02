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

import Game from "./game";
import FakeMessageBus from "./fake/message_bus";
import Reactor from "./fake/reactor";

class TestGame extends Game {}

describe("Game - Start", () => {
    type TestTuple = [string, Error | undefined, Game];
    test.each<TestTuple>([
        [
            "Fail to dispatch",
            Error("fail to dispatch"),
            new TestGame(
                new FakeMessageBus([
                    new Reactor("Dispatch", () => {
                        throw Error("fail to dispatch");
                    }),
                ]),
                "test",
                (): number => {
                    return 0;
                }
            ),
        ],
        [
            "Fail to publish",
            Error("fail to publish"),
            new TestGame(
                new FakeMessageBus([
                    new Reactor("Publish", () => {
                        throw Error("fail to publish");
                    }),
                ]),
                "test",
                (): number => {
                    return 0;
                }
            ),
        ],
        [
            "Success, loop 1000 times",
            undefined,
            new TestGame(
                new FakeMessageBus(),
                "test",
                ((): ((callback: FrameRequestCallback) => number) => {
                    let count = 0;
                    return (callback: FrameRequestCallback): number => {
                        if (count < 999) {
                            count++;
                            callback(new Date().getTime());
                            return 0;
                        } else {
                            return 0;
                        }
                    };
                })()
            ),
        ],
    ])("%p", (description: string, expected: Error | undefined, game: Game) => {
        jest.useFakeTimers();
        if (expected instanceof Error) {
            expect(() => {
                game.Start();
            }).toThrow(expected);
        } else {
            expect(game.Start()).toEqual(expected);
        }
        jest.runAllTimers();
    });
});
