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
import Sprite from "./sprite";
import IMessage from "../../message/imessage";
import Message from "../../message/message";
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import Game from "../../game";
import Renderable from "../../rendering/renderable";
import SystemEntity from "../../system/system_entity";
import IScene from "../../scene/iscene";
import UI from "../ui/ui";
import RenderSystem from "../render/render_system";
import IRenderable from "../../rendering/irenderable";
import Camera from "../camera/camera";
import DrawMode from "../../rendering/draw_mode";
import Polygon from "../../shape/polygon";
import IFrustumCuller from "../frustum_culler/ifrustum_culler";
import FrustumCuller from "../frustum_culler/frustum_culler";
import AABB from "../../shape/aabb";
import Vector from "../../geometry/vector";

/**
 * SpriteSystem handles converting sprites into renderable objects that are fed into
 * a rendering system.
 */
class SpriteSystem extends System {
    /**
     * Ensure is Sprite entity with Transform and Sprite, or Camera entity with
     * Transform and Camera
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Sprite.KEY].every((type) => components.some(
            component => component.key === type
        )) || [Transform.KEY, Camera.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    private frustumCuller: IFrustumCuller;

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        frustumCuller: IFrustumCuller = new FrustumCuller(),
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, SpriteSystem.EVALUATOR, entities, subscriberID);
        this.frustumCuller = frustumCuller;
        this.messageBus.Subscribe(this, Game.MESSAGE_PRE_RENDER);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case Game.MESSAGE_PRE_RENDER: {
                const renderMessage = message as Message<number>;
                if (renderMessage.payload === undefined) {
                    return;
                }
                this.prepareSprites(renderMessage.payload);
                break;
            }
        }
    }

    private prepareSprites(alpha: number): void {
        const renderables: Map<number, IRenderable[]> = new Map();
        // Get camera entities
        const cameraEntities = [...this.entities.values()].filter((entity) => {
            return entity.Get(Camera.KEY);
        });
        // Get sprite entities
        const spriteEntities = [...this.entities.values()].filter((entity) => {
            return entity.Get(Sprite.KEY);
        });

        const viewportAABB = new AABB(Vector.New(2,2));

        for (const cameraEntity of cameraEntities) {
            const camera = cameraEntity.Get(Camera.KEY) as Camera;
            const cameraTransform = cameraEntity.Get(Transform.KEY) as Transform;

            const cameraViewShape = new AABB(camera.virtualScale.Copy()).Transform(cameraTransform);

            const cameraRenderables: IRenderable[] = [];

            for (const spriteEntity of spriteEntities) {
                const sprite = spriteEntity.Get(Sprite.KEY) as Sprite;
                const transform = spriteEntity.Get(Transform.KEY) as Transform;
                const ui = spriteEntity.Get(UI.KEY) as UI | undefined;

                if (ui === undefined) {
                    // Not UI
                    if (this.frustumCuller.Cull(cameraViewShape, new AABB(Vector.New(1,1)).Transform(transform))) {
                        // Not in camera view, skip rendering
                        continue;
                    }

                    cameraRenderables.push(Renderable.New(
                        sprite.zOrder,
                        Polygon.QuadByDimensions(1, 1, 0, 0),
                        transform.InterpolatedMatrix4D(alpha),
                        sprite.material.Copy(),
                        DrawMode.TRIANGLES,
                        undefined,
                    ));
                } else {
                    // UI
                    if (cameraEntity.entity.id !== ui.camera.id) {
                        // If camera is not the one targeted, skip
                        continue;
                    }

                    if (this.frustumCuller.Cull(viewportAABB, new AABB(Vector.New(1,1)).Transform(transform))) {
                        // Not in camera view, skip rendering
                        continue;
                    }

                    const cameraVirtualScaleHalf = camera.virtualScale.Copy().Scale(0.5);
                    const cameraRelativePosition = transform.position.Copy().Multiply(cameraVirtualScaleHalf);

                    cameraVirtualScaleHalf.Free();

                    const relativeTransform = new Transform(
                        // camera position + UI element position * camera virtual scale
                        cameraTransform.position.Copy().Add(cameraRelativePosition),
                        // element scale * camera virtual scale
                        transform.scale.Copy().Multiply(camera.virtualScale),
                        transform.angle
                    );

                    cameraRelativePosition.Free();

                    const matrix = relativeTransform.InterpolatedMatrix4D(alpha);

                    relativeTransform.Free();

                    // Create the renderable for use by rendering systems
                    cameraRenderables.push(Renderable.New(
                        sprite.zOrder,
                        Polygon.QuadByDimensions(1, 1, 0, 0),
                        matrix,
                        sprite.material.Copy(),
                        DrawMode.TRIANGLES,
                        ui.camera,
                    ));
                }
            }
            renderables.set(cameraEntity.entity.id, cameraRenderables);
            cameraViewShape.Free();
        }
        viewportAABB.Free();
        this.messageBus.Publish(new Message<Map<number, IRenderable[]>>(RenderSystem.MESSAGE_LOAD_RENDERABLES, renderables));
    }
}

export default SpriteSystem;
