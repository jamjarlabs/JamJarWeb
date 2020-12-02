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

import Component from "../component/component";
import Message from "../message/message";
import IMessageBus from "../message/imessage_bus";
import IEntity from "./ientity";

/**
 * Entity is one of the key elements of the Entity-Component-System architecture.
 * Entity is just to tie components together, and to give Systems ways to group
 * and link components.
 * The entity is basically just an ID, with some meta information of tags and
 * layers for grouping and filtering, alongside some helper functions for
 * adding/removing components and destroying itself.
 */
class Entity implements IEntity {
    private static ID = 0;

    /**
     * Message broadcast when an entity is destroyed.
     */
    public static readonly MESSAGE_DESTROY = "entity_destroy";

    public tags: string[];
    public layers: string[];
    public id: number;

    private messageBus: IMessageBus;

    constructor(messageBus: IMessageBus, tags: string[] = [], layers: string[] = [], id: number = Entity.ID++) {
        this.messageBus = messageBus;
        this.tags = tags;
        this.layers = layers;
        this.id = id;
    }

    public Add(component: Component): void {
        this.messageBus.Publish(
            new Message<[Entity, Component]>(Component.MESSAGE_ADD, [this, component])
        );
    }

    public Remove(key: string): void {
        this.messageBus.Publish(
            new Message<[Entity, string]>(Component.MESSAGE_REMOVE, [this, key])
        );
    }

    public Destroy(): void {
        this.messageBus.Publish(new Message<Entity>(Entity.MESSAGE_DESTROY, this));
    }
}

export default Entity;
