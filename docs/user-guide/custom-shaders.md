# Custom Shaders

JamJar allows supplying custom shaders, with complete control over source code,
injected variables, and when to apply them.

## Supported Renderers

JamJar only supports WebGL2.

## Supported Shader Languages

- GLSL ES 1.0/2.0/3.0

## Creating a Simple Custom Fragment Shader

Outlined below are the steps for creating a simple custom shader using GLSL ES
3.0. We will be making a really simple fragment shader that will render
everything as green rather than using a texture.

- Make sure you have a rendering system initialized, alongside a Sprite
  pre-rendering system:
```typescript
import Game from "jamjar/lib/game"
import IMessageBus from "jamjar/lib/message/imessage_bus";
import EntityManager from "jamjar/lib/entity/entity_manager";
import MessageBus from "jamjar/lib/message/message_bus";
import WebGLSystem from "jamjar/lib/standard/webgl/webgl_system";
import SpriteSystem from "jamjar/lib/standard/sprite/sprite_system";

// Game definition
class ShaderGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "shader-example");
    }

    OnStart(): void {
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

// Create and start game
new ShaderGame(messageBus).Start();
```

- Publish a message with the new shader you want to create.

```typescript
...
import ShaderAsset from "jamjar/lib/rendering/shader_asset";
import GLSLShader from "jamjar/lib/standard/glsl/glsl_shader";

// Game definition
class ShaderGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "shader-example");
    }

    OnStart(): void {
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
        )))
    }
}

...
```

- Now the shader can be used in materials and can be used to override a texture
  when rendering an object.

```typescript
...
import Entity from "jamjar/lib/entity/entity";
import Transform from "jamjar/lib/standard/transform/transform";
import Sprite from "jamjar/lib/standard/sprite/sprite";
import Polygon from "jamjar/lib/standard/shape/polygon";
import ImageAsset from "jamjar/lib/rendering/image_asset";
import Camera from "jamjar/lib/standard/camera/camera";

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
        )))

        // Load texture, will be overridden by custom shader
        this.messageBus.Publish(new Message<[string, string]>(ImageAsset.MESSAGE_REQUEST_LOAD, ["example", "assets/example.png"]));

        // Create camera
        const cameraEntity = new Entity(this.messageBus);
        cameraEntity.Add(new Camera());
        cameraEntity.Add(new Transform());

        // Create example entity
        const example = new Entity(this.messageBus);
        example.Add(new Transform());

        // Create sprite using a material with the previously loaded texture,
        // alongside using our custom fragment shader with the default
        // vertex shader
        example.Add(new Sprite(
            new Material(
                new Texture("example", Polygon.Rectangle(1,1).GetFloat32Array()),
                [ "example-shader", ShaderAsset.DEFAULT_VERTEX_SHADER_NAME ]
            ), 0, Polygon.Rectangle(1,1)
        ));
    }
}

...
```

- This will result in a square being rendered, and its texture being overridden
  by the fragment shader, resulting in it only rendering a green square.

The full code for this guide can be found in
[`/example/custom_fragment_shader`](https://github.com/jamjarlabs/JamJar/tree/master/example/custom_fragment_shader)
in the main JamJar repository.