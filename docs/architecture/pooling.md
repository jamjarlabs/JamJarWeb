# Pooling

JamJar supports object pooling ([see the pooling documentation for an overview](../../documentation/pooling)), this
page will outline how pooling works in the engine, alongside how pooling can be added to another object.

Pooling in JamJar works with the following process:

1. Pool is initialized, set to a maximum size and filled with empty/blank objects.
2. An object is requested from the pool.

    - If the pool is not initialized the normal object constructor is used and a new instance is created.

    - If the pool does not have objects available the normal object constructor is used and a new instance is created.

    - If the pool has objects available, it shifts the first item out of the pool, it calls that pooled objects
    `Recycle` method, providing the required arguments. The object is marked as not in the pool anymore.

3. Object is used.
4. The object is freed.

    - If the object is marked as already in the pool this does nothing.

    - If the pool is not initialized this does nothing.

    - If the pool is already full (at maximum size) this does nothing.

    - If the pool has room the object is pushed into the pool and it is marked as in the pool to avoid duplicate
    entries.

This approach means that the pool is a dynamic size, with the only limitation being the maximum size of the pool. This
strategy also means that any object can be pushed into the pool and reused, it does not have to be provisioned from
the pool in the first place. This allows a hybrid approach, with pooling used where available, and a fallback to
standard garbage collection if the pool is full or pooling is disabled.

## Making an Object Poolable

An object can be made poolable by extending the [Pooled] base class, which provides helper functions for object pooling,
and also implementing the [IPoolable] interface to add in `Recycle` and `Free` methods. The `Recycle` method should
take in the same arguments as the constructor, allowing objects to be reused; for example in the [Vector] object it is:

```typescript
public Recycle(x: number, y: number): Vector {
    this.x = x;
    this.y = y;
    return this;
}
```

It is also good practice to provide some static helper methods for initialising the object pool, creating new objects
from the pool and freeing objects into the pool, for example the [Vector] class provides `New`, `Free`, and `Init`:

```typescript
private static POOL_KEY = "jamjar_vector";

public static New(x: number, y: number): Vector {
    return this.new<Vector>(Vector.POOL_KEY, Vector, x, y);
}

public static Free(obj: Vector): void {
    this.free(Vector.POOL_KEY, obj);
}

public static Init(size: number): void {
    this.init(Vector.POOL_KEY, () => {
        return Vector.New(0, 0);
    }, size);
}
```

These static methods use the underlying methods provided by the [Pooled] base class. The `POOL_KEY` specifies the
unique key that should be used when specifying the pool to use.

## Object with Poolable Constituents/Subparts

If an object contains constituent parts that are poolable should provide a `Free` method, if the object itself is not
poolable it should implement the [IFreeable] interface to specify this. For example, [Component] objects are not
themselves poolable, but can contain pooled data, so it implements [IFreeable] to allow any pooled constituent objects
to be freed:

```typescript
abstract class Component implements IFreeable {
    ...
    public Free(): void {
        return;
    }
}
```

The [Transform] class extends the [Component] class, it contains 3 poolable pieces of data (`position`, `scale` and
`previous`) so it overrides the `Free` method and calls each of these poolable objects' `Free` methods:

```typescript
class Transform extends Component {
    ...
    public Free(): void {
        this.position.Free();
        this.previous.Free();
        this.scale.Free();
    }
}

```

[Pooled]: ../../reference/classes/pooled
[IPoolable]: ../../reference/interfaces/ipoolable
[IFreeable]: ../../reference/interfaces/ifreeable
[Vector]: ../../reference/classes/vector
[Component]: ../../reference/classes/component
[Transform]: ../../reference/classes/transform
