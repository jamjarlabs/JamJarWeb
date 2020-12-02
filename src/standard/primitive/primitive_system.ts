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
import SystemEntity from "../../system/system_entity";
import IScene from "../../scene/iscene";
import UI from "../ui/ui";
import RenderSystem from "../render/render_system";
import IRenderable from "../../rendering/irenderable";
import Camera from "../camera/camera";
import Primitive from "./primitive";
import IFrustumCuller from "../frustum_culler/ifrustum_culler";
import FrustumCuller from "../frustum_culler/frustum_culler";
import Vector from "../../geometry/vector";
import AABB from "../../shape/aabb";
import Matrix4D from "../../geometry/matrix_4d";

/**
 * PrimitiveSystem handles processing primitives for render systems, tracking
 * primitives and generating renderables from them.
 */
class PrimitiveSystem extends System {
    /**
     * Track primitives and cameras.
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Primitive.KEY].every((type) => components.some(
            component => component.key === type
        )) || [Transform.KEY, Camera.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    private frustumCuller: IFrustumCuller;
    private renderables: Map<number, IRenderable[]>;

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        frustumCuller: IFrustumCuller = new FrustumCuller(),
        renderables: Map<number, IRenderable[]> = new Map(),
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, PrimitiveSystem.EVALUATOR, entities, subscriberID);
        this.frustumCuller = frustumCuller;
        this.renderables = renderables;
        this.messageBus.Subscribe(this, [Game.MESSAGE_PRE_RENDER, Game.MESSAGE_POST_RENDER]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case Game.MESSAGE_PRE_RENDER: {
                const renderMessage = message as Message<number>;
                if (renderMessage.payload === undefined) {
                    return;
                }
                this.preparePrimitives(renderMessage.payload);
                break;
            }
            case Game.MESSAGE_POST_RENDER: {
                this.freeRenderables();
                break;
            }
        }
    }

    private preparePrimitives(alpha: number): void {

        const viewportAABB = new AABB(Vector.New(2, 2));

        for (const cameraEntity of this.entities.values()) {
            if (cameraEntity.Get(Camera.KEY) === undefined) {
                // Not a camera
                continue;
            }

            const camera = cameraEntity.Get(Camera.KEY) as Camera;
            const cameraTransform = cameraEntity.Get(Transform.KEY) as Transform;

            const cameraViewShape = new AABB(camera.virtualScale.Copy()).Transform(cameraTransform);

            const cameraVirtualScaleHalf = camera.virtualScale.Copy().Scale(0.5);

            const cameraRenderables: IRenderable[] = [];

            for (const primitiveEntity of this.entities.values()) {
                if (primitiveEntity.Get(Primitive.KEY) === undefined) {
                    // Not a camera
                    continue;
                }
                const primitive = primitiveEntity.Get(Primitive.KEY) as Primitive;
                const transform = primitiveEntity.Get(Transform.KEY) as Transform;
                const ui = primitiveEntity.Get(UI.KEY) as UI | undefined;

                if (ui === undefined) {
                    // Not UI

                    if (this.frustumCuller.Cull(cameraViewShape, primitive.points.Copy().Transform(transform))) {
                        // Not in camera view, skip rendering
                        continue;
                    }

                    cameraRenderables.push(Renderable.New(
                        primitive.zOrder,
                        primitive.points,
                        transform.InterpolatedMatrix4D(alpha),
                        primitive.material,
                        primitive.drawMode
                    ));
                } else {
                    // UI
                    if (cameraEntity.entity.id !== ui.camera.id) {
                        // If camera is not the one targeted, skip
                        continue;
                    }

                    if (this.frustumCuller.Cull(viewportAABB, primitive.points.Copy().Transform(transform))) {
                        // Not in camera view, skip rendering
                        continue;
                    }

                    // camera position + UI element position * camera virtual scale
                    const cameraRelativePosition = cameraTransform.position.Copy();
                    cameraRelativePosition.x += transform.position.x * cameraVirtualScaleHalf.x;
                    cameraRelativePosition.y += transform.position.y * cameraVirtualScaleHalf.y;

                    const matrix = new Matrix4D()
                        .Translate(cameraRelativePosition)
                        .Rotate(transform.angle)
                        .Scale(transform.scale.Copy().Multiply(camera.virtualScale));

                    // Create the renderable for use by rendering systems
                    cameraRenderables.push(Renderable.New(
                        primitive.zOrder,
                        primitive.points,
                        matrix,
                        primitive.material,
                        primitive.drawMode
                    ));
                }
            }
            this.renderables.set(cameraEntity.entity.id, cameraRenderables);
        }
        viewportAABB.Free();
        this.messageBus.Publish(new Message<Map<number, IRenderable[]>>(RenderSystem.MESSAGE_LOAD_RENDERABLES, this.renderables));
    }

    private freeRenderables(): void {
        for (const cameraRenderables of this.renderables.values()) {
            for (const renderable of cameraRenderables) {
                renderable.Free();
            }
        }
        this.renderables.clear();
    }
}

export default PrimitiveSystem;
