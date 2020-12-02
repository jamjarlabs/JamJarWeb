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

/**
 * IEntity defines how an entity should behave, and it's underlying core
 * requirements - an ID, tags, and layers.
 */
interface IEntity {
    /**
     * Unique numeric identifier of the entity.
     */
    id: number;
    /**
     * A list of tags the entity has, used for discriminating between entities
     * without having to add custom components.
     */
    tags: string[];
    /**
     * A list of layers the entity belongs to, used for grouping entities.
     */
    layers: string[];
    /**
     * Add adds a component to the entity.
     * @param {Component} component The component to add
     */
    Add: (component: Component) => void;
    /**
     * Remove removes a component from the entity.
     * @param {string} key The component to remove
     */
    Remove: (key: string) => void;
    /**
     * Destroy deletes the entity and all associated components.
     */
    Destroy: () => void;
}

export default IEntity;
