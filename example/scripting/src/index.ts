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
import Message from "jamjar/lib/message/message";
import WebGLSystem from "jamjar/lib/standard/webgl/webgl_system";
import ScriptingEngineSystem from "jamjar/lib/standard/scripting_engine/scripting_engine_system";
import HTTPScriptSystem from "jamjar/lib/standard/http_script/http_script_system";
import ScriptRequest from "jamjar/lib/scripting/script_request";
import Entity from "jamjar/lib/entity/entity";
import Transform from "jamjar/lib/standard/transform/transform";
import Vector from "jamjar/lib/geometry/vector";
import Collider from "jamjar/lib/standard/collision/collider";
import Polygon from "jamjar/lib/shape/polygon";
import Primitive from "jamjar/lib/standard/primitive/primitive";
import Color from "jamjar/lib/rendering/color";
import Material from "jamjar/lib/rendering/material/material";
import DrawMode from "jamjar/lib/rendering/draw_mode";
import PrimitiveSystem from "jamjar/lib/standard/primitive/primitive_system";
import MotionSystem from "jamjar/lib/standard/motion/motion_system";
import InterpolationSystem from "jamjar/lib/standard/interpolation/interpolation_system";
import Camera from "jamjar/lib/standard/camera/camera";
import CollisionSystem from "jamjar/lib/standard/collision/collision_system";
import Motion from "jamjar/lib/standard/motion/motion";

class ScriptingGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "shader-example");
    }

    OnStart(): void {
        this.messageBus.Publish(new Message<ScriptRequest>(ScriptRequest.MESSAGE_REQUEST_LOAD, new ScriptRequest(
            "test-script",
            "assets/script.js"
        )));

        const virtualSize = new Vector(160, 90);
        const viewportPosition = new Vector(0, 0);
        const viewportScale = new Vector(1, 1);
        const backgroundColor = new Color(0, 0, 0, 1);

        const camera = new Entity(this.messageBus);
        camera.Add(new Transform(new Vector(0, 0)));
        camera.Add(new Camera(backgroundColor, viewportPosition, viewportScale, virtualSize));

        const a = new Entity(this.messageBus);
        a.Add(new Transform(new Vector(-70, 0), new Vector(12, 12)));
        a.Add(new Collider(Polygon.RectangleByDimensions(1, 1), "test-script"));
        a.Add(new Motion(new Vector(20,0)));
        a.Add(new Primitive(
            new Material({
                color: new Color(0.54,1,0.54,1)
            }),
            0,
            new Polygon([
                new Vector(-0.5,-0.5),
                new Vector(-0.5, 0.5),
                new Vector(0.5, 0.5),
                new Vector(0.5,-0.5),
                new Vector(-0.5,-0.5)
            ]),
            DrawMode.LINE_STRIP
        ));

        const b = new Entity(this.messageBus);
        b.Add(new Transform(new Vector(10, 30), new Vector(12, 12)));
        b.Add(new Collider(Polygon.RectangleByDimensions(1, 1), "test-script"));
        b.Add(new Motion(new Vector(0,-20)));
        b.Add(new Primitive(
            new Material({
                color: new Color(0.54,1,0.54,1)
            }),
            0,
            new Polygon([
                new Vector(-0.5,-0.5),
                new Vector(-0.5, 0.5),
                new Vector(0.5, 0.5),
                new Vector(0.5,-0.5),
                new Vector(-0.5,-0.5)
            ]),
            DrawMode.LINE_STRIP
        ));

        const c = new Entity(this.messageBus);
        c.Add(new Transform(new Vector(70, 20), new Vector(12, 12)));
        c.Add(new Collider(Polygon.RectangleByDimensions(1, 1), "test-script"));
        c.Add(new Motion(new Vector(-30,0)));
        c.Add(new Primitive(
            new Material({
                color: new Color(0.54,1,0.54,1)
            }),
            0,
            new Polygon([
                new Vector(-0.5,-0.5),
                new Vector(-0.5, 0.5),
                new Vector(0.5, 0.5),
                new Vector(0.5,-0.5),
                new Vector(-0.5,-0.5)
            ]),
            DrawMode.LINE_STRIP
        ));


        const obstacle = new Entity(this.messageBus);
        obstacle.Add(new Transform(new Vector(0, 10), new Vector(12, 12)));
        obstacle.Add(new Collider(Polygon.RectangleByDimensions(1, 1)));
        obstacle.Add(new Primitive(
            new Material({
                color: new Color(1,0.5,0.54,1)
            }),
            0,
            new Polygon([
                new Vector(-0.5,-0.5),
                new Vector(-0.5, 0.5),
                new Vector(0.5, 0.5),
                new Vector(0.5,-0.5),
                new Vector(-0.5,-0.5)
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
