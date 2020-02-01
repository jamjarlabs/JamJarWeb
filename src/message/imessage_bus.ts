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

import Subscriber from "./subscriber";
import IMessage from "./imessage";

interface IMessageBus {
    Dispatch: () => void;
    Publish: (message: IMessage) => void;
    Subscribe: (subscriber: Subscriber, types: string | string[]) => void;
    UnsubscribeAll: (subscriber: Subscriber) => void;
    Unsubscribe: (subscriber: Subscriber, types: string | string[]) => void;
}

export default IMessageBus;