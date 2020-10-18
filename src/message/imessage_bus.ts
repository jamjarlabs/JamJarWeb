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

import IMessage from "./imessage";
import ISubscriber from "./isubscriber";

/**
 * IMessageBus defines the contract for a message bus, handling receiver subscription/unsubcription, message publishing,
 * and message dispatching.
 */
interface IMessageBus {
    /**
     * Dispatch processes the current message bus queue and forwards the messages to the subscribers who have
     * subscribed to each message type.
     */
    Dispatch: () => void;

    /**
     * DispatchUntilEmpty repeatedly dispatches until the message queue is empty, used to make sure everything is
     * processed, e.g. if there is a message that causes a new message to be added, it will ensure that all recursive
     * messages are processed.
     */
    DispatchUntilEmpty: () => void;

    /**
     * Publish adds a message to the message bus queue to be dispatched.
     * @param {IMessage} message The message to send
     */
    Publish: (message: IMessage) => void;

    /**
     * Subscribe subscibes a subscriber to a particular message type or types.
     * @param {ISubscriber} subscriber The subscriber to the message type(s)
     * @param {string|string[]} types The message type(s) to subscribe to
     */
    Subscribe: (subscriber: ISubscriber, types: string | string[]) => void;

    /**
     * UnsubscribeAll unsubscribes a Subscriber from all messages.
     * @param {ISubscriber} subscriber The subscriber to unsubscribe
     */
    UnsubscribeAll: (subscriber: ISubscriber) => void;

    /**
     * Unsubscribe unsubscribes a subscriber from a specific message type or types.
     * @param {ISubscriber} subscriber The subscriber to unsubscribe
     * @param {string|strings} types The message type(s) to unsubscribe from
     */
    Unsubscribe: (subscriber: ISubscriber, types: string | string[]) => void;
}

export default IMessageBus;
