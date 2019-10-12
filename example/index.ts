/*
Copyright 2019 JamJar Authors

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

import Game from "jamjar/lib/game"
import System from "jamjar/lib/system/system";

class TestSystem extends System {
    update(dt: number) {
        console.log("UPDATE");
    }
}

class TestGame extends Game {
    constructor() {
        super({name: "test-game"});
        new TestSystem(this.messageBus);
    }
}

let testGame = new TestGame();

testGame.Start();