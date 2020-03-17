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

import System from "../../system/system";
import Component from "../../component/component";
import Transform from "../transform/transform";
import IMessage from "../../message/imessage";
import Message from "../../message/message";
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import Game from "../../game";
import Renderable from "../../rendering/renderable";
import WebGLSystem from "../webgl/webgl_system";
import SystemEntity from "../../system/system_entity";
import IScene from "../../scene/iscene";
import UI from "../ui/ui";
import Sprite from "../sprite/sprite";
import Camera from "../camera/camera";

/**
 * UISystem handles sprites that are designated as part of the UI, handling their coordinates and scale
 * relative to a camera, rather than as part of the world coordinates.
 */
class UISystem extends System {
    // Has transform, sprite and UI, or transform and camera
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Sprite.KEY, UI.KEY].every((type) => components.some(
            component => component.key == type
        )) || [Transform.KEY, Camera.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    constructor(messageBus: IMessageBus,
        { scene, entities, subscriberID }:
            { scene: IScene | undefined; entities: Map<number, SystemEntity>; subscriberID: number | undefined } =
            { scene: undefined, entities: new Map(), subscriberID: undefined }) {
        super(messageBus, { evaluator: UISystem.EVALUATOR, scene, entities, subscriberID });
        this.messageBus.Subscribe(this, Game.MESSAGE_PRE_RENDER);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case Game.MESSAGE_PRE_RENDER: {
                const renderMessage = message as Message<number>;
                if (renderMessage.payload == undefined) {
                    return;
                }
                this.prepareUI(renderMessage.payload);
                break;
            }
        }
    }

    private prepareUI(alpha: number): void {
        // Filter to only get UI elements without camera entities
        const uiElements = [...this.entities.values()].filter((entity) => {
            return entity.Get(UI.KEY) && entity.Get(Sprite.KEY);
        });
        const renderables: Renderable[] = [];
        for (const entity of uiElements) {

            const sprite = entity.Get(Sprite.KEY) as Sprite;
            const transform = entity.Get(Transform.KEY) as Transform;
            const ui = entity.Get(UI.KEY) as UI;

            // Get the camera the UI component is targeting
            const cameraEntity = this.entities.get(ui.camera.id);
            if (cameraEntity === undefined) {
                // If no camera found, skip this entity
                continue;
            }

            // Get components of the camera entity
            const camera = cameraEntity.Get(Camera.KEY) as Camera | undefined;
            const cameraTransform = cameraEntity.Get(Transform.KEY) as Transform | undefined;
            if (camera === undefined || cameraTransform === undefined) {
                // If the components are not found, must not be a valid camera, skip this entity
                continue;
            }

            // Create the renderable for use by rendering systems
            renderables.push(new Renderable(
                sprite.bounds.GetFloat32Array(),
                new Transform(
                    // camera position + UI element position * camera virtual scale
                    cameraTransform.position.Add(transform.position.Multiply(camera.virtualScale)),
                    // element scale * camera virtual scale
                    transform.scale.Multiply(camera.virtualScale),
                    transform.angle
                ).InterpolatedMatrix4D(alpha).GetFloat32Array(),
                sprite.color,
                ui.camera,
                sprite.texture
            ));
        }
        this.messageBus.Publish(new Message<Renderable[]>(WebGLSystem.MESSAGE_LOAD_RENDERABLES, renderables));
    }
}

export default UISystem;