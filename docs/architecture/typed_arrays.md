# Typed Arrays

Key JamJar geometry objects use typed arrays behind the scenes, such as [Vector], [Polygon], [Matrix3D] and [Matrix4D].

## What are typed arrays?

From [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays):

> JavaScript typed arrays are array-like objects that provide a mechanism for reading and writing raw binary data in
> memory buffers.

The typed array used extensively through JamJar is the [Float32Array], this provides an acceptable level of precision,
while also integrating easily and nicely with WebGL2.

These typed arrays allow more control over the memory of arrays, allowing for performance improvements with the cost
of a loss of flexibility.

## Why typed arrays?

Typed arrays such as [Float32Array] provide some nice benefits over storing simply as `number` or a normal JS array:

- Better control over memory.
- Fast indexing, opportunity for performance improvements.
- Integrates with WebGL(2) with no need for (slow) conversions.

Much of the reasoning behind typed arrays are based on the super useful [gl-matrix](https://github.com/toji/gl-matrix)
library and [this nice set of slides](http://media.tojicode.com/sfjs-vectors) explaining some of the rationale behind
how that library is built.

## How does this affect how geometry objects are used?

This ultimately doesn't affect the geometry objects, the typed arrays are wrapped in class definitions and surrounded
by a more intuiative API, rather than direct array access.

[Vector]:../../reference/classes/vector
[Polygon]:../../reference/classes/polygon
[Matrix3D]:../../reference/classes/matrix3d
[Matrix4D]:../../reference/classes/matrix4d
[Float32Array]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32array
