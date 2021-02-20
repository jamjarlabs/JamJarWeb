/*
Copyright 2021 JamJar Authors

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

import {
    Game,
    IMessageBus,
    EntityManager,
    MessageBus,
    Message,
    WebGLSystem,
    HTTPImageSystem,
    SpriteSystem,
    ImageRequest,
    TextureFiltering,
    Entity,
    Transform,
    Sprite,
    Camera,
    Material,
    Texture,
    Vector,
    Renderable
} from "jamjar";

class ZOrderGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "z-order-example");
    }

    OnStart(): void {
        // Load sprite sheet
        this.messageBus.Publish(Message.New<ImageRequest>(ImageRequest.MESSAGE_REQUEST_LOAD, new ImageRequest(
            "example_sheet",
            "assets/example.png",
            {
                minFilter: TextureFiltering.NEAREST,
                magFilter: TextureFiltering.NEAREST,
            }
        )));

        // Divide sprite sheet
        const exampleSpriteSheet = Texture.GenerateSpritesheetIndex(1, 4);

        // Create camera
        const cameraEntity = new Entity(this.messageBus);
        cameraEntity.Add(new Camera());
        cameraEntity.Add(new Transform());

        // Create entities
        const near = new Entity(this.messageBus);
        near.Add(new Transform(Vector.New(-11, 0), Vector.New(20,20)));
        near.Add(new Sprite(
            new Material({
                texture: new Texture("example_sheet", exampleSpriteSheet[3]),
            }), 5
        ));

        const medium = new Entity(this.messageBus);
        medium.Add(new Transform(Vector.New(0, 11), Vector.New(20,20)));
        medium.Add(new Sprite(
            new Material({
                texture: new Texture("example_sheet", exampleSpriteSheet[2]),
            }), 2
        ));

        const far = new Entity(this.messageBus);
        far.Add(new Transform(Vector.New(11, 0), Vector.New(20,20)));
        far.Add(new Sprite(
            new Material({
                texture: new Texture("example_sheet", exampleSpriteSheet[1]),
            }), 1
        ));

        const evenFurther = new Entity(this.messageBus);
        evenFurther.Add(new Transform(Vector.New(0, -11), Vector.New(20,20)));
        evenFurther.Add(new Sprite(
            new Material({
                texture: new Texture("example_sheet", exampleSpriteSheet[0]),
            }), 0
        ));
    }
}

if (window.JamJar === undefined) {
    throw ("Missing required JamJar configuration options");
}

if (window.JamJar.CanvasID === undefined) {
    throw ("Missing required CanvasID");
}

// Get canvas
const canvas = document.getElementById(window.JamJar.CanvasID) as HTMLCanvasElement;

// Get WebGL2 context
const gl = canvas.getContext("webgl2", { alpha: false });
if (!gl) {
    throw ("WebGL2 not supported in this browser")
}

// Set up pooling
Vector.Init(400);
Renderable.Init(200);

// Create message bus and entity manager
const messageBus = new MessageBus();
new EntityManager(messageBus);

// Create game systems
new WebGLSystem(messageBus, gl);
new SpriteSystem(messageBus);
new HTTPImageSystem(messageBus);

// Create and start game
new ZOrderGame(messageBus).Start();
