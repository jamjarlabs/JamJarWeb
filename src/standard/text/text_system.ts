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

import { ISDFGenerator, SDFGeneratorFactory } from "tiny-sdf";
import TinySDF from "tiny-sdf";
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
import ImageAsset from "../../rendering/image/image_asset";
import Renderable from "../../rendering/renderable";
import RenderSystem from "../render/render_system";
import Polygon from "../shape/polygon";
import Material from "../../rendering/material/material";
import Texture from "../../rendering/texture/texture";
import FontMapping from "./font_mapping";
import Vector from "../../geometry/vector";
import TextAlignment from "./text_alignment";
import TextRender from "./text_render";
import Camera from "../camera/camera";
import UI from "../ui/ui";
import FontRequest from "../../rendering/font/font_request";
import FontAsset from "../../rendering/font/font_asset";
import DrawMode from "../../rendering/draw_mode";

/**
 * TextSystem is a pre-rendering system, taking in text components and
 * converting them into renderables for render systems to use.
 * This system will also handle preparing fonts and generating font atlases to
 * be loaded as textures by rendering systems.
 */
class TextSystem extends System {

    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Text.KEY].every((type) => components.some(
            component => component.key === type
        )) || [Transform.KEY, Camera.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    private static readonly DEFAULT_SDF_GENERATOR_FACTORY = (
        fontSize?: number, 
        buffer?: number, 
        radius?: number, 
        cutoff?: number, 
        fontFamily?: string, 
        fontWeight?: string): ISDFGenerator => new TinySDF(fontSize, buffer, radius, cutoff, fontFamily, fontWeight);

    private mappings: Map<string, FontMapping>;
    private sdfGeneratorFactory: SDFGeneratorFactory;

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        mappings: Map<string, FontMapping> = new Map(),
        sdfGeneratorFactory: SDFGeneratorFactory = TextSystem.DEFAULT_SDF_GENERATOR_FACTORY,
        subscriberID?: number) {
        super(messageBus, scene, TextSystem.EVALUATOR, entities, subscriberID);
        this.mappings = mappings;
        this.sdfGeneratorFactory = sdfGeneratorFactory;
        this.messageBus.Subscribe(this, [ 
            Game.MESSAGE_PRE_RENDER, 
            FontRequest.MESSAGE_REQUEST_LOAD,
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
            case FontRequest.MESSAGE_REQUEST_LOAD: {
                const fontMessage = message as Message<FontRequest>;
                if (fontMessage.payload === undefined) {
                    return;
                }
                this.loadFont(fontMessage.payload);
                break;
            }
        }
    }

    private loadFont(request: FontRequest): void {
        // Set up SDF generator
        const generator = this.sdfGeneratorFactory(request.size, request.buffer, request.radius, request.cutoff, request.family, request.weight);

        // Calculate size of each character glyph in pixels
        const glyphSize = request.size + request.buffer * 2;
        // Calculate dimensions of glyph atlas, must be a square, meaning
        // that this is the minimum x^2 that can fit in all of the glyphs
        const atlasSize = Math.ceil(Math.sqrt(request.characters.length));

        // Calculate image data for each character, and calculate
        // mapping data for each character
        const characterImages: ImageData[] = [];
        const mapping: Map<string, number> = new Map();
        for (let i = 0; i < request.characters.length; i++) {
            const char = request.characters[i];
            const charData = generator.draw(char);
            characterImages.push(charData);
            mapping.set(char, i);
        }

        // Set up empty bitmap array to use to store all of the combined
        // characters in a glyph atlas, contains enough entries for each
        // glyph's pixels, represented in RGBA (4 channels)
        const glyphAtlas = new Uint8ClampedArray((glyphSize * glyphSize * 4) * (atlasSize * atlasSize));
        
        // Build up the glyph atlas, inserting each character's glyph
        // data into the atlas
        /**
         * The atlas array operates left to right, then top to bottom, meaning that
         * a row-by-row approach is required. For the first row, it first inserts
         * the first row of the first image, then inserts the first row of the
         * second image, then the first row of the third image. For the second
         * row it will do the same with the second row of each image. 
         * The algorithm needs to understand how many images will fit in each
         * column, and also which images are in which row.
         * If all the images are inserted, the rest of the entries should be
         * blank (all 0).
         * |------------------|
         * | 1  1  2  2  3  3 |
         * | 1  1  2  2  3  3 |
         * | 4  4  5  5  >  - |
         * | -  -  -  -  -  - |
         * | -  -  -  -  -  - |
         * | -  -  -  -  -  - |
         * | -  -  -  -  -  - |
         * |------------------|
         */
        // Iterate down every row in the glyph atlas
        for (let i = 0; i < glyphSize * atlasSize; i++) {
            // Get the index of the character for the first column
            // of this row
            const rowIndex = Math.floor(i / glyphSize) * atlasSize;
            // Iterate across for the number of images that can fit in
            // horizontally
            for (let j = 0; j < atlasSize; j++) {
                // Determine the index of the glyph atlas to insert
                // data into
                const fillStart = (i * glyphSize * atlasSize * 4) + (j * glyphSize * 4);
                // If current position doesn't have any character to insert
                if (rowIndex + j >= characterImages.length) {
                    // Insert blank (all 0)
                    let empty = new Uint8ClampedArray(glyphSize * 4);
                    empty = empty.fill(0);
                    glyphAtlas.set(empty, fillStart);
                    continue;
                }
                // Determine the starting index in the image being inserted to
                // sample from, this will be the index of the start of a row
                const subStart = (i % glyphSize) * glyphSize * 4;
                // Get the row being inserted from the character image
                const subData = characterImages[rowIndex + j].data.subarray(subStart, subStart + glyphSize * 4);
                // Insert into the glyph atlas
                glyphAtlas.set(subData, fillStart);
            }
        }

        // Save font mapping, allows for retrieval of font at render time,
        // alongside information for retrieving character positioning/layout
        this.mappings.set(
            request.name,
            new FontMapping(
                atlasSize,
                new FontAsset(
                    request.name,
                    request
                ),
                mapping
            )
        );

        // Publish the newly generated bitmap image to load as a texture
        this.messageBus.Publish(new Message<ImageAsset>(ImageAsset.MESSAGE_FINISH_LOAD, new ImageAsset(
            `font_${request.name}`,
            new ImageData(glyphAtlas, glyphSize * atlasSize, glyphSize * atlasSize),
            true,
            request.xWrap,
            request.yWrap,
            request.magFilter,
            request.minFilter,
            request.generateMipmaps
        )));
    }

    private prepareText(alpha: number): void {
        const renderables: Renderable<TextRender>[] = [];

        // Get text entities
        const textEntities = [...this.entities.values()].filter((entity) => {
            return entity.Get(Text.KEY) && entity.Get(Transform.KEY);
        });

        // Iterate over each entity that has text to be rendered
        for (const entity of textEntities) {
            const text = entity.Get(Text.KEY) as Text;
            const transform = entity.Get(Transform.KEY) as Transform;

            // Get font mapping, if it doesn't exist, skip rendering
            // this text
            const mapping = this.mappings.get(text.font);
            if (mapping === undefined) {
                continue;
            }

            // Get a UI element if it is attached to the entity
            const ui = entity.Get(UI.KEY) as UI | undefined;

            // Iterate over each character to be rendered
            for (let i = 0; i < text.value.length; i++) {
                const char = text.value[i];
                
                // Get the character's mapping value, if it doesn't
                // exist skip rendering this character
                const position = mapping.characters.get(char);
                if(position === undefined) {
                    continue;
                }

                // Determine the x alignment of the text, based
                // on the text alignment options provided
                let xAlign;
                switch(text.align) {
                    case TextAlignment.Left: {
                        // +0.5 to shift first character from being centered on
                        // transform position to the right of it
                        xAlign = i + 0.5;
                        break;
                    }
                    case TextAlignment.Center: {
                        xAlign = i - (text.value.length-1)/2;
                        break;
                    }
                    case TextAlignment.Right: {
                        // Inverse of left align, with transform position set to
                        // right of the last character
                        xAlign = i - (text.value.length-1) - 0.5;
                        break;
                    }
                    default: {
                        throw(`Invalid text alignment: ${text.align}`);
                    }
                }

                // Transform for character
                let charTransform: Transform;
                if (ui === undefined) {
                    // Not part of the UI
                    /**
                     * (xAlign * transform.scale.x/2) -> determines alignment
                     * left, center, right
                     * (xAlign * text.spacing * transform.scale.x/2) ->
                     * determines spacing between characters
                     */
                    charTransform = new Transform(
                        transform.position
                            .Add(text.offset)
                            .Add(new Vector((xAlign * transform.scale.x/2) + (xAlign * text.spacing * transform.scale.x/2), 0)),
                        transform.scale,
                        transform.angle
                    );
        
                } else {
                    // Part of the UI
                    // Get the camera entity this is assigned to, if no camera
                    // found, skip this entity 
                    const cameraEntity = this.entities.get(ui.camera.id);
                    if (cameraEntity === undefined) {
                        break;
                    }
                    // Get components of the camera entity, if the components
                    // are not found, must not be a valid camera, skip this
                    // entity 
                    const camera = cameraEntity.Get(Camera.KEY) as Camera | undefined;
                    const cameraTransform = cameraEntity.Get(Transform.KEY) as Transform | undefined;
                    if (camera === undefined || cameraTransform === undefined) {
                        break;
                    }

                    // Convert the transform.position to be relative to the camera
                    const textPosition = cameraTransform.position
                        .Add(transform.position.Multiply(camera.virtualScale.Scale(0.5)))
                        .Add(text.offset.Multiply(camera.virtualScale.Scale(0.5)));
                    
                    
                    // Convert the scale to be relative to the camera
                    const charScale = transform.scale.Multiply(camera.virtualScale);
                    /**
                     * (xAlign * charScale.x / 2) -> determines alignment
                     * left, center, right
                     * (xAlign * text.spacing * charScale.x/2) ->
                     * determines spacing between characters
                     */
                    charTransform = new Transform(
                        textPosition.Add(new Vector((xAlign * charScale.x / 2) + (xAlign * text.spacing * charScale.x/2), 0)),
                        charScale,
                        transform.angle
                    );
                }

                // Determine the position in the glyph to extract the text glyph
                // from
                const x = position % mapping.width;
                const y = Math.floor(position / mapping.width);
                // Determine how wide and tall each glyph is in the texture
                // (which goes from 0 -> 1, so a glyph atlas with 10*10
                // dimensions - 100 characters - would have a character size of
                // 0.1)
                const charSize = 1 / mapping.width;
                // Create renderable for the character, include extra TextRender
                // information for shaders to use
                renderables.push(new Renderable<TextRender>(
                    text.zOrder,
                    Polygon.RectangleByDimensions(1,1),
                    charTransform.InterpolatedMatrix4D(alpha),
                    new Material(
                        {
                            texture: new Texture(
                                `font_${text.font}`,
                                Polygon.RectangleByPoints(
                                    new Vector(x * charSize, y * charSize), 
                                    new Vector(x * charSize + charSize, y * charSize + charSize)
                                )
                            ),
                            shaders: text.shaders,
                            color: text.color
                        }
                    ),
                    DrawMode.TRIANGLE_FAN,
                    new TextRender(
                        mapping.asset.request.family,
                        mapping.asset.request.weight,
                        mapping.asset.request.buffer,
                        mapping.asset.request.radius,
                        mapping.asset.request.cutoff,
                        mapping.asset.request.size,
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