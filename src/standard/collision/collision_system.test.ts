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

import CollisionSystem from "./collision_system";
import IMessage from "../../message/imessage";
import FakeMessageBus from "../../fake/message_bus";
import Reactor from "../../fake/reactor";
import Message from "../../message/message";
import System from "../../system/system";
import SystemEntity from "../../system/system_entity";
import FakeEntity from "../../fake/entity";
import Transform from "../transform/transform";
import Collider from "./collider";
import Polygon from "../../shape/polygon";
import AlwaysCollideAlgorithm from "./algorithm/always_collide_algorithm";
import NeverCollideAlgorithm from "./algorithm/never_collide_algorithm";
import ICollisionAlgorithm from "./algorithm/icollision_algorithm";
import IShape from "../../shape/ishape";
import Vector from "../../geometry/vector";
import CollisionInfo from "./collision_info";
import Ellipse from "../../shape/ellipse";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";

class TestCollisionAlgorithm implements ICollisionAlgorithm {
    private centerPairs: [Vector, Vector][];
    constructor(centerPairs: [Vector, Vector][]) {
        this.centerPairs = centerPairs;
    }

    public CalculateCollision(a: IShape, b: IShape): CollisionInfo | undefined {
        const aCenter = a.Center();
        const bCenter = b.Center();
        for (const pair of this.centerPairs) {
            if (aCenter.x === pair[0].x && aCenter.y === pair[0].y && bCenter.x === pair[1].x && bCenter.y === pair[1].y ||
                aCenter.x === pair[1].x && aCenter.y === pair[1].y && bCenter.x === pair[0].x && bCenter.y === pair[0].y) {
                return new CollisionInfo(
                    a,
                    b
                );
            }
        }
        return;
    }
}

describe("CollisionSystem - Update", () => {
    type TestTuple = [string, Error | undefined, number, CollisionSystem, CollisionSystem, IMessage];
    let collisionCounter = 0;
    test.each<TestTuple>([
        [
            "No entities",
            undefined,
            0,
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "One entity",
            undefined,
            0,
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])]
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])]
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Two entities, no broad collide, no narrow collide, no collision",
            undefined,
            0,
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new NeverCollideAlgorithm(),
                new NeverCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1), "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1), "test")
                    ])]
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new NeverCollideAlgorithm(),
                new NeverCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1), "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1), "test")
                    ])]
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Two entities, broad collide, no narrow collide, no collision",
            undefined,
            0,
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new NeverCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])]
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new NeverCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])]
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Two entities, no broad collide, narrow collide, no collision",
            undefined,
            0,
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new NeverCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])]
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        throw ("No collisions expected");
                    })
                ]),
                undefined,
                undefined,
                new NeverCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1))
                    ])]
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Two entities, broad collide, narrow collide, collision",
            undefined,
            1,
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        if (message.type === CollisionSystem.MESSAGE_COLLISION_DETECTED) {
                            collisionCounter ++;
                        }
                    })
                ]),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1), "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1), "test")
                    ])]
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        if (message.type === CollisionSystem.MESSAGE_COLLISION_DETECTED) {
                            collisionCounter ++;
                        }
                    })
                ]),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1), "test")
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1, 1), "test")
                    ])]
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Five entities, four broad collisions, two narrow collisions, two collisions",
            undefined,
            2,
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        collisionCounter ++;
                    })
                ]),
                undefined,
                undefined,
                new TestCollisionAlgorithm([
                    [new Vector(0,0), new Vector(1,0)],
                    [new Vector(3,0), new Vector(4,0)],
                ]),
                new TestCollisionAlgorithm([
                    [new Vector(0,0), new Vector(1,0)],
                    [new Vector(0,0), new Vector(3,0)],
                    [new Vector(3,0), new Vector(4,0)],
                    [new Vector(1,0), new Vector(4,0)]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(0,0)))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(1,0)))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(2,0)))
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(3,0)))
                    ])],
                    [4, new SystemEntity(new FakeEntity(4), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(4,0)))
                    ])]
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        collisionCounter ++;
                    })
                ]),
                undefined,
                undefined,
                new TestCollisionAlgorithm([
                    [new Vector(0,0), new Vector(1,0)],
                    [new Vector(3,0), new Vector(4,0)],
                ]),
                new TestCollisionAlgorithm([
                    [new Vector(0,0), new Vector(1,0)],
                    [new Vector(0,0), new Vector(3,0)],
                    [new Vector(3,0), new Vector(4,0)],
                    [new Vector(1,0), new Vector(4,0)]
                ]),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(0,0)))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(1,0)))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(2,0)))
                    ])],
                    [3, new SystemEntity(new FakeEntity(3), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(3,0)))
                    ])],
                    [4, new SystemEntity(new FakeEntity(4), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(4,0)))
                    ])]
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ],
        [
            "Five entities, four entities with layers, four potential collisions, all collide",
            undefined,
            4,
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        collisionCounter ++;
                    })
                ]),
                [["test1", "test2"]],
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0, undefined, ["test1"]), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(0,0)))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1, undefined, ["test2"]), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(1,0)))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2, undefined, ["test1"]), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(2,0)))
                    ])],
                    [3, new SystemEntity(new FakeEntity(3, undefined, ["test2"]), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(3,0)))
                    ])],
                    [4, new SystemEntity(new FakeEntity(4, undefined, []), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(4,0)))
                    ])]
                ]),
            ),
            new CollisionSystem(
                new FakeMessageBus([
                    new Reactor("Publish", (message: IMessage): void => {
                        collisionCounter ++;
                    })
                ]),
                [["test1", "test2"]],
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0, undefined, ["test1"]), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(0,0)))
                    ])],
                    [1, new SystemEntity(new FakeEntity(1, undefined, ["test2"]), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(1,0)))
                    ])],
                    [2, new SystemEntity(new FakeEntity(2, undefined, ["test1"]), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(2,0)))
                    ])],
                    [3, new SystemEntity(new FakeEntity(3, undefined, ["test2"]), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(3,0)))
                    ])],
                    [4, new SystemEntity(new FakeEntity(4, undefined, []), [
                        new Transform(),
                        new Collider(Ellipse.Circle(1, new Vector(4,0)))
                    ])]
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0)
        ]
    ])("%p", (description: string, expected: Error | undefined, expectedCollisionCount: number, expectedState: CollisionSystem, system: CollisionSystem, message: IMessage) => {
        if (expected instanceof Error) {
            expect(() => {
                system.OnMessage(message);
            }).toThrow(expected);
        } else {
            expect(system.OnMessage(message)).toEqual(expected);
        }
        expect(system).toEqual(expectedState);
        expect(collisionCounter).toEqual(expectedCollisionCount);
        collisionCounter = 0;
    });
});

describe("CollisionSystem - Register", () => {
    type TestTuple = [string, Error | undefined, CollisionSystem, CollisionSystem, IMessage];
    test.each<TestTuple>([
        [
            "Reject, no components",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                ]
            ])
        ],
        [
            "Reject, missing transform",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                    new Collider(Polygon.RectangleByDimensions(1,1))
                ]
            ])
        ],
        [
            "Reject, missing collider",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([]),
                0
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
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [
                        new Transform(),
                        new Collider(Polygon.RectangleByDimensions(1,1))
                    ])]
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AlwaysCollideAlgorithm(),
                new AlwaysCollideAlgorithm(),
                new Map<number, SystemEntity>([]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0), [
                    new Transform(),
                    new Collider(Polygon.RectangleByDimensions(1,1))
                ]
            ])
        ],
    ])("%p", (description: string, expected: Error | undefined, expectedState: CollisionSystem, system: CollisionSystem, message: IMessage) => {
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
