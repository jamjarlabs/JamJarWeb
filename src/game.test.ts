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
import IMessageBus from "./message/imessage_bus";
import FakeMessageBus from "./fake/message_bus";

class TestGame extends Game {
    constructor(messageBus: IMessageBus, name: string, frameRequestCallback: (callback: FrameRequestCallback) => number) {
        super(messageBus, name, frameRequestCallback);
    }
}

describe("Game - Start", () => {
    type TestTuple = [string, Error | null, IMessageBus, string, (callback: FrameRequestCallback) => number];
    test.each<TestTuple>([
            [
                "Fail to dispatch", 
                Error("fail to dispatch"), 
                new FakeMessageBus(() => {throw(Error("fail to dispatch"))}),
                "test",
                (): number => { return 0; }
            ],
            [
                "Fail to publish", 
                Error("fail to publish"), 
                new FakeMessageBus(() => {return;}, () => {throw(Error("fail to publish"))}),
                "test",
                (): number => { return 0; }
            ],
            [
                "Success, loop 1000 times", 
                null, 
                new FakeMessageBus(),
                "test",
                ((): (callback: FrameRequestCallback) => number => {
                    let count = 0;
                    return (callback: FrameRequestCallback): number => { 
                        if (count < 999) {
                            count++;
                            callback(new Date().getTime());
                            return 0;
                        } else {
                            return 0;
                        }
                     }
                })()
            ]
        ])("%p", (description: string, expected: Error | null, messageBus: IMessageBus, name: string, frameRequestCallback) => {
            jest.useFakeTimers();
            const game = new TestGame(messageBus, name, frameRequestCallback);
            if (expected !== null) {
                expect(() => {game.Start()}).toThrow(expected);
            }
            else {
                expect(() => {game.Start()}).not.toThrow();
            }
            jest.runAllTimers();
        });
});