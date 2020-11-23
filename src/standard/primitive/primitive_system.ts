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

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        frustumCuller: IFrustumCuller = new FrustumCuller(),
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, PrimitiveSystem.EVALUATOR, entities, subscriberID);
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
                this.preparePrimitives(renderMessage.payload);
                break;
            }
        }
    }

    private preparePrimitives(alpha: number): void {
        const renderables: Map<number, IRenderable[]> = new Map();

        const cameraEntities = [...this.entities.values()].filter((entity) => {
            return entity.Get(Camera.KEY);
        });

        const primitiveEntities = [...this.entities.values()].filter((entity) => {
            return entity.Get(Primitive.KEY);
        });

        const viewportAABB = new AABB(Vector.New(2,2));

        for (const cameraEntity of cameraEntities) {
            const camera = cameraEntity.Get(Camera.KEY) as Camera;
            const cameraTransform = cameraEntity.Get(Transform.KEY) as Transform;

            const cameraViewShape = new AABB(camera.virtualScale.Copy()).Transform(cameraTransform);

            const cameraRenderables: IRenderable[] = [];

            for (const entity of primitiveEntities) {
                const primitive = entity.Get(Primitive.KEY) as Primitive;
                const transform = entity.Get(Transform.KEY) as Transform;
                const ui = entity.Get(UI.KEY) as UI | undefined;

                if (ui === undefined) {
                    // Not UI

                    if (this.frustumCuller.Cull(cameraViewShape, primitive.points.Transform(transform))) {
                        // Not in camera view, skip rendering
                        continue;
                    }

                    cameraRenderables.push(Renderable.New(
                        primitive.zOrder,
                        primitive.points.Copy(),
                        transform.InterpolatedMatrix4D(alpha),
                        primitive.material,
                        primitive.drawMode,
                        undefined,
                    ));
                } else {
                    // UI
                    if (cameraEntity.entity.id !== ui.camera.id) {
                        // If camera is not the one targeted, skip
                        continue;
                    }

                    if (this.frustumCuller.Cull(viewportAABB, primitive.points.Transform(transform))) {
                        // Not in camera view, skip rendering
                        continue;
                    }

                    const relativeTransform = new Transform(
                        // camera position + UI element position * camera virtual scale
                        cameraTransform.position.Copy()
                            .Add(transform.position.Copy().Multiply(camera.virtualScale.Copy().Scale(0.5))),
                        // element scale * camera virtual scale
                        transform.scale.Copy().Multiply(camera.virtualScale),
                        transform.angle
                    );

                    // Create the renderable for use by rendering systems
                    cameraRenderables.push(Renderable.New(
                        primitive.zOrder,
                        primitive.points.Copy(),
                        relativeTransform.InterpolatedMatrix4D(alpha),
                        primitive.material,
                        primitive.drawMode,
                        ui.camera,
                    ));
                }
            }
            renderables.set(cameraEntity.entity.id, cameraRenderables);
        }
        viewportAABB.Free();
        this.messageBus.Publish(new Message<Map<number, IRenderable[]>>(RenderSystem.MESSAGE_LOAD_RENDERABLES, renderables));
    }
}

export default PrimitiveSystem;
