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
import SystemEntity from "../../system/system_entity";
import IScene from "../../scene/iscene";
import Text from "./text";
import FontAsset from "../../rendering/font_asset";
import TinySDF from "tiny-sdf";
import ImageAsset from "../../rendering/image_asset";
import Renderable from "../../rendering/renderable";
import RenderSystem from "../render/render_system";
import Polygon from "../shape/polygon";
import Material from "../../rendering/material";
import Texture from "../../rendering/texture";
import FontMapping from "./font_mapping";
import Vector from "../../geometry/vector";
import TextAlignment from "./text_alignment";
import TextRender from "./text_render";
import Camera from "../camera/camera";
import UI from "../ui/ui";

class TextSystem extends System {

    public static readonly MESSAGE_REQUEST_FLUSH = "request_font_flush";
    public static readonly MESSAGE_REQUEST_CLEAR = "request_font_clear";

    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Text.KEY].every((type) => components.some(
            component => component.key === type
        )) || [Transform.KEY, Camera.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    private mappings: Map<string, FontMapping>;

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        mappings: Map<string, FontMapping> = new Map(),
        subscriberID?: number) {
        super(messageBus, scene, TextSystem.EVALUATOR, entities, subscriberID);
        this.mappings = mappings;
        this.messageBus.Subscribe(this, [ 
            Game.MESSAGE_PRE_RENDER, 
            FontAsset.MESSAGE_REQUEST_LOAD,
            TextSystem.MESSAGE_REQUEST_CLEAR,
            TextSystem.MESSAGE_REQUEST_FLUSH
        ]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case Game.MESSAGE_PRE_RENDER: {
                const renderMessage = message as Message<number>;
                if (renderMessage.payload === undefined) {
                    return;
                }
                this.prepareText(renderMessage.payload);
                break;
            }
            case FontAsset.MESSAGE_REQUEST_LOAD: {
                const fontMessage = message as Message<FontAsset>;
                if (fontMessage.payload === undefined) {
                    return;
                }
                this.loadFont(fontMessage.payload);
                break;
            }
        }
    }

    private loadFont(asset: FontAsset): void {
        // Set up SDF generator
        const generator = new TinySDF(asset.size, asset.buffer, asset.radius, asset.cutoff, asset.family, asset.weight);
        // Create new mapping
        const mapping: Map<string, number> = new Map();
        const size = asset.size + asset.buffer * 2;
        const atlasSize = Math.ceil(Math.sqrt(asset.characters.length));
        const characterImages: ImageData[] = [];
        for (let i = 0; i < asset.characters.length; i++) {
            const char = asset.characters[i];
            const charData = generator.draw(char);
            characterImages.push(charData);
            mapping.set(char, i);
        }
        // Set up empty bitmap array
        const bitmapData = new Uint8ClampedArray((size * size * 4) * (atlasSize * atlasSize));
        // Each row of bitmap
        for (let i = 0; i < size * atlasSize; i++) {
            const rowIndex = Math.floor(i / size) * atlasSize;
            for (let j = 0; j < atlasSize; j++) {
                const fillStart = (i * size * atlasSize * 4) + (j * size * 4);
                const subStart = (i % size) * size * 4;
                if (rowIndex + j >= characterImages.length) {
                    // empty
                    let empty = new Uint8ClampedArray(size * 4);
                    empty = empty.fill(0);
                    bitmapData.set(empty, fillStart)
                    continue;
                }
                const subData = characterImages[rowIndex + j].data.subarray(subStart, subStart + size * 4);
                bitmapData.set(subData, fillStart);
            }
        }
        this.mappings.set(
            asset.name,
            new FontMapping(
                atlasSize,
                asset,
                mapping
            )
        );
        this.messageBus.Publish(new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
            `font_${asset.name}`,
            new ImageData(bitmapData, size * atlasSize, size * atlasSize),
            true
        )));
    }

    private prepareText(alpha: number): void {
        const renderables: Renderable<TextRender>[] = [];
        // Filter to only get text elements
        const textEntities = [...this.entities.values()].filter((entity) => {
            return entity.Get(Text.KEY) && entity.Get(Transform.KEY);
        });
        for (const entity of textEntities) {
            const text = entity.Get(Text.KEY) as Text;
            const transform = entity.Get(Transform.KEY) as Transform;

            const mapping = this.mappings.get(text.font);
            if (mapping === undefined) {
                continue;
            }

            const ui = entity.Get(UI.KEY) as UI | undefined;

            for (let i = 0; i < text.value.length; i++) {
                const char = text.value[i];
                const position = mapping.characters.get(char);
                if(position === undefined) {
                    continue;
                }

                let xPos;
                switch(text.align) {
                    case TextAlignment.Left: {
                        xPos = i + 0.5;
                        break;
                    }
                    case TextAlignment.Center: {
                        xPos = i - (text.value.length-1)/2;
                        break;
                    }
                    case TextAlignment.Right: {
                        xPos = i - (text.value.length-1) - 0.5;
                        break;
                    }
                    default: {
                        throw(`Invalid text alignment: ${text.align}`)
                    }
                }

                let charTransform: Transform;
                if (ui === undefined) {
                    // Not UI text
                    charTransform = new Transform(
                        transform.position.Add(new Vector(xPos * transform.scale.x/2 + xPos * text.spacing * transform.scale.x/2, 0)),
                        transform.scale,
                        transform.angle
                    );
        
                } else {
                    const cameraEntity = this.entities.get(ui.camera.id);
                    if (cameraEntity === undefined) {
                        // If no camera found, skip this entity
                        break;
                    }
                    // Get components of the camera entity
                    const camera = cameraEntity.Get(Camera.KEY) as Camera | undefined;
                    const cameraTransform = cameraEntity.Get(Transform.KEY) as Transform | undefined;
                    if (camera === undefined || cameraTransform === undefined) {
                        // If the components are not found, must not be a valid camera, skip this entity
                        break;
                    }
                    const textPosition = cameraTransform.position
                        .Add(transform.position)
                        .Multiply(camera.virtualScale.Scale(0.5));
                    
                    const charScale = transform.scale.Multiply(camera.virtualScale);
                    // UI text
                    charTransform = new Transform(
                        textPosition.Add(new Vector((xPos * (charScale.x / 2) + xPos * text.spacing * charScale.x / 2), 1)),
                        charScale,
                        transform.angle
                    );
                }

                const x = position % mapping.width;
                const y = Math.floor(position / mapping.width);
                const charSize = 1 / mapping.width;
                renderables.push(new Renderable<TextRender>(
                    text.zOrder,
                    Polygon.Rectangle(1,1).GetFloat32Array(),
                    charTransform.InterpolatedMatrix4D(alpha).GetFloat32Array(),
                    new Material(
                        new Texture(
                            `font_${text.font}`,
                            new Polygon([
                                new Vector(x * charSize, y * charSize), 
                                new Vector(x * charSize + charSize, y * charSize), 
                                new Vector(x * charSize + charSize, y * charSize + charSize), 
                                new Vector(x * charSize, y * charSize + charSize)
                            ]).GetFloat32Array()
                        ),
                        text.shaders
                    ),
                    new TextRender(
                        mapping.asset.family,
                        mapping.asset.weight,
                        mapping.asset.buffer,
                        mapping.asset.radius,
                        mapping.asset.cutoff,
                        mapping.asset.size,
                        text.color,
                        text.zOrder,
                        text.align
                    )
                ));
            }
            
        }
        this.messageBus.Publish(new Message<Renderable<TextRender>[]>(RenderSystem.MESSAGE_LOAD_RENDERABLES, renderables));
    }
}

export default TextSystem;