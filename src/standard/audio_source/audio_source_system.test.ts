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

import AudioSourceSystem from "./audio_source_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import SystemEntity from "../../system/system_entity";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import System from "../../system/system";
import FakeEntity from "../../fake/entity";
import Message from "../../message/message";
import Transform from "../transform/transform";
import AudioSource from "./audio_source";
import FakeAudioBufferSourceNode from "../../fake/audio_buffer_source_node";
import FakeAudioContext from "../../fake/audio_context";
import Reactor from "../../fake/reactor";
import FakeGainNode from "../../fake/gain_node";
import AudioAsset from "../../audio/audio_asset";

describe("AudioSourceSystem - Update", () => {
    type TestTuple = [string, Error | undefined, AudioSourceSystem, AudioSourceSystem, IMessage];
    test.each<TestTuple>([
        [
            "No entities, no instances",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "No entities, clear instances",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                new Map<number, AudioBufferSourceNode>(),
                undefined,
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, new AudioBufferSourceNode(new AudioContext())]
                ]),
                undefined,
                undefined
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "1 entity, 2 instances, clear unused",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test")
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, new AudioBufferSourceNode(new AudioContext())]
                ]),
                undefined,
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test")
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, new AudioBufferSourceNode(new AudioContext())],
                    [1, new AudioBufferSourceNode(new AudioContext())]
                ]),
                undefined,
                undefined
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "No loaded asset",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test")
                    ])]
                ]),
                0,
                undefined,
                undefined,
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test")
                    ])]
                ]),
                0,
                undefined,
                undefined,
                undefined
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "Not playing, no instance",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: false
                        })
                    ])]
                ]),
                0,
                undefined,
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: false
                        })
                    ])]
                ]),
                0,
                undefined,
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                undefined
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "Not playing, stop instance",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: false
                        })
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>(),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: false
                        })
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, new FakeAudioBufferSourceNode()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                undefined
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "Playing, played more times than loop max",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: false,
                            loop: 3
                        }, 0)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, new FakeAudioBufferSourceNode()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: true,
                            loop: 3
                        }, 5)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, new FakeAudioBufferSourceNode()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                undefined
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "Playing, below max loops, instance already exists",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: true,
                            loop: 3
                        }, 1)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, new FakeAudioBufferSourceNode()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: true,
                            loop: 3
                        }, 1)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, new FakeAudioBufferSourceNode()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                undefined
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "Playing, below max loops, new instance, no audio processor",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: true,
                            loop: 3
                        }, 2)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, ((): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        source.playbackRate.value = 1;
                        source.buffer = new AudioBuffer({ length: 0, sampleRate: 0 });
                        source.onended = function (): void { return; }.bind(null);
                        return source;
                    })()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                new FakeAudioContext()
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: true,
                            loop: 3
                        }, 1)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>(),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                new FakeAudioContext([
                    new Reactor("createBufferSource", (): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        return source;
                    }),
                    new Reactor("createGain", (): GainNode => {
                        const gain = new FakeGainNode();
                        gain.gain = new AudioParam();
                        return gain;
                    }),
                ])
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "Playing, below max loops, new instance, audio processor provided",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: true,
                            loop: 3,
                            audioProcessor: (): AudioNode => new FakeAudioBufferSourceNode()
                        }, 2)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, ((): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        source.playbackRate.value = 1;
                        source.buffer = new AudioBuffer({ length: 0, sampleRate: 0 });
                        source.onended = function (): void { return; }.bind(null);
                        return source;
                    })()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                new FakeAudioContext()
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: true,
                            loop: 3,
                            audioProcessor: (): AudioNode => new FakeAudioBufferSourceNode()
                        }, 1)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>(),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                new FakeAudioContext([
                    new Reactor("createBufferSource", (): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        return source;
                    }),
                    new Reactor("createGain", (): GainNode => {
                        const gain = new FakeGainNode();
                        gain.gain = new AudioParam();
                        return gain;
                    }),
                ])
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "Playing, infinite, new instance, no audio processor",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: true,
                            loop: -1
                        }, 16)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, ((): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        source.playbackRate.value = 1;
                        source.buffer = new AudioBuffer({ length: 0, sampleRate: 0 });
                        source.onended = function (): void { return; }.bind(null);
                        return source;
                    })()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                new FakeAudioContext()
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: true,
                            loop: -1
                        }, 15)
                    ])]
                ]),
                0,
                new Map<number, AudioBufferSourceNode>(),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                new FakeAudioContext([
                    new Reactor("createBufferSource", (): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        return source;
                    }),
                    new Reactor("createGain", (): GainNode => {
                        const gain = new FakeGainNode();
                        gain.gain = new AudioParam();
                        return gain;
                    }),
                ])
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ],
        [
            "5 entities, 1 not playing, 1 looped more than max, 1 already playing, 1 audio processor, 1 no audio processor",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: false,
                            loop: -1
                        }, 0)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new AudioSource("test1", {
                            playing: false,
                            loop: 5
                        }, 0)
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new AudioSource("test2", {
                            playing: true,
                            loop: 5,
                            playbackRate: 0.2,
                        }, 2)
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new AudioSource("test3", {
                            playing: true,
                            loop: -1,
                            playbackRate: 0.3,
                        }, 3)
                    ])],
                    [4, new SystemEntity(new FakeEntity(4), [
                        new AudioSource("test3", {
                            playing: true,
                            loop: -1,
                            playbackRate: 0.4,
                            audioProcessor: (): AudioNode => new FakeAudioBufferSourceNode()
                        }, 3)
                    ])],
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [2, ((): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        source.playbackRate.value = 0.2;
                        return source;
                    })()],
                    [3, ((): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        source.playbackRate.value = 0.3;
                        source.buffer = new AudioBuffer({ length: 0, sampleRate: 0 });
                        source.onended = function (): void { return; }.bind(null);
                        return source;
                    })()],
                    [4, ((): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        source.playbackRate.value = 0.4;
                        source.buffer = new AudioBuffer({ length: 0, sampleRate: 0 });
                        source.onended = function (): void { return; }.bind(null);
                        return source;
                    })()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })],
                    ["test1", new AudioBuffer({ length: 0, sampleRate: 1 })],
                    ["test2", new AudioBuffer({ length: 0, sampleRate: 1 })],
                    ["test3", new AudioBuffer({ length: 0, sampleRate: 1 })],
                    ["test4", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                new FakeAudioContext()
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test", {
                            playing: false,
                            loop: -1
                        }, 0)
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new AudioSource("test1", {
                            playing: true,
                            loop: 5
                        }, 7)
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new AudioSource("test2", {
                            playing: true,
                            loop: 5,
                            playbackRate: 0.2,
                        }, 2)
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new AudioSource("test3", {
                            playing: true,
                            loop: -1,
                            playbackRate: 0.3,
                        }, 2)
                    ])],
                    [4, new SystemEntity(new FakeEntity(4), [
                        new AudioSource("test3", {
                            playing: true,
                            loop: -1,
                            playbackRate: 0.4,
                            audioProcessor: (): AudioNode => new FakeAudioBufferSourceNode()
                        }, 2)
                    ])],
                ]),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [2, ((): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        source.playbackRate.value = 0.2;
                        return source;
                    })()]
                ]),
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 1 })],
                    ["test1", new AudioBuffer({ length: 0, sampleRate: 1 })],
                    ["test2", new AudioBuffer({ length: 0, sampleRate: 1 })],
                    ["test3", new AudioBuffer({ length: 0, sampleRate: 1 })],
                    ["test4", new AudioBuffer({ length: 0, sampleRate: 1 })]
                ]),
                new FakeAudioContext([
                    new Reactor("createBufferSource", (): AudioBufferSourceNode => {
                        const source = new FakeAudioBufferSourceNode();
                        source.playbackRate = new AudioParam();
                        return source;
                    }),
                    new Reactor("createGain", (): GainNode => {
                        const gain = new FakeGainNode();
                        gain.gain = new AudioParam();
                        return gain;
                    }),
                ])
            ),
            new Message<number>(System.MESSAGE_UPDATE, 0)
        ]
    ])("%p", (description: string, expected: Error | undefined, expectedState: AudioSourceSystem, system: AudioSourceSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        // Workaround for comparing anonymous/bound functions
        expect(JSON.stringify(system)).toEqual(JSON.stringify(expectedState));
    });
});

describe("AudioSourceSystem - Load", () => {
    type TestTuple = [string, Error | undefined, AudioSourceSystem, AudioSourceSystem, IMessage];
    test.each<TestTuple>([
        [
            "No payload",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined
            ),
            new Message(AudioAsset.MESSAGE_FINISH_LOAD)
        ],
        [
            "Asset has error",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined
            ),
            new Message<AudioAsset>(AudioAsset.MESSAGE_FINISH_LOAD,
                new AudioAsset(
                    "test",
                    new AudioBuffer({ length: 0, sampleRate: 0 }),
                    new Error("test error message")
                )
            )
        ],
        [
            "Success",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                new Map<string, AudioBuffer>([
                    ["test", new AudioBuffer({ length: 0, sampleRate: 0 })]
                ]),
                undefined
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined
            ),
            new Message<AudioAsset>(AudioAsset.MESSAGE_FINISH_LOAD,
                new AudioAsset(
                    "test",
                    new AudioBuffer({ length: 0, sampleRate: 0 }),
                )
            )
        ]
    ])("%p", (description: string, expected: Error | undefined, expectedState: AudioSourceSystem, system: AudioSourceSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        // Workaround for comparing anonymous/bound functions
        expect(JSON.stringify(system)).toEqual(JSON.stringify(expectedState));
    });
});

class TestAudioSourceSystem extends AudioSourceSystem {
    public SimulateAudioEnd(entityID: number): void {
        this.audioEnd(entityID);
    }
}

describe("AudioSourceSystem - Audio finished playing", () => {
    type TestTuple = [string, Error | undefined, TestAudioSourceSystem, TestAudioSourceSystem, number];
    test.each<TestTuple>([
        [
            "Successful delete",
            undefined,
            new TestAudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [3, new FakeAudioBufferSourceNode()],
                    [2, new FakeAudioBufferSourceNode()]
                ]),
                undefined,
                undefined,
            ),
            new TestAudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                new Map<number, AudioBufferSourceNode>([
                    [0, new FakeAudioBufferSourceNode()],
                    [3, new FakeAudioBufferSourceNode()],
                    [2, new FakeAudioBufferSourceNode()]
                ]),
                undefined,
                undefined,
            ),
            0
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: TestAudioSourceSystem, system: TestAudioSourceSystem, entityID: number) => {
        if (expected instanceof Error) {
            expect(() => {
                system.SimulateAudioEnd(entityID);
            }).toThrow(expected);
        } else {
            expect(system.SimulateAudioEnd(entityID)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});



describe("AudioSourceSystem - Register", () => {
    type TestTuple = [string, Error | undefined, AudioSourceSystem, AudioSourceSystem, IMessage];
    test.each<TestTuple>([
        [
            "Reject, no components",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined,
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined,
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                ]
            ])
        ],
        [
            "Reject, missing AudioSource",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined,
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined,
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                    new Transform()
                ]
            ])
        ],
        [
            "Accept",
            undefined,
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new AudioSource("test")
                    ])]
                ]),
                0,
                undefined,
                undefined,
                undefined,
            ),
            new AudioSourceSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0,
                undefined,
                undefined,
                undefined,
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                    new AudioSource("test")
                ]
            ])
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: AudioSourceSystem, system: AudioSourceSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
    });
});
