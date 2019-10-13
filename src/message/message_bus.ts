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

import ISubscriber from "./isubscriber";
import IMessage from "./imessage";

class MessageBus {
    private subscribers: Record<string, ISubscriber[]>;
    private messageQueue: IMessage[];

    constructor() {
        this.subscribers = {};
        this.messageQueue = [];
    }

    public Dispatch(): void {
        const queueLength = this.messageQueue.length;
        for (let i = 0; i < queueLength; i++) {
            // Will always be non null
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            const message = this.messageQueue.shift()!;
            const messageSubs = this.subscribers[message.type];
            if (!messageSubs) {
                continue;
            }
            for (let j = 0; j < messageSubs.length; j++) {
                messageSubs[j].HandleMessage(message);
            }
        }
    }

    public Publish(message: IMessage): void {
        this.messageQueue.push(message);
    }

    public Subscribe(subscriber: ISubscriber, types: string | string[]): void {
        if (types instanceof Array) {
            for(const type of types) {
                this.Subscribe(subscriber, type);
            }
            return;
        }
        let typeSubs = this.subscribers[types];
        if (!typeSubs) {
            typeSubs = [];
        }
        typeSubs.push(subscriber);
        this.subscribers[types] = typeSubs;
    }
}

export default MessageBus;