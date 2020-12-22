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

import Message from "./message/message";
import System from "./system/system";
import IGame from "./igame";
import IMessageBus from "./message/imessage_bus";

/**
 * Game is the core engine class.
 * The game contains the game loop, which handles triggering updates in systems and
 * setting up rendering.
 */
abstract class Game implements IGame {
    public static readonly MESSAGE_PRE_RENDER = "pre_render";
    public static readonly MESSAGE_RENDER = "render";
    public static readonly MESSAGE_POST_RENDER = "post_render";

    private static readonly TIME_STEP = 0.01;

    public readonly name: string;

    protected messageBus: IMessageBus;

    private accumulator: number;
    private currentTime: number;

    private frameRequestCallback: (callback: FrameRequestCallback) => number;

    constructor(
        messageBus: IMessageBus,
        name = "game",
        frameRequestCallback: (callback: FrameRequestCallback) => number = window.requestAnimationFrame.bind(window)
    ) {
        this.name = name;
        this.messageBus = messageBus;
        this.accumulator = 0;
        this.currentTime = 0;
        this.frameRequestCallback = frameRequestCallback;
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
    public Start(): void {
        this.OnStart();
        this.messageBus.Dispatch();
        this.accumulator = 0;
        this.currentTime = 0;
        this.loop(0);
    }

    /**
     * loop is the core game loop, it handles repeatedly calling itself to manage updates and rendering.
     * Updates should be fixed and occur consistently, therefore there is an accumulator to make sure
     * that enough updates happen to keep up with the time step.
     * Rendering can occur as fast as possible, rendering systems will have to account for interpolation,
     * which uses the alpha value that is calculated.
     * See: https://gameprogrammingpatterns.com/game-loop.html
     */
    private loop(timestamp: number): void {
        // Calculate time since last frame.
        let frameTime = (timestamp - this.currentTime) / 1000;
        if (frameTime > 0.25) {
            // If frametime gets execssive, cap it.
            // This can occur if the browser is switched to another tab.
            frameTime = 0.25;
        }

        this.currentTime = timestamp;

        this.accumulator += frameTime;
        while (this.accumulator >= Game.TIME_STEP) {
            this.messageBus.Publish(Message.New(System.MESSAGE_UPDATE, Game.TIME_STEP));
            this.messageBus.Dispatch();
            this.accumulator -= Game.TIME_STEP;
        }

        this.messageBus.DispatchUntilEmpty();

        // Alpha constant for interpolation calculations
        const alpha = this.accumulator / Game.TIME_STEP;
        // Pre-render and dispatch, must be immediately dispatched to allow pre-render systems to
        // send messages to the renderer before the actual render call.
        this.messageBus.Publish(Message.New(Game.MESSAGE_PRE_RENDER, alpha));
        this.messageBus.Dispatch();
        // Render
        this.messageBus.Publish(Message.New(Game.MESSAGE_RENDER, alpha));
        // Post render
        this.messageBus.Publish(Message.New(Game.MESSAGE_POST_RENDER, alpha));
        this.messageBus.Dispatch();
        this.frameRequestCallback(this.loop.bind(this));
    }
}

export default Game;
