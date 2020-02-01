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

class FakeMessageBus implements IMessageBus {
    private dispatchReactor: () => void;
    private publishReactor: (message: IMessage) => void;
    private subscribeReactor: (subscriber: Subscriber, types: string | string[]) => void;
    private unsubscribeAllReactor: (subscriber: Subscriber) => void;
    private unsubscribeReactor: (subscriber: Subscriber, types: string | string[]) => void;

    constructor(dispatchReactor: () => void = (): void => {return;}, 
    publishReactor: (message: IMessage) => void = (): void => {return;}, 
    subscribeReactor: (subscriber: Subscriber, types: string | string[]) => void = (): void => {return;},
    unsubscribeAllReactor: (subscriber: Subscriber) => void = (): void => {return;},
    unsubscribeReactor: (subscriber: Subscriber, types: string | string[]) => void = (): void => {return;}) {
        this.dispatchReactor = dispatchReactor;
        this.publishReactor = publishReactor;
        this.subscribeReactor = subscribeReactor;
        this.unsubscribeAllReactor = unsubscribeAllReactor;
        this.unsubscribeReactor = unsubscribeReactor;
    }

    public Dispatch(): void {
        return this.dispatchReactor();
    }

    public Publish(message: IMessage): void {
        return this.publishReactor(message);
    }

    public Subscribe(subscriber: Subscriber, types: string | string[]): void{
        return this.subscribeReactor(subscriber, types);
    }

    public UnsubscribeAll(subscriber: Subscriber): void {
        return this.unsubscribeAllReactor(subscriber);
    }

    public Unsubscribe(subscriber: Subscriber, types: string | string[]): void {
        return this.unsubscribeReactor(subscriber, types);
    }

}

export default FakeMessageBus;