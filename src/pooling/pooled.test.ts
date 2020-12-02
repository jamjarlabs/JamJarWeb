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

import Pooled from "./pooled";
import IPoolable from "./ipoolable";

class TestPooledObject extends Pooled {
    public static readonly POOL_KEY = "test_pooled_object_pool";
    public static CURRENT_ID = 0;
    public id: number;

    public static SimulateNew(): TestPooledObject {
        return this.new<TestPooledObject>(TestPooledObject.POOL_KEY, TestPooledObject, []);
    }

    public static SimulateFree(obj: TestPooledObject): void {
        return this.free(TestPooledObject.POOL_KEY, obj);
    }

    public static SimulateInit(size: number): void {
        return this.init(TestPooledObject.POOL_KEY, () => new TestPooledObject(), size);
    }

    public static SetPools(pools: Map<string, [number, IPoolable[]]>): void {
        Pooled.pools = pools;
    }

    public static GetPools(): Map<string, [number, IPoolable[]]> {
        return Pooled.pools;
    }

    constructor(id?: number, inPool = false) {
        super();
        if (id === undefined) {
            this.id = TestPooledObject.CURRENT_ID++;
        } else {
            this.id = id;
        }
        this.objectInPool = inPool;
    }

    public Recycle(): TestPooledObject {
        return this;
    }

    public Free(): void {
        return;
    }
}

describe("Pooled - new", () => {
    type TestTuple = [string, TestPooledObject, Map<string, [number, IPoolable[]]>, Map<string, [number, IPoolable[]]>];
    test.each<TestTuple>([
        ["No pool initialized", new TestPooledObject(0, false), new Map(), new Map()],
        [
            "Empty pool",
            new TestPooledObject(1, false),
            new Map([[TestPooledObject.POOL_KEY, [5, []]]]),
            new Map([[TestPooledObject.POOL_KEY, [5, []]]]),
        ],
        [
            "Pool with 5 entries",
            new TestPooledObject(10, false),
            new Map([
                [
                    TestPooledObject.POOL_KEY,
                    [
                        5,
                        [
                            new TestPooledObject(10, true),
                            new TestPooledObject(11, true),
                            new TestPooledObject(12, true),
                            new TestPooledObject(13, true),
                            new TestPooledObject(14, true),
                        ],
                    ],
                ],
            ]),
            new Map([
                [
                    TestPooledObject.POOL_KEY,
                    [
                        5,
                        [
                            new TestPooledObject(11, true),
                            new TestPooledObject(12, true),
                            new TestPooledObject(13, true),
                            new TestPooledObject(14, true),
                        ],
                    ],
                ],
            ]),
        ],
        [
            "Pool with 1 entry",
            new TestPooledObject(14, false),
            new Map([[TestPooledObject.POOL_KEY, [5, [new TestPooledObject(14, true)]]]]),
            new Map([[TestPooledObject.POOL_KEY, [5, []]]]),
        ],
    ])(
        "%p",
        (
            description: string,
            expected: TestPooledObject,
            beforePools: Map<string, [number, IPoolable[]]>,
            afterPools: Map<string, [number, IPoolable[]]>
        ) => {
            TestPooledObject.SetPools(beforePools);
            expect(TestPooledObject.SimulateNew()).toEqual(expected);
            expect(TestPooledObject.GetPools()).toEqual(afterPools);
        }
    );
});

describe("Pooled - free", () => {
    type TestTuple = [string, Map<string, [number, IPoolable[]]>, Map<string, [number, IPoolable[]]>, TestPooledObject];
    test.each<TestTuple>([
        ["Object already pooled", new Map(), new Map(), new TestPooledObject(0, true)],
        ["No pool initialized", new Map(), new Map(), new TestPooledObject(0, false)],
        [
            "Pool full",
            new Map([
                [
                    TestPooledObject.POOL_KEY,
                    [
                        5,
                        [
                            new TestPooledObject(10, true),
                            new TestPooledObject(11, true),
                            new TestPooledObject(12, true),
                            new TestPooledObject(13, true),
                            new TestPooledObject(14, true),
                        ],
                    ],
                ],
            ]),
            new Map([
                [
                    TestPooledObject.POOL_KEY,
                    [
                        5,
                        [
                            new TestPooledObject(10, true),
                            new TestPooledObject(11, true),
                            new TestPooledObject(12, true),
                            new TestPooledObject(13, true),
                            new TestPooledObject(14, true),
                        ],
                    ],
                ],
            ]),
            new TestPooledObject(0, false),
        ],
        [
            "Pool with 3 entries, maxmimum 4",
            new Map([
                [
                    TestPooledObject.POOL_KEY,
                    [
                        5,
                        [
                            new TestPooledObject(10, true),
                            new TestPooledObject(11, true),
                            new TestPooledObject(12, true),
                        ],
                    ],
                ],
            ]),
            new Map([
                [
                    TestPooledObject.POOL_KEY,
                    [
                        5,
                        [
                            new TestPooledObject(10, true),
                            new TestPooledObject(11, true),
                            new TestPooledObject(12, true),
                            new TestPooledObject(0, true),
                        ],
                    ],
                ],
            ]),
            new TestPooledObject(0, false),
        ],
        [
            "Empty pool",
            new Map([[TestPooledObject.POOL_KEY, [5, []]]]),
            new Map([[TestPooledObject.POOL_KEY, [5, [new TestPooledObject(0, true)]]]]),
            new TestPooledObject(0, false),
        ],
    ])(
        "%p",
        (
            description: string,
            beforePools: Map<string, [number, IPoolable[]]>,
            afterPools: Map<string, [number, IPoolable[]]>,
            obj: TestPooledObject
        ) => {
            TestPooledObject.SetPools(beforePools);
            TestPooledObject.SimulateFree(obj);
            expect(TestPooledObject.GetPools()).toEqual(afterPools);
        }
    );
});

describe("Pooled - init", () => {
    type TestTuple = [string, Map<string, [number, IPoolable[]]>, Map<string, [number, IPoolable[]]>, number];
    test.each<TestTuple>([
        ["Pool of size 0", new Map(), new Map([[TestPooledObject.POOL_KEY, [0, []]]]), 0],
        [
            "Pool of size 5",
            new Map(),
            new Map([
                [
                    TestPooledObject.POOL_KEY,
                    [
                        5,
                        [
                            new TestPooledObject(2, true),
                            new TestPooledObject(3, true),
                            new TestPooledObject(4, true),
                            new TestPooledObject(5, true),
                            new TestPooledObject(6, true),
                        ],
                    ],
                ],
            ]),
            5,
        ],
        [
            "Pool of size 3, overwrite pool of size 4",
            new Map([
                [
                    TestPooledObject.POOL_KEY,
                    [
                        4,
                        [
                            new TestPooledObject(0, true),
                            new TestPooledObject(1, true),
                            new TestPooledObject(2, true),
                            new TestPooledObject(3, true),
                        ],
                    ],
                ],
            ]),
            new Map([
                [
                    TestPooledObject.POOL_KEY,
                    [3, [new TestPooledObject(7, true), new TestPooledObject(8, true), new TestPooledObject(9, true)]],
                ],
            ]),
            3,
        ],
        [
            "Pool of size 2, 2 other pools",
            new Map([
                ["test-a", [4, [new TestPooledObject(0, true), new TestPooledObject(1, true)]]],
                [
                    "test-b",
                    [10, [new TestPooledObject(5, true), new TestPooledObject(7, true), new TestPooledObject(9, true)]],
                ],
            ]),
            new Map([
                ["test-a", [4, [new TestPooledObject(0, true), new TestPooledObject(1, true)]]],
                [
                    "test-b",
                    [10, [new TestPooledObject(5, true), new TestPooledObject(7, true), new TestPooledObject(9, true)]],
                ],
                [TestPooledObject.POOL_KEY, [2, [new TestPooledObject(10, true), new TestPooledObject(11, true)]]],
            ]),
            2,
        ],
    ])(
        "%p",
        (
            description: string,
            beforePools: Map<string, [number, IPoolable[]]>,
            afterPools: Map<string, [number, IPoolable[]]>,
            size: number
        ) => {
            TestPooledObject.SetPools(beforePools);
            TestPooledObject.SimulateInit(size);
            expect(TestPooledObject.GetPools()).toEqual(afterPools);
        }
    );
});
