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

import Game from "./game";
import FakeMessageBus from "./fake/message_bus";
import Reactor from "./fake/reactor";
import { JSDOM } from "jsdom";
import Message from "./message/message";
import MessageBus from "./message/message_bus";

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

describe("Game - Ensure window variables set after constructor and start", () => {
    const browserWindow = (new JSDOM().window as unknown) as Window;
    expect(browserWindow.JamJar).toBe(undefined);

    const game = new TestGame(new FakeMessageBus(), "test", (): number => 0, undefined, browserWindow, 0);
    expect(browserWindow.JamJar).not.toBe(undefined);
    expect(browserWindow.JamJar.StopGames).not.toBe(undefined);
    expect(browserWindow.JamJar.StopGames).not.toBe(null);
    expect(browserWindow.JamJar.__runningGameBuses).toBe(undefined);

    game.Start();
    expect(browserWindow.JamJar.__runningGameBuses).not.toBe(undefined);
    expect(browserWindow.JamJar.__runningGameBuses).not.toBe(null);
});

describe("Game - Ensure window variables set after constructor and start, stop games function already set and already 1 message bus", () => {
    const browserWindow = (new JSDOM().window as unknown) as Window;
    browserWindow.JamJar = {};
    browserWindow.JamJar.StopGames = () => {
        return;
    };
    browserWindow.JamJar.__runningGameBuses = [new FakeMessageBus()];

    const game = new TestGame(new FakeMessageBus(), "test", (): number => 0, undefined, browserWindow, 0);
    expect(browserWindow.JamJar).not.toBe(undefined);
    expect(browserWindow.JamJar.StopGames).not.toBe(undefined);
    expect(browserWindow.JamJar.StopGames).not.toBe(null);
    expect(browserWindow.JamJar.__runningGameBuses).toHaveLength(1);

    game.Start();
    expect(browserWindow.JamJar.__runningGameBuses).toHaveLength(2);
});

describe("Game - Loop 5 times before stopping", () => {
    let game: TestGame | undefined = undefined;
    const animationLoop = (): ((callback: FrameRequestCallback) => number) => {
        let count = 0;
        return (callback: FrameRequestCallback): number => {
            count++;
            if (count < 5) {
                callback(new Date().getTime());
                return 0;
            }
            if (count > 5) {
                throw "Should not loop more than 5 times";
            }
            game?.OnMessage(new Message(Game.MESSAGE_STOP_GAME));
            callback(new Date().getTime());
            return 0;
        };
    };

    game = new TestGame(new FakeMessageBus(), "test", animationLoop());
    game.Start();
});

describe("Game - Stop all games", () => {
    const browserWindow = (new JSDOM().window as unknown) as Window;
    let game: TestGame | undefined = undefined;
    const animationLoop = (): ((callback: FrameRequestCallback) => number) => {
        let count = 0;
        return (callback: FrameRequestCallback): number => {
            count++;
            if (count < 5) {
                callback(new Date().getTime());
                return 0;
            }
            // This test is 6 times since it will take one more final loop to process the stop command
            if (count > 6) {
                throw "Should not loop more than 6 times";
            }

            if (count === 5) {
                if (browserWindow.JamJar !== undefined && browserWindow.JamJar.StopGames !== undefined) {
                    browserWindow.JamJar.StopGames(browserWindow);
                }
            }
            callback(new Date().getTime());
            return 0;
        };
    };

    game = new TestGame(new MessageBus(), "test", animationLoop(), undefined, browserWindow);
    game.Start();
});
