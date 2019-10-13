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

import Entity from "../entity/entity";
import Component from "../components/component";

class SystemEntity {
    public entity: Entity;
    public components: Record<string, Component>;

    constructor(entity: Entity, components: Component[]) {
        this.entity = entity;
        this.components = {};
        for (const component of components) {
            this.components[component.key] = component;
        }
    }

    public Get(key: string): Component | undefined {
        return this.components[key];
    }

    public Add(component: Component): void {
        this.entity.Add(component);
    }

    public Remove(key: string): void {
        this.entity.Remove(key);
    }
}

export default SystemEntity;