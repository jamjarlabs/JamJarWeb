# Serialization

JamJar classes can be serialized and deserialized into and from JSON (useful for networking/saving game states).

Since there are no types in the transpiled JavaScript generated from TypeScript JamJar adds in a pseudo type system
which allows a centralized store of types and deserializing functionality. This basically works by having a global
mapping of a type identifier (e.g. `jamjar.Vector`) to a function that will take in JSON and output an instance of the
type (e.g. [Vector.Deserialize]). This means that JSON can be fed into this that includes some type which can be
looked up against the centralised store, and then if there's a matching function it can be used to convert the JSON
into a concrete type.

## Serialization

To make a class support serialization the class just needs to implement the [ISerializable] interface, providing a
`Serialize` method which should return the current instance serialized into a JSON string. The JSON should be in the
format:

```json
{
    "type": "jamjar.Vector",
    "value": {
        "x": 5,
        "y": 3
    }
}
```

The `type` should be the identifer that will be stored with the centralized serialization storage and used to
identify a class (see the rest of how this works under the Deserialization section). The `value` is a JSON object that
contains any information that defines the instance, in this case it is the `x` and `y` values for the [Vector].

## Deserialization

To make it possible for JSON to be deserialized into a concrete type there are a couple things a class needs to
provide, first it needs to provide a function that takes in a JSON object and returns the concrete type (e.g
[Vector.Deserialize]). The second thing that needs to be provided is a class decorator, called `Serialize`, for example:

```ts
@Serialize("my_custom_type", my_deserialization_function)
```

This decorator registers the custom type to the global centralized serialization storage, allowing a lookup at runtime
and retrieval of our `Vector.Deserialize` function that we can feed JSON into to get a concrete type.


## Primitives

Primitives are serialized in a special form to be handled by the centralized deserialization logic, it looks like this:

```json
{
    "primitive": true,
    "type": "js.string",
    "value": "this is a primitive value!"
}
```

This will be deserialized into the concrete type of a string with the value `this is a primitive value!`.

## Collections

Currently the only supported serialization collection is an array, which looks like this:

```json
{
    "type": "js.array",
    "value": [
        {
            "type": "jamjar.Vector",
            "value": {
                "x": 5,
                "y": 3
            }
        },
        {
            "type": "jamjar.Vector",
            "value": {
                "x": 3,
                "y": 5
            }
        }
    ]
}
```

This will be deserialized at runtime into the concrete type of an array of [Vector] objects.

[Vector.Deserialize]: ../../reference/classes/vector/#deserialize
[Vector]: ../../reference/classes/vector
[ISerializable]: ../../reference/interfaces/iserializable
