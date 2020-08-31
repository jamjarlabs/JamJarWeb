# Mutability

A conscious decision has been made to make some important and frequently used structures mutable - meaning that they
are modified in place, rather than being immutable.

These classes are mutable to reduce memory churn and use, as otherwise every operation would result in a new object
being instantiated into memory. This becomes clear in physics and collision calculations, allowing for more memory
efficient operations to be used, rather than creating a large number of objects into memory just to discard them at the
next garbage collection.

This is not only important for keeping memory use down; but more importantly reducing the time the garbage collector
requires to clear out objects - this garbage collection event is handled by the browser, and is beyond the control of
the engine or the game. The garbage collection event is blocking, and will occur between frames; if it takes too long
it could lead to stuttering behaviour and game freezes.

Much of the reasoning behind mutability is based on the super useful [gl-matrix](https://github.com/toji/gl-matrix)
library and [this nice set of slides](http://media.tojicode.com/sfjs-vectors) explaining some of the rationale behind
how that library is built.

## Mutable structures

These key structures are mutable in the engine:

- [Vector]
- [Matrix3D]
- [Matrix4D]

[Vector]:../../reference/classes/vector
[Matrix3D]:../../reference/classes/matrix3d
[Matrix4D]:../../reference/classes/matrix4d
