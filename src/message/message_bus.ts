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

import Subscriber from "./subscriber";
import Message from "./message";

class MessageBus {
    private subscribers: Record<string, Subscriber[]>;
    private messageQueue: Message[];

    constructor() {
        this.subscribers = {};
        this.messageQueue = [];
    }

    Dispatch() {
        const queueLength = this.messageQueue.length;
        for (let i = 0; i < queueLength; i++) {
            let message = this.messageQueue.shift()!; // Can't be null, supress null check
            let messageSubs = this.subscribers[message.type];
            if(!messageSubs) {
                continue;
            }
            for (let j = 0; j < messageSubs.length; j++) {
                messageSubs[j].HandleMessage(message);
            }
        }
    }

    Publish(message: Message) {
        this.messageQueue.push(message);
    }

    Subscribe(subscriber: Subscriber, type: string) {
        let typeSubs = this.subscribers[type];
        if (!typeSubs) {
            typeSubs = [];
        }
        typeSubs.push(subscriber);
        this.subscribers[type] = typeSubs;
    }
}

export default MessageBus;