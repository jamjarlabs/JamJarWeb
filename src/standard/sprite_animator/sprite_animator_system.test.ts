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

import SpriteAnimatorSystem from "./sprite_animator_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import System from "../../system/system";
import SystemEntity from "../../system/system_entity";
import FakeEntity from "../../fake/entity";
import Sprite from "../sprite/sprite";
import Material from "../../rendering/material/material";
import SpriteAnimator from "./sprite_animator";
import SpriteAnimation from "./sprite_animation";
import SpriteKeyFrame from "./sprite_key_frame";
import Color from "../../rendering/color";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";

describe("CollisionSystem - Update", () => {
    type TestTuple = [string, Error | undefined, SpriteAnimatorSystem, SpriteAnimatorSystem, IMessage];
    test.each<TestTuple>([
        [
            "No entities",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
        [
            "Animation disabled",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([], 10, 0)]
                            ]), 
                            undefined
                        )
                    ])]
                ]),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([], 10, 0)]
                            ]), 
                            undefined
                        )
                    ])]
                ]),
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
        [
            "Unknown animation",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([], 10, 0)]
                            ]), 
                            "unknown"
                        )
                    ])]
                ]),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([], 10, 0)]
                            ]), 
                            "unknown"
                        )
                    ])]
                ]),
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
        [
            "No key frames",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([], 10, 0)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([], 10, 0)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
        [
            "10 key frames, key frame target 5",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material({
                            color: new Color(1,0,0)
                        })),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, 0, 0.45)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, 0, 0.45)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
        [
            "10 key frames, key frame target 2, repeat infinite",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material({
                            color: new Color(1,0,0)
                        })),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, -1, 0, 1)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, -1, 1.2)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
        [
            "10 key frames, key frame target 2, repeat infinite, 5 current repeats",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material({
                            color: new Color(1,0,0)
                        })),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, -1, 0, 6)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, -1, 1.2, 5)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
        [
            "10 key frames, key frame target 2, repeat under maximum",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material({
                            color: new Color(1,0,0)
                        })),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, 1, 0, 1)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, 1, 1.2)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
        [
            "10 key frames, key frame target 2, don't repeat over maximum",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, 1, 1.2, 3)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(
                            new Map<string, SpriteAnimation>([
                                ["test", new SpriteAnimation([
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material({
                                        color: new Color(1,0,0)
                                    }), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                    new SpriteKeyFrame(new Material(), 1),
                                ], 10, 1, 1.2, 3)]
                            ]), 
                            "test"
                        )
                    ])]
                ]),
                0
            ),
            new Message<number>(
                System.MESSAGE_UPDATE,
                0
            )
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: SpriteAnimatorSystem, system: SpriteAnimatorSystem, message: IMessage) => {
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

describe("CollisionSystem - Register", () => {
    type TestTuple = [string, Error | undefined, SpriteAnimatorSystem, SpriteAnimatorSystem, IMessage];
    test.each<TestTuple>([
        [
            "Reject, no components",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                ]
            ])
        ],
        [
            "Reject, missing Sprite",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                    new SpriteAnimator(new Map<string, SpriteAnimation>())
                ]
            ])
        ],
        [
            "Reject, missing SpriteAnimator",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                    new Sprite(new Material())
                ]
            ])
        ],
        [
            "Accept",
            undefined,
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Sprite(new Material()),
                        new SpriteAnimator(new Map<string, SpriteAnimation>())
                    ])]
                ]),
                0
            ),
            new SpriteAnimatorSystem(
                new FakeMessageBus(),
                undefined,
                new Map<number, SystemEntity>(),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                    new Sprite(new Material()),
                    new SpriteAnimator(new Map<string, SpriteAnimation>())
                ]
            ])
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: SpriteAnimatorSystem, system: SpriteAnimatorSystem, message: IMessage) => {
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
