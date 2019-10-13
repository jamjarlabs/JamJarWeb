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
import Component from "../components/component";
import Message from "../message/message";

class Entity {
    private static ID = 0;
    public static readonly MESSAGE_DESTROY = "entity_destroy";
    public static readonly KEY = "entity";

    public id: number;

    constructor(private messageBus: MessageBus) {
        this.id = Entity.ID++;
    }

    Add(component: Component): void {
        this.messageBus.Publish(new Message<[Entity, Component]>(Component.MESSAGE_ADD, [this, component]));
    }

    Remove(key: string): void {
        this.messageBus.Publish(new Message<[Entity, string]>(Component.MESSAGE_REMOVE, [this, key]));
    }
}

export default Entity;