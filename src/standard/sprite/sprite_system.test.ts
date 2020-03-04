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

import SpriteSystem from "./sprite_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Message from "../../message/message";
import Game from "../../game";
import SystemEntity from "../../system/system_entity";
import FakeEntity from "../../fake/entity";
import Transform from "../transform/transform";
import Sprite from "./sprite";
import Color from "../../rendering/color";
import Polygon from "../shape/polygon";
import Reactor from "../../fake/reactor";
import Component from "../../component/component";
import System from "../../system/system";
import IEntity from "../../entity/ientity";

describe("SpriteSystem - OnMessage", () => {
    type TestTuple = [string, Error | undefined, SpriteSystem, SpriteSystem, IMessage];
    test.each<TestTuple>([
        [
            "Unknown mesage type",
            undefined,
            new SpriteSystem(new FakeMessageBus(), {
                entities: new Map(),
                subscriberID: 0,
                scene: undefined,
            }),
            new SpriteSystem(new FakeMessageBus()),
            new Message("unknown")
        ],
        [
            "Pre render no payload",
            undefined,
            new SpriteSystem(new FakeMessageBus(), {
                entities: new Map(),
                subscriberID: 0,
                scene: undefined,
            }),
            new SpriteSystem(new FakeMessageBus(), {
                entities: new Map(),
                subscriberID: 0,
                scene: undefined,
            }),
            new Message<number>(Game.MESSAGE_PRE_RENDER)
        ],
        [
            "Pre render fail to publish",
            new Error("fail to publish"),
            new SpriteSystem(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])]
                    ])
                }),
            new SpriteSystem(new FakeMessageBus([new Reactor("Publish", () => { throw ("fail to publish"); })]),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])]
                    ])
                }),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Pre render render 3 sprites",
            undefined,
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                        [1, new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(new Color(0, 1, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                        [2, new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(new Color(0, 0, 1), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])]
                    ])
                }),
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                        [1, new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(new Color(0, 1, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                        [2, new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(new Color(0, 0, 1), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])]
                    ])
                }),
            new Message<number>(Game.MESSAGE_PRE_RENDER, 1.0)
        ],
        [
            "Correctly register new entity, none existing",
            undefined,
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                    ])
                }),
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map()
                }),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Transform(),
                new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
            ]])
        ],
        [
            "Correctly register new entity, three existing",
            undefined,
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                        [1, new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(new Color(0, 1, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                        [2, new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(new Color(0, 0, 1), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                        [3, new SystemEntity(new FakeEntity(3), [
                            new Transform(),
                            new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                    ])
                }),
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map([
                        [0, new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                        [1, new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Sprite(new Color(0, 1, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])],
                        [2, new SystemEntity(new FakeEntity(2), [
                            new Transform(),
                            new Sprite(new Color(0, 0, 1), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
                        ])]
                    ])
                }),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(3), [
                new Transform(),
                new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
            ]])
        ],
        [
            "Correctly reject new entity, missing transform",
            undefined,
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map()
                }),
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map()
                }),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [
                new Sprite(new Color(1, 0, 0), { bounds: Polygon.Rectangle(2, 2), texture: undefined })
            ]])
        ],
        [
            "Correctly reject new entity, missing sprite",
            undefined,
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map()
                }),
            new SpriteSystem(new FakeMessageBus(),
                {
                    scene: undefined,
                    subscriberID: 0,
                    entities: new Map()
                }),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Transform()]])
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: SpriteSystem, spriteSystem: SpriteSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                spriteSystem.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(spriteSystem.OnMessage(message)).toEqual(expected);
        }
        expect(spriteSystem).toEqual(expectedState);
    });
});