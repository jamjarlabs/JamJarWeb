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

import Component from "../../component/component";
import IEntity from "../../entity/ientity";

/**
 * UI is a component for marking an entity as part of the UI,
 * this changes how it is rendered, and how any transform
 * attached to it is interpreted. When attached will cause
 * the entity to be rendered relative to the camera, rather
 * than in world space.
 */
class UI extends Component {
    /**
     * Key of the UI component.
     */
    public static readonly KEY = "ui";
    /**
     * Entity of the camera to render this UI element on.
     */
    public camera: IEntity;

    constructor(camera: IEntity) {
        super(UI.KEY);
        this.camera = camera;
    }
}

export default UI;
