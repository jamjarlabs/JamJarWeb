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
import Matrix4D from "../../geometry/matrix_4d";

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
    private renderables: Map<number, IRenderable[]>;

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        frustumCuller: IFrustumCuller = new FrustumCuller(),
        renderables: Map<number, IRenderable[]> = new Map(),
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, SpriteSystem.EVALUATOR, entities, subscriberID);
        this.frustumCuller = frustumCuller;
        this.renderables = renderables;
        this.messageBus.Subscribe(this, [ Game.MESSAGE_PRE_RENDER, Game.MESSAGE_POST_RENDER ]);
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
            case Game.MESSAGE_POST_RENDER: {
                this.freeRenderables();
                break;
            }
        }
    }

    private prepareSprites(alpha: number): void {

        const viewportAABB = new AABB(Vector.New(2,2));

        const spriteRenderableQuad = Polygon.QuadByDimensions(1, 1, 0, 0);

        for (const cameraEntity of this.entities.values()) {
            if (cameraEntity.Get(Camera.KEY) === undefined) {
                // Not a camera
                continue;
            }

            const camera = cameraEntity.Get(Camera.KEY) as Camera;
            const cameraTransform = cameraEntity.Get(Transform.KEY) as Transform;

            const cameraViewShape = new AABB(camera.virtualScale.Copy()).Transform(cameraTransform);

            const cameraRenderables: IRenderable[] = [];

            const cameraVirtualScaleHalf = camera.virtualScale.Copy().Scale(0.5);

            for (const spriteEntity of this.entities.values()) {
                if (spriteEntity.Get(Sprite.KEY) === undefined) {
                    // Not a camera
                    continue;
                }

                const sprite = spriteEntity.Get(Sprite.KEY) as Sprite;
                const transform = spriteEntity.Get(Transform.KEY) as Transform;

                sprite.transformedShape.size.x = 1;
                sprite.transformedShape.size.y = 1;
                sprite.transformedShape.center.x = 0;
                sprite.transformedShape.center.y = 0;
                sprite.transformedShape.size.Multiply(transform.scale);
                sprite.transformedShape.center.Add(transform.position);

                const ui = spriteEntity.Get(UI.KEY) as UI | undefined;

                if (ui === undefined) {
                    // Not UI
                    if (this.frustumCuller.Cull(cameraViewShape, sprite.transformedShape)) {
                        // Not in camera view, skip rendering
                        continue;
                    }

                    cameraRenderables.push(Renderable.New(
                        sprite.zOrder,
                        spriteRenderableQuad,
                        transform.InterpolatedMatrix4D(alpha),
                        sprite.material,
                        DrawMode.TRIANGLES,
                        undefined,
                    ));
                } else {
                    // UI
                    if (cameraEntity.entity.id !== ui.camera.id) {
                        // If camera is not the one targeted, skip
                        continue;
                    }

                    if (this.frustumCuller.Cull(viewportAABB, sprite.transformedShape)) {
                        // Not in camera view, skip rendering
                        continue;
                    }

                    // camera position + UI element position * camera virtual scale
                    const cameraRelativePosition = cameraTransform.position.Copy();
                    cameraRelativePosition.x += transform.position.x * cameraVirtualScaleHalf.x;
                    cameraRelativePosition.y += transform.position.y * cameraVirtualScaleHalf.y;

                    const matrix =  new Matrix4D()
                        .Translate(cameraRelativePosition)
                        .Rotate(transform.angle)
                        .Scale(transform.scale.Copy().Multiply(camera.virtualScale));

                    // Create the renderable for use by rendering systems
                    cameraRenderables.push(Renderable.New(
                        sprite.zOrder,
                        spriteRenderableQuad,
                        matrix,
                        sprite.material,
                        DrawMode.TRIANGLES,
                        ui.camera,
                    ));
                }
            }
            this.renderables.set(cameraEntity.entity.id, cameraRenderables);
            cameraViewShape.Free();
            cameraVirtualScaleHalf.Free();
        }

        viewportAABB.Free();
        spriteRenderableQuad.Free();
        this.messageBus.Publish(new Message<Map<number, IRenderable[]>>(
            RenderSystem.MESSAGE_LOAD_RENDERABLES, this.renderables));
    }

    private freeRenderables() {
        for (const cameraRenderables of this.renderables.values()) {
            for (const renderable of cameraRenderables) {
                renderable.vertices.Free();
                renderable.Free();
            }
        }
        this.renderables.clear
    }

}

export default SpriteSystem;
