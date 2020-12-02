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

import IMessageBus from "../message/imessage_bus";
import Subscriber from "../message/subscriber";
import IMessage from "../message/imessage";
import Fake from "./fake";

class FakeMessageBus extends Fake implements IMessageBus {
    public Dispatch(): void {
        return;
    }

    public DispatchUntilEmpty(): void {
        return;
    }

    public Publish(message: IMessage): void {
        return;
    }

    public Subscribe(subscriber: Subscriber, types: string | string[]): void {
        return;
    }

    public UnsubscribeAll(subscriber: Subscriber): void {
        return;
    }

    public Unsubscribe(subscriber: Subscriber, types: string | string[]): void {
        return;
    }
}

export default FakeMessageBus;
