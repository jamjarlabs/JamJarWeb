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

import IEntity from "../entity/ientity";
import Fake from "./fake";
import Scene from "../scene/scene";
import Reactor from "./reactor";
import Component from "../component/component";

class FakeEntity extends Fake implements IEntity {
    public id: number;
    public scene?: Scene;

    constructor(id: number, scene?: Scene, reactors: Reactor[] = []) {
        super(reactors);
        this.id = id;
        this.scene = scene;
    }

    Add(component: Component): void {
        return;
    }
    
    Remove(key: string): void {
        return;
    }

    Destroy(): void {
        return;
    }
}

export default FakeEntity