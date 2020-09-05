# Timestep

The engine uses a semi-fixed timestep, with rendering done as quickly as possible (limited only by the
[requestAnimationFrame] function) and updates delivered in a fixed way.

## Game loop

The game loop exists in the [Game] class.

The game loop in this engine is built following the article
['Fix Your Timestep!' by Glenn Fiedler](https://gafferongames.com/post/fix_your_timestep/). The article sets out nicely
a progression in game loops before concluding with a recommended game loop. To understand the gameloop better, read
the article, but the key points of the approach JamJar uses are laid out here:

- Rendering can occur as fast as possible.
- Physics/Game calculations are uncoupled from this render/loop rate.
- Physics/Game updates can catch up if running behind.
- Physics/Game updates will slow down if ahead.

The basic algorithm that JamJar uses is:

```
timestep = 1/100
currentTime = 0
accumulator = 0

loop(timeSinceStart)
    frameTime = timeSinceStart - currentTime
    if frameTime > 0.25
        frameTime = 0.25

    currentTime = timeSinceStart
    accumulator += frameTime

    while accumulator >= timestep
        update(timestep)
        accumulator -= timestep

    alpha = accumulator / timestep

    render(alpha)

    requestLoop(loop)

loop(0)
```

### Timestep

The timestep of JamJar is for an update to occur every 1/100th of a second.

### Interpolation

Because of the game loop used JamJar must interpolate as part of the rendering process, this means taking the last
rendered position of an object and the current position of the object and rendering at the halfway between these
two positions.

See the [Transform] component and [InterpolationSystem] to see how this previous position is tracked and updated.

See the [SpriteSystem] to see how a pre-render system must use interpolation to prepare [Renderable] objects.

## requestAnimationFrame

This function is the default method of queueing up loops, the callback rate for Chrome and Firefox is 60 frames per
second. This function is also not called if the game tab is not active (user is in another tab).

[requestAnimationFrame]:https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
[Game]: ../../reference/classes/game
[Transform]: ../../reference/classes/transform
[InterpolationSystem]: ../../reference/classes/interpolationsystem
[SpriteSystem]: ../../reference/classes/spritesystem
[Renderable]: ../../reference/classes/renderable
