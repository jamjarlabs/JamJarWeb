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

import MessageBus from "../message/message_bus";
import Subscriber from "../message/subscriber";
import Message from "../message/message";

abstract class System implements Subscriber{

    public static readonly MESSAGE_UPDATE = "update"
    public static readonly MESSAGE_START = "start"

    constructor(public messageBus: MessageBus) {
        this.messageBus.Subscribe(this, System.MESSAGE_START);
		this.messageBus.Subscribe(this, System.MESSAGE_UPDATE);
    }

    start() {}

    update(dt: number) {}

    HandleMessage(message: Message) {
        switch(message.type) {
            case System.MESSAGE_START:
                this.start();
                break;
            case System.MESSAGE_UPDATE:
                this.update(message.payload);
                break;
        }
    }
}

export default System;