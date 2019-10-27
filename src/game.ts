/*
Copyright 2019 JamJar Authors

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

import MessageBus from "./message/message_bus";
import Message from "./message/message";
import System from "./system/system";
import EntityManager from "./entity/entity_manager";
import MotionSystem from "./motion/motion_system";
import SpriteSystem from "./sprite/sprite_system";
import CameraSystem from "./camera/camera_system";
import InterpolationSystem from "./interpolation/interpolation_system";

/**
 * Game is the core engine class, tying together all of the parts of the engine.
 * The game is where the game is initialised; scenes, entities, components and systems.
 * The game contains the game loop, which handles triggering updates in systems and
 * setting up rendering.
 */
abstract class Game {

    private static readonly TIME_STEP = 1000 / 100;

    public readonly name: string;

    protected messageBus: MessageBus;

    private gl: WebGL2RenderingContext;
    private accumulator: number;
    private currentTime: number;

    constructor(canvas: HTMLCanvasElement, name = "game") {
        this.name = name;
        this.messageBus = new MessageBus();
        this.accumulator = 0;
        this.currentTime = 0;
        const glContext = canvas.getContext("webgl2");
        if (!glContext) {
            throw("WebGL2 not supported by this browser");
        }
        this.gl = glContext;
        new EntityManager(this.messageBus);
    }

    private coreSystems(): void {
        new InterpolationSystem(this.messageBus);
        new MotionSystem(this.messageBus);
        new SpriteSystem(this.messageBus, this.gl);
        new CameraSystem(this.messageBus, this.gl);
    }

    /**
     * OnStart is triggered when the game is started.
     */
    protected OnStart(): void {
        return;
    }
    
    /**
     * Start kicks off the game, setting up systems and starting the game loop.
     */
    public Start(): void  {
        this.OnStart();
        this.coreSystems()
        this.messageBus.Dispatch();
        this.accumulator = 0;
		this.currentTime = Date.now();
        this.loop();
    }

    /**
     * loop is the core game loop, it handles repeatedly calling itself to manage updates and rendering.
     * Updates should be fixed and occur consistently, therefore there is an accumulator to make sure
     * that enough updates happen to keep up with the time step.
     * Rendering can occur as fast as possible, rendering systems will have to account for interpolation,
     * which uses the alpha value that is calculated.
     * See: https://gameprogrammingpatterns.com/game-loop.html
     */
    private loop(): void  {
		const newTime = Date.now();
		const frameTime = newTime - this.currentTime;
		this.currentTime = newTime;

		this.accumulator += frameTime;
		while (this.accumulator >= Game.TIME_STEP) {
			this.messageBus.Publish(new Message(System.MESSAGE_UPDATE, Game.TIME_STEP / 1000))
			this.messageBus.Dispatch();
			this.accumulator -= Game.TIME_STEP;
		}
		const alpha = this.accumulator / Game.TIME_STEP;
        // render
        this.messageBus.Publish(new Message(CameraSystem.MESSAGE_PREPARE_CAMERAS));
        this.messageBus.Publish(new Message(SpriteSystem.MESSAGE_RENDER_SPRITES, alpha));
        this.messageBus.Publish(new Message(InterpolationSystem.MESSAGE_INTERPOLATE_TRANSFORMS));
		this.messageBus.Dispatch();
		requestAnimationFrame(() => { this.loop(); });
    }
}

export default Game;