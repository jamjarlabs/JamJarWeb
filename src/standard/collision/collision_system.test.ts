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
import Message from "../../message/message";
import System from "../../system/system";
import SystemEntity from "../../system/system_entity";
import FakeEntity from "../../fake/entity";
import Transform from "../transform/transform";
import Collider from "./collider";
import Polygon from "../../shape/polygon";
import AllCollideAlgorithm from "./algorithm/all_collide_algorithm";
import NoneCollideAlgorithm from "./algorithm/none_collide_algorithm";
import IEntity from "../../entity/ientity";
import Component from "../../component/component";
import Collision from "./collision";
import CollisionInfo from "./collision_info";
import Ellipse from "../../shape/ellipse";
import Vector from "../../geometry/vector";
import ICollisionAlgorithm from "./algorithm/icollision_algorithm";
import IShape from "../../shape/ishape";

class TestCollisionAlgorithm implements ICollisionAlgorithm {
    private centerPairs: [Vector, Vector][];
    constructor(centerPairs: [Vector, Vector][]) {
        this.centerPairs = centerPairs;
    }

    public CalculateCollisions(shapes: IShape[]): CollisionInfo[] {
        const alreadyChecked: [number, number][] = [];
        const collisions: CollisionInfo[] = [];
        for (let i = 0; i < shapes.length; i++) {
            for (let j = shapes.length - 1; j >= 0; j--) {
                if (i === j) {
                    continue;
                }
                const checked = alreadyChecked.some((pair) => {
                    return (pair[0] === i && pair[1] === j) || (pair[0] === j && pair[1] === i);
                });
                if (checked) {
                    // Don't check the same collision twice
                    continue;
                }

                const a = shapes[i];
                const b = shapes[j];

                const aCenter = a.Center();
                const bCenter = b.Center();
                for (const pair of this.centerPairs) {
                    if (
                        (aCenter.x === pair[0].x &&
                            aCenter.y === pair[0].y &&
                            bCenter.x === pair[1].x &&
                            bCenter.y === pair[1].y) ||
                        (aCenter.x === pair[1].x &&
                            aCenter.y === pair[1].y &&
                            bCenter.x === pair[0].x &&
                            bCenter.y === pair[0].y)
                    ) {
                        collisions.push(new CollisionInfo(a, b));
                    }
                }
                alreadyChecked.push([i, j]);
            }
        }
        return collisions;
    }
}

describe("CollisionSystem - Update", () => {
    type TestTuple = [string, Error | undefined, CollisionSystem, CollisionSystem, IMessage];
    test.each<TestTuple>([
        [
            "No entities",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "One entity",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "Two entities, no broad collide, no narrow collide, no collision",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new NoneCollideAlgorithm(),
                new NoneCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1), "test"),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1), "test"),
                        ]),
                    ],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new NoneCollideAlgorithm(),
                new NoneCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1), "test"),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1), "test"),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "Two entities, broad collide, no narrow collide, no collision",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new NoneCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new NoneCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "Two entities, no broad collide, narrow collide, no collision",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new NoneCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new NoneCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "Two entities, broad collide, narrow collide, collision",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [
                    new Collision(
                        new FakeEntity(0),
                        new FakeEntity(1),
                        new CollisionInfo(Polygon.RectangleByDimensions(1, 1), Polygon.RectangleByDimensions(1, 1))
                    ),
                ],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1), "test"),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1), "test"),
                        ]),
                    ],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1), "test"),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1), "test"),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "Five entities, four broad collisions, two narrow collisions, two collisions",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new TestCollisionAlgorithm([
                    [new Vector(0, 0), new Vector(1, 0)],
                    [new Vector(3, 0), new Vector(4, 0)],
                ]),
                new TestCollisionAlgorithm([
                    [new Vector(0, 0), new Vector(1, 0)],
                    [new Vector(0, 0), new Vector(3, 0)],
                    [new Vector(3, 0), new Vector(4, 0)],
                    [new Vector(1, 0), new Vector(4, 0)],
                ]),
                [
                    new Collision(
                        new FakeEntity(0),
                        new FakeEntity(1),
                        new CollisionInfo(Ellipse.Circle(1, 0, 0), Ellipse.Circle(1, 1, 0))
                    ),
                    new Collision(
                        new FakeEntity(3),
                        new FakeEntity(4),
                        new CollisionInfo(Ellipse.Circle(1, 3, 0), Ellipse.Circle(1, 4, 0))
                    ),
                ],
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [new Transform(), new Collider(Ellipse.Circle(1, 0, 0))])],
                    [1, new SystemEntity(new FakeEntity(1), [new Transform(), new Collider(Ellipse.Circle(1, 1, 0))])],
                    [2, new SystemEntity(new FakeEntity(2), [new Transform(), new Collider(Ellipse.Circle(1, 2, 0))])],
                    [3, new SystemEntity(new FakeEntity(3), [new Transform(), new Collider(Ellipse.Circle(1, 3, 0))])],
                    [4, new SystemEntity(new FakeEntity(4), [new Transform(), new Collider(Ellipse.Circle(1, 4, 0))])],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new TestCollisionAlgorithm([
                    [new Vector(0, 0), new Vector(1, 0)],
                    [new Vector(3, 0), new Vector(4, 0)],
                ]),
                new TestCollisionAlgorithm([
                    [new Vector(0, 0), new Vector(1, 0)],
                    [new Vector(0, 0), new Vector(3, 0)],
                    [new Vector(3, 0), new Vector(4, 0)],
                    [new Vector(1, 0), new Vector(4, 0)],
                ]),
                [],
                new Map<number, SystemEntity>([
                    [0, new SystemEntity(new FakeEntity(0), [new Transform(), new Collider(Ellipse.Circle(1, 0, 0))])],
                    [1, new SystemEntity(new FakeEntity(1), [new Transform(), new Collider(Ellipse.Circle(1, 1, 0))])],
                    [2, new SystemEntity(new FakeEntity(2), [new Transform(), new Collider(Ellipse.Circle(1, 2, 0))])],
                    [3, new SystemEntity(new FakeEntity(3), [new Transform(), new Collider(Ellipse.Circle(1, 3, 0))])],
                    [4, new SystemEntity(new FakeEntity(4), [new Transform(), new Collider(Ellipse.Circle(1, 4, 0))])],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "Five entities, four entities with layers, four potential collisions, all collide",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                [["test1", "test2"]],
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [
                    new Collision(
                        new FakeEntity(0, undefined, ["test1"]),
                        new FakeEntity(1, undefined, ["test2"]),
                        new CollisionInfo(Ellipse.Circle(1, 0, 0), Ellipse.Circle(1, 1, 0))
                    ),
                    new Collision(
                        new FakeEntity(0, undefined, ["test1"]),
                        new FakeEntity(3, undefined, ["test2"]),
                        new CollisionInfo(Ellipse.Circle(1, 0, 0), Ellipse.Circle(1, 3, 0))
                    ),
                    new Collision(
                        new FakeEntity(1, undefined, ["test2"]),
                        new FakeEntity(2, undefined, ["test1"]),
                        new CollisionInfo(Ellipse.Circle(1, 1, 0), Ellipse.Circle(1, 2, 0))
                    ),
                    new Collision(
                        new FakeEntity(2, undefined, ["test1"]),
                        new FakeEntity(3, undefined, ["test2"]),
                        new CollisionInfo(Ellipse.Circle(1, 2, 0), Ellipse.Circle(1, 3, 0))
                    ),
                ],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0, undefined, ["test1"]), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 0, 0)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1, undefined, ["test2"]), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 1, 0)),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2, undefined, ["test1"]), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 2, 0)),
                        ]),
                    ],
                    [
                        3,
                        new SystemEntity(new FakeEntity(3, undefined, ["test2"]), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 3, 0)),
                        ]),
                    ],
                    [
                        4,
                        new SystemEntity(new FakeEntity(4, undefined, []), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 4, 0)),
                        ]),
                    ],
                ])
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                [["test1", "test2"]],
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0, undefined, ["test1"]), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 0, 0)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1, undefined, ["test2"]), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 1, 0)),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2, undefined, ["test1"]), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 2, 0)),
                        ]),
                    ],
                    [
                        3,
                        new SystemEntity(new FakeEntity(3, undefined, ["test2"]), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 3, 0)),
                        ]),
                    ],
                    [
                        4,
                        new SystemEntity(new FakeEntity(4, undefined, []), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 4, 0)),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "2 entities, already colliding, continue colliding",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [
                    new Collision(
                        new FakeEntity(0, undefined, undefined),
                        new FakeEntity(1, undefined, undefined),
                        new CollisionInfo(Ellipse.Circle(1, 0, 0), Ellipse.Circle(1, 1, 0))
                    ),
                ],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 0, 0)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 1, 0)),
                        ]),
                    ],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [
                    new Collision(
                        new FakeEntity(0, undefined, undefined),
                        new FakeEntity(1, undefined, undefined),
                        new CollisionInfo(Ellipse.Circle(1, 0, 0), Ellipse.Circle(1, 1, 0))
                    ),
                ],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 0, 0)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 1, 0)),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "2 entities, already colliding, no longer colliding",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new NoneCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 0, 0)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 1, 0)),
                        ]),
                    ],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new NoneCollideAlgorithm(),
                [
                    new Collision(
                        new FakeEntity(0, undefined, undefined),
                        new FakeEntity(1, undefined, undefined),
                        new CollisionInfo(Ellipse.Circle(1, 0, 0), Ellipse.Circle(1, 1, 0))
                    ),
                ],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 0, 0)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 1, 0)),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "3 entities, already colliding, 1 no longer colliding, 1 still colliding",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new TestCollisionAlgorithm([[new Vector(0, 0), new Vector(1, 0)]]),
                [
                    new Collision(
                        new FakeEntity(0, undefined, undefined),
                        new FakeEntity(1, undefined, undefined),
                        new CollisionInfo(Ellipse.Circle(1, 0, 0), Ellipse.Circle(1, 1, 0))
                    ),
                ],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 0, 0)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 1, 0), undefined, "exit-script"),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 2, 0), undefined, "exit-script"),
                        ]),
                    ],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new TestCollisionAlgorithm([[new Vector(0, 0), new Vector(1, 0)]]),
                [
                    new Collision(
                        new FakeEntity(0, undefined, undefined),
                        new FakeEntity(1, undefined, undefined),
                        new CollisionInfo(Ellipse.Circle(1, 0, 0), Ellipse.Circle(1, 1, 0))
                    ),
                    new Collision(
                        new FakeEntity(1, undefined, undefined),
                        new FakeEntity(2, undefined, undefined),
                        new CollisionInfo(Ellipse.Circle(1, 1, 0), Ellipse.Circle(1, 2, 0))
                    ),
                ],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 0, 0)),
                        ]),
                    ],
                    [
                        1,
                        new SystemEntity(new FakeEntity(1, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 1, 0), undefined, "exit-script"),
                        ]),
                    ],
                    [
                        2,
                        new SystemEntity(new FakeEntity(2, undefined, undefined), [
                            new Transform(),
                            new Collider(Ellipse.Circle(1, 2, 0), undefined, "exit-script"),
                        ]),
                    ],
                ]),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
        [
            "Collision expiring, entities no longer exist",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>(),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [
                    new Collision(
                        new FakeEntity(0, undefined, undefined),
                        new FakeEntity(1, undefined, undefined),
                        new CollisionInfo(Ellipse.Circle(1, 0, 0), Ellipse.Circle(1, 1, 0))
                    ),
                ],
                new Map<number, SystemEntity>(),
                0
            ),
            new Message<number>(System.MESSAGE_UPDATE, 1.0),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            expectedState: CollisionSystem,
            system: CollisionSystem,
            message: IMessage
        ) => {
            if (expected instanceof Error) {
                expect(() => {
                    system.OnMessage(message);
                }).toThrow(expected);
            } else {
                expect(system.OnMessage(message)).toEqual(expected);
            }
            expect(system).toEqual(expectedState);
        }
    );
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
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), []]),
        ],
        [
            "Reject, missing transform",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0),
                [new Collider(Polygon.RectangleByDimensions(1, 1))],
            ]),
        ],
        [
            "Reject, missing collider",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [new FakeEntity(0), [new Transform()]]),
        ],
        [
            "Accept",
            undefined,
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([
                    [
                        0,
                        new SystemEntity(new FakeEntity(0), [
                            new Transform(),
                            new Collider(Polygon.RectangleByDimensions(1, 1)),
                        ]),
                    ],
                ]),
                0
            ),
            new CollisionSystem(
                new FakeMessageBus(),
                undefined,
                undefined,
                new AllCollideAlgorithm(),
                new AllCollideAlgorithm(),
                [],
                new Map<number, SystemEntity>([]),
                0
            ),
            new Message<[IEntity, Component[]]>(System.MESSAGE_REGISTER, [
                new FakeEntity(0),
                [new Transform(), new Collider(Polygon.RectangleByDimensions(1, 1))],
            ]),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: Error | undefined,
            expectedState: CollisionSystem,
            system: CollisionSystem,
            message: IMessage
        ) => {
            if (expected instanceof Error) {
                expect(() => {
                    system.OnMessage(message);
                }).toThrow(expected);
            } else {
                expect(system.OnMessage(message)).toEqual(expected);
            }
            expect(system).toEqual(expectedState);
        }
    );
});
