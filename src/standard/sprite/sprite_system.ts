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
import ArraySystem from "../../system/array_system";

/**
 * SpriteSystem handles converting sprites into renderable objects that are fed into
 * a rendering system.
 */
class SpriteSystem extends ArraySystem {
    /**
     * Ensure is Sprite entity with Transform and Sprite, or Camera entity with
     * Transform and Camera
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        let hasTransform = false;
        let hasCamera = false;
        let hasSprite = false;
        for (let i = 0; i < components.length; i++) {
            switch (components[i].key) {
                case Transform.KEY: {
                    hasTransform = true;
                    break;
                }
                case Sprite.KEY: {
                    hasSprite = true;
                    break;
                }
                case Camera.KEY: {
                    hasCamera = true;
                    break;
                }
            }
            if (hasTransform && (hasCamera || hasSprite)) {
                return true;
            }
        }
        return hasTransform && (hasCamera || hasSprite);
    };

    private static readonly SPRITE_RENDERABLE_QUAD = Polygon.QuadByDimensions(1, 1, 0, 0);

    private frustumCuller: IFrustumCuller;
    private renderables: IRenderable[];

    constructor(
        messageBus: IMessageBus,
        scene?: IScene,
        frustumCuller: IFrustumCuller = new FrustumCuller(),
        renderables: IRenderable[] = [],
        entities?: SystemEntity[],
        subscriberID?: number
    ) {
        super(messageBus, scene, SpriteSystem.EVALUATOR, entities, subscriberID);
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
        const viewportAABB = new AABB(Vector.New(2, 2));

        for (let i = 0; i < this.entities.length; i++) {
            const cameraEntity = this.entities[i];
            if (cameraEntity.Get(Camera.KEY) === undefined) {
                // Not a camera
                continue;
            }

            const camera = cameraEntity.Get(Camera.KEY) as Camera;
            const cameraTransform = cameraEntity.Get(Transform.KEY) as Transform;

            const cameraViewShape = new AABB(camera.virtualScale.Copy()).Transform(cameraTransform);

            const cameraVirtualScaleHalf = camera.virtualScale.Copy().Scale(0.5);

            for (let j = 0; j < this.entities.length; j++) {
                const spriteEntity = this.entities[j];
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

                    this.renderables.push(
                        Renderable.New(
                            sprite.zOrder,
                            SpriteSystem.SPRITE_RENDERABLE_QUAD,
                            transform.InterpolatedMatrix4D(alpha),
                            sprite.material,
                            DrawMode.TRIANGLES,
                            cameraEntity.entity
                        )
                    );
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

                    const cameraRelativeScale = transform.scale.Copy().Multiply(camera.virtualScale);

                    const matrix = Matrix4D.New()
                        .Translate(cameraRelativePosition)
                        .Rotate(transform.angle)
                        .Scale(cameraRelativeScale);

                    cameraRelativePosition.Free();
                    cameraRelativeScale.Free();

                    // Create the renderable for use by rendering systems
                    this.renderables.push(
                        Renderable.New(
                            sprite.zOrder,
                            SpriteSystem.SPRITE_RENDERABLE_QUAD,
                            matrix,
                            sprite.material,
                            DrawMode.TRIANGLES,
                            cameraEntity.entity
                        )
                    );
                }
            }
            cameraViewShape.Free();
            cameraVirtualScaleHalf.Free();
        }

        viewportAABB.Free();
        this.messageBus.Publish(Message.New<IRenderable[]>(RenderSystem.MESSAGE_LOAD_RENDERABLES, this.renderables));
    }

    private freeRenderables(): void {
        for (let i = 0; i < this.renderables.length; i++) {
            const renderable = this.renderables[i];
            renderable.modelMatrix.Free();
            renderable.vertices.Free();
            renderable.Free();
        }
        this.renderables.length = 0;
    }
}

export default SpriteSystem;
