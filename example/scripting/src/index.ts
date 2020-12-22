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

import {
    Game,
    IMessageBus,
    EntityManager,
    MessageBus,
    Message,
    WebGLSystem,
    ScriptingEngineSystem,
    HTTPScriptSystem,
    ScriptRequest,
    Entity,
    Transform,
    Vector,
    Collider,
    Polygon,
    Primitive,
    Color,
    Material,
    DrawMode,
    PrimitiveSystem,
    MotionSystem,
    InterpolationSystem,
    Camera,
    CollisionSystem,
    Motion, Renderable
} from "jamjar";

class ScriptingGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "shader-example");
    }

    OnStart(): void {
        this.messageBus.Publish(Message.New<ScriptRequest>(ScriptRequest.MESSAGE_REQUEST_LOAD, new ScriptRequest(
            "enter-script",
            "assets/collision_enter.js"
        )));

        this.messageBus.Publish(Message.New<ScriptRequest>(ScriptRequest.MESSAGE_REQUEST_LOAD, new ScriptRequest(
            "exit-script",
            "assets/collision_exit.js"
        )));

        const virtualSize = Vector.New(160, 90);
        const viewportPosition = Vector.New(0, 0);
        const viewportScale = Vector.New(1, 1);
        const backgroundColor = new Color(0, 0, 0, 1);

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(Vector.New(0, 0)));
        camera.Add(new Camera(backgroundColor, viewportPosition, viewportScale, virtualSize));

        const a = new Entity(this.messageBus);
        a.Add(new Transform(Vector.New(-70, 0), Vector.New(12, 12)));
        a.Add(new Collider(Polygon.RectangleByDimensions(1, 1), "enter-script", "exit-script"));
        a.Add(new Motion(Vector.New(20,0)));
        a.Add(new Primitive(
            new Material({
                color: new Color(0,1,0,1)
            }),
            0,
            new Polygon([
                Vector.New(-0.5,-0.5),
                Vector.New(-0.5, 0.5),
                Vector.New(0.5, 0.5),
                Vector.New(0.5,-0.5),
                Vector.New(-0.5,-0.5)
            ]),
            DrawMode.LINE_STRIP
        ));

        const b = new Entity(this.messageBus);
        b.Add(new Transform(Vector.New(10, 30), Vector.New(12, 12)));
        b.Add(new Collider(Polygon.RectangleByDimensions(1, 1), "enter-script", "exit-script"));
        b.Add(new Motion(Vector.New(0,-20)));
        b.Add(new Primitive(
            new Material({
                color: new Color(0,1,0,1)
            }),
            0,
            new Polygon([
                Vector.New(-0.5,-0.5),
                Vector.New(-0.5, 0.5),
                Vector.New(0.5, 0.5),
                Vector.New(0.5,-0.5),
                Vector.New(-0.5,-0.5)
            ]),
            DrawMode.LINE_STRIP
        ));

        const c = new Entity(this.messageBus);
        c.Add(new Transform(Vector.New(70, 20), Vector.New(12, 12)));
        c.Add(new Collider(Polygon.RectangleByDimensions(1, 1), "enter-script", "exit-script"));
        c.Add(new Motion(Vector.New(-30,0)));
        c.Add(new Primitive(
            new Material({
                color: new Color(0,1,0,1)
            }),
            0,
            new Polygon([
                Vector.New(-0.5,-0.5),
                Vector.New(-0.5, 0.5),
                Vector.New(0.5, 0.5),
                Vector.New(0.5,-0.5),
                Vector.New(-0.5,-0.5)
            ]),
            DrawMode.LINE_STRIP
        ));


        const obstacle = new Entity(this.messageBus);
        obstacle.Add(new Transform(Vector.New(0, 10), Vector.New(12, 12)));
        obstacle.Add(new Collider(Polygon.RectangleByDimensions(1, 1)));
        obstacle.Add(new Primitive(
            new Material({
                color: new Color(1,0.5,0.54,1)
            }),
            0,
            new Polygon([
                Vector.New(-0.5,-0.5),
                Vector.New(-0.5, 0.5),
                Vector.New(0.5, 0.5),
                Vector.New(0.5,-0.5),
                Vector.New(-0.5,-0.5)
            ]),
            DrawMode.LINE_STRIP
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

// Set up pooling
Vector.Init(200);
Renderable.Init(200);

// Create message bus and entity manager
const messageBus = new MessageBus();
new EntityManager(messageBus);

// Game systems
new WebGLSystem(messageBus, gl);
new ScriptingEngineSystem(messageBus, "scripting");
new HTTPScriptSystem(messageBus);
new PrimitiveSystem(messageBus);
new MotionSystem(messageBus);
new InterpolationSystem(messageBus);
new CollisionSystem(messageBus);

// Create and start game
new ScriptingGame(messageBus).Start();
