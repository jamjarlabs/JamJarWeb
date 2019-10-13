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

import Component from "./component";
import Entity from "../entity/entity";

class ComponentManager {
    private components: Record<number, Component>

    constructor() {
        this.components = [];
    }

    public Get(entity: Entity): Component {
        return this.components[entity.id];
    }

    public Add(entity: Entity, component: Component): void {
        this.components[entity.id] = component;
    }

    public Remove(entity: Entity): void {
        delete this.components[entity.id];
    }
}

export default ComponentManager;