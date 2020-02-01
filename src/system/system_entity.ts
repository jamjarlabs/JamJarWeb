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

import Component from "../component/component";
import IEntity from "../entity/ientity";

/**
 * SystemEntity is a wrapper around an entity and its components,
 * used in systems to provide an easier way to group an entity and its
 * components.
 * Includes a number of helper functions for retrieving/adding/removing components,
 * and destroying the entity.
 */
class SystemEntity {
    public entity: IEntity;
    private components: Record<string, Component>;

    constructor(entity: IEntity, components: Component[]) {
        this.entity = entity;
        this.components = {};
        for (const component of components) {
            this.components[component.key] = component;
        }
    }

    /**
     * Get returns any Component with the key provided if it exists;
     * otherwise it returns undefined.
     * @param {string} key The key identifier of the component 
     * @returns {Component|undefined} The component if it exists, otherwise undefined
     */
    public Get(key: string): Component | undefined {
        return this.components[key];
    }

    /**
     * Add adds a component to an entity.
     * @param {Component} component The component to add
     */
    public Add(component: Component): void {
        this.components[component.key] = component;
        this.entity.Add(component);
    }

    /**
     * Remove removes a component from an entity.
     * @param {string} key The key of the component to remove
     */
    public Remove(key: string): void {
        delete this.components[key];
        this.entity.Remove(key);
    }

    /**
     * Destroy destroys the entity and all of its components.
     */
    public Destroy(): void {
        this.entity.Destroy();
    }
}

export default SystemEntity;