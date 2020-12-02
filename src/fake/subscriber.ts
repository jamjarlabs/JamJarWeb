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

import Fake from "./fake";
import ISubscriber from "../message/isubscriber";
import Reactor from "./reactor";
import IMessage from "../message/imessage";

class FakeSubscriber extends Fake implements ISubscriber {
    public subscriberID: number;

    constructor(subscriberID: number, reactors: Reactor[] = []) {
        super(reactors);
        this.subscriberID = subscriberID;
    }

    OnMessage(message: IMessage): void {
        return;
    }
}

export default FakeSubscriber;
