# Canvas Resize Utilities

JamJar provides a number of utilities for resizing the canvas that can be used by games to manually set the size
of a canvas, or can be used in conjunction with the [automatic canvas resizing system](./automatic-canvas-resizing.md).

The canvas resize utilities are grouped under the [CanvasResize] module.

## Get the largest resolution for an aspect ratio with maximums

The largest resolution for an aspect ratio between maximum width and height can be found by using the
[GetLargestResolutionForAspect] function. This is used in the automatic canvas resizing system, but may also be
useful if manually calculating the size/resolution of a canvas. The function takes as input an aspect ratio and a
maximum width and height for the resolution, and returns the largest aspect ratio that conforms to this.

For example:

```typescript
const aspect = 16/9;
const maxResolution = [1920, 1080];
const canvasResolution = CanvasResize.GetLargestResolutionForAspect(aspect, maxResolution[0], maxResolution[1]);

console.log (`The canvas should be set to ${canvasResolution[0]} x ${canvasResolution[1]}`);
```

## Get the aspect ratio of a resolution that is closest to a defined list of aspect ratios

The aspect ratio that is closest to a defined list of ratios for a provided resolution can be found by using the
[GetClosestAspectRatioToResolution] function. This can be used to get a good initial estimate of a user's aspect ratio
based on their screen size. The function takes as input a resolution, and optionally a list of aspect ratios (if this
is not provided it will use a default list of common aspect ratios), and returns the aspect ratio from the list which
is closest to the resolution provided.

For example:

```typescript

const messageBus = new MessageBus();
const canvas = document.getElementById(window.JamJar.CanvasID) as HTMLCanvasElement;
const wrapper = document.getElementById(window.JamJar.CanvasWrapperID) as HTMLElement;

// List of possible ratios
const ratios = [
    [4, 3],
    [16, 9],
    [16, 10]
];

// Get closest aspect ratio
const closestAspectRatio = CanvasResize.GetClosestAspectRatioToResolution(screen.width, screen.height, ratios);

new CanvasResizeSystem(messageBus, canvas, wrapper, closestAspectRatio[0]/closestAspectRatio[1]);
```

This uses the [GetClosestAspectRatioToResolution] function to get an estimated best aspect ratio from the list of
three provided aspect ratios based on the user's screen size. The closest aspect ratio is then provided to the
[CanvasResizeSystem] (see the [automatic canvas resizing system documentation](./automatic-canvas-resizing.md) for
more details) to handle automatic resizing of the canvas.

If a list of ratios to choose from is not provided, by default the function will use this list:

- 21/9
- 16/10
- 16/9
- 4/3
- 1/1
- 9/16

[CanvasResize]:../reference/modules/canvasresize.md
[GetLargestResolutionForAspect]:../reference/modules/canvasresize.md#getlargestresolutionforaspect
[GetClosestAspectRatioToResolution]:../reference/modules/canvasresize.md#getclosestaspectratiotoresolution
[CanvasResizeSystem]:../reference/classes/canvasresizesystem.md
