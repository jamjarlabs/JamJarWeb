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
    HTTPAudioSystem,
    AudioRequest,
    AudioSource,
    AudioSourceSystem,
    Polygon,
    IEntity,
    Component,
    MapSystem,
    SystemEntity,
    IScene,
    IMessage,
    Collider,
    Pointer,
    PointerSystem,
    Renderable
} from "jamjar";

class AudioButtonSystem extends MapSystem {
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Transform.KEY, Collider.KEY].every((type) => components.some(
            component => component.key == type
        )) || [AudioSource.KEY].every((type) => components.some(
            component => component.key == type
        ));
    };

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, AudioButtonSystem.EVALUATOR, entities, subscriberID);
        this.messageBus.Subscribe(this, ["pointerdown"])
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case "pointerdown": {
                const pointerMessage = message as Message<Pointer>;
                if (pointerMessage.payload === undefined) {
                    return;
                }
                const buttons = [...this.entities.values()].filter((entity) => {
                    return entity.Get(Collider.KEY);
                });
                const audioSources = [...this.entities.values()].filter((entity) => {
                    return entity.Get(AudioSource.KEY);
                });
                for (const button of buttons) {
                    const transform = button.Get(Transform.KEY) as Transform;
                    const collider = button.Get(Collider.KEY) as Collider;

                    for (const cameraInfo of pointerMessage.payload.cameraInfos) {
                        if (!cameraInfo.withinBounds) {
                            continue;
                        }
                        if (collider.shape.Transform(transform).PointInside(cameraInfo.worldPosition)) {
                            const play = button.entity.tags.includes("play");
                            for (const audio of audioSources) {
                                const source = audio.Get(AudioSource.KEY) as AudioSource;
                                if (play && !source.playing) {
                                    source.Play();
                                }
                                if (!play && source.playing) {
                                    source.Stop();
                                }
                            }
                        }
                    }
                }
                break;
            }
        }
    }
}

class AudioGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "audio-example");
    }

    OnStart(): void {
        // Load sprite sheet
        this.messageBus.Publish(Message.New<ImageRequest>(ImageRequest.MESSAGE_REQUEST_LOAD, new ImageRequest(
            "button",
            "assets/button.png",
            {
                minFilter: TextureFiltering.NEAREST,
                magFilter: TextureFiltering.NEAREST,
            }
        )));

        this.messageBus.Publish(Message.New<AudioRequest>(AudioRequest.MESSAGE_REQUEST_LOAD, new AudioRequest(
            "example",
            "assets/example.mp3"
        )));

        const buttonSpriteSheet = Texture.GenerateSpritesheetIndex(1,2);

        // Create camera
        const cameraEntity = new Entity(this.messageBus);
        cameraEntity.Add(new Camera());
        cameraEntity.Add(new Transform());

        const audioSource = new Entity(this.messageBus);
        audioSource.Add(new AudioSource("example", {
            playing: false,
            loop: -1,
            volume: 0.2,
            playbackRate: 1
        }));

        // Create entities
        const stopButton = new Entity(this.messageBus, ["stop"]);
        stopButton.Add(new Transform(Vector.New(-40, 0), Vector.New(40,40)));
        stopButton.Add(new Sprite(
            new Material({
                texture: new Texture("button", buttonSpriteSheet[0]),
            }), 5
        ));
        stopButton.Add(new Collider(
            Polygon.RectangleByDimensions(1,1)
        ));

        // Create entities
        const playButton = new Entity(this.messageBus, ["play"]);
        playButton.Add(new Transform(Vector.New(40, 0), Vector.New(40,40)));
        playButton.Add(new Sprite(
            new Material({
                texture: new Texture("button", buttonSpriteSheet[1]),
            }), 5
        ));
        playButton.Add(new Collider(
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

const startButton = document.getElementById("start-button");
if (startButton === null) {
    throw ("Failed to find start button");
}

startButton.onclick = () => {
    // Set up pooling
    Vector.Init(200);
    Renderable.Init(200);

    // Create message bus and entity manager
    const messageBus = new MessageBus();
    new EntityManager(messageBus);

    // Create game systems
    new WebGLSystem(messageBus, gl);
    new SpriteSystem(messageBus);
    new HTTPImageSystem(messageBus);
    new HTTPAudioSystem(messageBus);
    new AudioSourceSystem(messageBus);
    new PointerSystem(messageBus, canvas);
    new AudioButtonSystem(messageBus);

    canvas.style.display = "block";
    startButton.style.display = "none";

    // Create and start game
    new AudioGame(messageBus).Start();
};
