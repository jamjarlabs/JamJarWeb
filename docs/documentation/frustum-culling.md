# Frustum Culling

*Frustum Culling* is the process of eliminating renderables that are outside of the view that should be rendered. This
process occurs with the use of Collision Algorithms - which are abstracted out and can be swapped in and out for
performance/use cases in the [FrustumCuller].

The [FrustumCuller] can be customised by providing it with different algorithms to suit your need.

The [FrustumCuller] can then be provided to a *pre-render* [System] such as [SpriteSystem] to provide culling logic.


[FrustumCuller]:../../reference/classes/frustumculler
[System]:../../reference/classes/system
[SpriteSystem]:../../reference/classes/spritesystem
