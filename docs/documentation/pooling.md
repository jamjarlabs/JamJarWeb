# Pooling

Object pooling allows for reuse of objects, keeping free objects in a centralised *pool* of objects. Instead of
creating a new instance of the object and requesting memory for it, instead the existing object is overwritten in place
and used instead.

## Benefits

Object pooling is intended to reduce/avoid stuttering caused by garbage collection between frames. This can be a
problem if there are many object being created and destroyed per frame, object pooling addresses this by using global
static memory that allows objects to be created once and reused, rather than created, destroyed, and then created.

## Drawbacks

Object pooling can have some drawbacks:

- If the initialised object pool is large the game will use a big chunk of memory, this could be inefficient.
- Object pooling can come with a performance (CPU) hit, as new object creation requires more logic.

## Considerations

JamJar is designed to allow the optional use of object pools, they can be disabled and enabled easily - by choosing to
initialise the pools or not. If an object pool is not initialised then object pooling is skipped and normal instance
creation is used.

With the design of the JamJar pooling architecture if some logic forgets to free the object back into the object pool
this is not likely to cause a memory leak, the object will simply be garbage collected as normal. Since this fallback
uses normal garbage collection it is still recommended to free poolable objects when finished with them.

## Best Practices

When designing systems/game logic to support object pooling make sure any objects that are no longer used are freed up
and released into the object pool. This freeing of objects back into the pool is essential to allow object pooling to
work without using up the entire object pool wastefully.

When using pooled data inside a [Component] the pooled data can easily be released upon component removal/entity
destruction by implementing and overriding the `Free` method to ensure all pooled data is freed. For example in the
[Transform] component there are three poolable [Vector] data points (`position`, `previous`, and `scale`) which are
freed up:

```typescript
public Free(): void {
    this.position.Free();
    this.previous.Free();
    this.scale.Free();
}
```

When requesting new objects it is good practice to use the pool method to provision them rather than directly using
the constructor - as this allows object pooling to be enabled or disabled by deciding to initialise the object pool or
not, rather than having to manually switch between the two methods of initialising the objects. See the examples below
for a more indepth explanation of creating objects using pooling vs using a constructor.

## Examples

Pooling is slightly abstract, and it mostly handled behind the scenes by the engine, so the interface for using object
pooling in your game is quite simple.

### Vector

Instead of using the constructor for creating a [Vector] instead use the `Vector.New` static method:

```typescript
const unpooled = new Vector(5, 3);

const pooled = Vector.New(5, 3);
```

Using `Vector.New` is preferred in all instances, as this will work even if object pooling is disabled - this means
that object pooling can be enabled or disabled in a single place by removing/adding pool initialization calls.

To initialize the [Vector] object pool, use `Vector.Init`:

```typescript
Vector.Init(500);
```

This initializes the [Vector] object pool with `500` blank objects, with the maximum pool size set to `500`.

To free a [Vector] after it has been used, use `Vector.Free`:

```typescript
// Create
const position = Vector.New(2, 1);

// Use the vector in some way
position.x += 5;

// Free
position.Free();
```

### Renderable

[Renderable] objects are lower level objects that support pooling, they follow the same static methods as the `Vector`
with `New`, `Free`, and `Init` all available.

[Component]: ../../reference/classes/component
[Transform]: ../../reference/classes/transform
[Vector]: ../../reference/classes/vector
[Renderable]: ../../reference/classes/renderable
