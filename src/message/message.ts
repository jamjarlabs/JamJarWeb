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

import IPoolable from "../pooling/ipoolable";
import Pooled from "../pooling/pooled";
import IMessage from "./imessage";

/**
 * Message is a message that can be sent along the event bus to subscribers.
 * Message has a generic type payload for passing more data than just the message type.
 */
class Message<T> extends Pooled implements IMessage, IPoolable {
    /**
     * Value of the Message object pool.
     */
    private static readonly POOL_KEY = "jamjar_message";

    private static readonly INIT_MESSAGE = () => {
        return Message.New("");
    };

    /**
     * Create a Message.New, using pooling if available.
     */
    public static New<T>(type: string, payload?: T): Message<T> {
        return this.new<Message<T>>(Message.POOL_KEY, Message, type, payload);
    }

    /**
     * Free the provided Message.
     */
    public static Free<T>(obj: Message<T>): void {
        this.free(Message.POOL_KEY, obj);
    }

    /**
     * Initialize the Message pool to the size provided.
     */
    public static Init(size: number): void {
        this.init(Message.POOL_KEY, Message.INIT_MESSAGE, size);
    }

    public type: string;
    public payload?: T;

    constructor(type: string, payload?: T) {
        super();
        this.type = type;
        this.payload = payload;
    }

    public Recycle(type: string, payload?: T): IPoolable {
        this.type = type;
        this.payload = payload;
        return this;
    }

    public Free(): void {
        Message.Free(this);
    }
}

export default Message;
