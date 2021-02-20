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
    WebGLSystem,
    Entity,
    Transform,
    Polygon,
    Camera,
    Material,
    Vector,
    Color,
    Primitive,
    DrawMode,
    PrimitiveSystem,
    Motion,
    MotionSystem,
    InterpolationSystem,
    Renderable,
    Message,
    Matrix3D,
    Matrix4D
} from "jamjar";

class StoppableGame extends Game {

    private gl: WebGL2RenderingContext;

    constructor(messageBus: IMessageBus, gl: WebGL2RenderingContext) {
        super(messageBus, "stoppable-game");
        this.gl = gl;
    }

    OnStart(): void {
        new WebGLSystem(messageBus, this.gl);
        new PrimitiveSystem(messageBus);
        new MotionSystem(messageBus);
        new InterpolationSystem(messageBus);

        // Create camera
        const cameraEntity = new Entity(this.messageBus);
        cameraEntity.Add(new Camera());
        cameraEntity.Add(new Transform());

        // Create primitive to display
        const square = new Entity(this.messageBus);
        square.Add(new Transform(Vector.New(0, 0), Vector.New(10, 10)));
        square.Add(new Motion(undefined, undefined, 1));
        square.Add(new Primitive(
            new Material({
                color: new Color(1, 0, 0, 1)
            }),
            0,
            Polygon.RectangleByDimensions(1, 1, undefined, undefined, true),
            DrawMode.LINE_STRIP
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

// Set up vector and renderable pooling
Vector.Init(200);
Renderable.Init(100);
Message.Init(500);
Matrix4D.Init(30);
Matrix3D.Init(30);

// Create message bus and entity manager
const messageBus = new MessageBus();
new EntityManager(messageBus);

// Create and start game
new StoppableGame(messageBus, gl).Start();
