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

/**
 * SpriteSystem handles converting sprites into renderable objects that are fed into 
 * a rendering system. Does not handle sprites that are designated as part of the UI.
 */
class SpriteSystem extends System {
    /**
     * Ensure has Transform and Sprite, but not UI
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Sprite.KEY].every((type) => components.some(
            component => component.key === type
        )) && ![UI.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, SpriteSystem.EVALUATOR, entities, subscriberID);
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
        const renderables: Renderable[] = [];
        for (const entity of this.entities.values()) {
            const sprite = entity.Get(Sprite.KEY) as Sprite;
            const transform = entity.Get(Transform.KEY) as Transform;
            renderables.push(new Renderable(
                sprite.zOrder,
                sprite.bounds.GetFloat32Array(),
                transform.InterpolatedMatrix4D(alpha).GetFloat32Array(),
                sprite.material,
                undefined,
            ));
        }
        this.messageBus.Publish(new Message<Renderable[]>(RenderSystem.MESSAGE_LOAD_RENDERABLES, renderables));
    }
}

export default SpriteSystem;