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

- Make sure you have a rendering system initialized, a Sprite
  pre-rendering system, and an image loading system:
```typescript

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

// Create Image loading system
new HTTPImageSystem(messageBus);

// Create and start game
new ShaderGame(messageBus).Start();
```

- Publish a message with the new shader you want to create.

```typescript
...

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
        this.messageBus.Publish(Message.New<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset(
            "example-shader",
            shader
        )));
    }
}

...
```

- Now the shader can be used in materials and can be used to override a texture
  when rendering an object.

```typescript
...

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
        this.messageBus.Publish(Message.New<ShaderAsset>(ShaderAsset.MESSAGE_REQUEST_LOAD, new ShaderAsset(
            "example-shader",
            shader
        )));

        // Load texture, will be overridden by custom shader
        this.messageBus.Publish(Message.New<ImageRequest>(ImageRequest.MESSAGE_REQUEST_LOAD, new ImageRequest(
            "example",
            "assets/example.png"
        )));

        // Create camera
        const cameraEntity = new Entity(this.messageBus);
        cameraEntity.Add(new Camera());
        cameraEntity.Add(new Transform());

        // Create example entity
        const example = new Entity(this.messageBus);
        example.Add(new Transform(Vector.New(0,0), Vector.New(10,10)));

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
...
```

- This will result in a square being rendered, and its texture being overridden
  by the fragment shader, resulting in it only rendering a green square.

The full code for this guide can be found in
[`/example/custom_fragment_shader`](https://github.com/jamjarlabs/JamJar/tree/master/example/custom_fragment_shader)
in the main JamJar repository.
