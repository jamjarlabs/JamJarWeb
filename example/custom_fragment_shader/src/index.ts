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

import Game from "jamjar/lib/game"
import IMessageBus from "jamjar/lib/message/imessage_bus";
import EntityManager from "jamjar/lib/entity/entity_manager";
import MessageBus from "jamjar/lib/message/message_bus";
import WebGLSystem from "jamjar/lib/standard/webgl/webgl_system";
import HTTPImageSystem from "jamjar/lib/standard/http_image/http_image_system";
import SpriteSystem from "jamjar/lib/standard/sprite/sprite_system";
import GLSLShader from "jamjar/lib/standard/glsl/glsl_shader";
import Entity from "jamjar/lib/entity/entity";
import Transform from "jamjar/lib/standard/transform/transform";
import Sprite from "jamjar/lib/standard/sprite/sprite";
import Polygon from "jamjar/lib/shape/polygon";
import Camera from "jamjar/lib/standard/camera/camera";
import Material from "jamjar/lib/rendering/material/material";
import Message from "jamjar/lib/message/message";
import Texture from "jamjar/lib/rendering/texture/texture";
import Vector from "jamjar/lib/geometry/vector";
import ImageRequest from "jamjar/lib/rendering/image/image_request";
import ShaderAsset from "jamjar/lib/rendering/shader/shader_asset";

// Game definition
class ShaderGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "shader-example");
    }

    OnStart(): void {
        // Load shader
        const shader = new GLSLShader(
            ShaderAsset.FRAGMENT_TYPE,
            `#version 300 es
            precision mediump float;
            
            in vec2 vTextureCoordinate;
    
            out vec4 outColor;
    
            void main() {
                outColor = vec4(0,1,0,1);
            }
            `
        );
        this.messageBus.Publish(new Message<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset(
            "example-shader",
            shader
        )));

        // Load texture, will be overridden by custom shader
        this.messageBus.Publish(new Message<ImageRequest>(ImageRequest.MESSAGE_REQUEST_LOAD, new ImageRequest(
            "example",
            "assets/example.png"
        )));

        // Create camera
        const cameraEntity = new Entity(this.messageBus);
        cameraEntity.Add(new Camera());
        cameraEntity.Add(new Transform());

        // Create example entity
        const example = new Entity(this.messageBus);
        example.Add(new Transform(new Vector(0,0), new Vector(10,10)));

        // Create sprite using a material with the previously loaded texture,
        // alongside using our custom fragment shader with the default
        // vertex shader
        example.Add(new Sprite(
            new Material({
                texture: new Texture("example", Polygon.RectangleByDimensions(1,1)),
                shaders: [ "example-shader", ShaderAsset.DEFAULT_TEXTURE_VERTEX_SHADER_NAME ]
            }), 
            0, 
            Polygon.RectangleByDimensions(1,1)
        ));
    }
}

// Get canvas
const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;

// Get WebGL2 context
const gl = canvas.getContext("webgl2", { alpha: false });
if (!gl) {
    throw ("WebGL2 not supported in this browser")
}

// Create message bus and entity manager
const messageBus = new MessageBus();
new EntityManager(messageBus);

// Create WebGLSystem
new WebGLSystem(messageBus, gl);

// Create SpriteSystem
new SpriteSystem(messageBus);

// Create Image loading system
new HTTPImageSystem(messageBus);

// Create and start game
new ShaderGame(messageBus).Start();