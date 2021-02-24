# Automatic Canvas Resizing

JamJar includes a system to handle automatically resizing the game canvas, allowing the game to specify an aspect
ratio to conform to, alongside limiting the canvas by setting maximum resolutions.

This uses the [CanvasResizeSystem] which is provided with the canvas to manage, alongside a wrapper around the canvas.
This wrapper is used to determine what size to set the canvas to. The wrapper allows the game to be integrated with
a website and sized and positioned appropriately with CSS. The wrapper should be considered the maximum game size, the
automatic canvas resizing system will try and fill the wrapper space while maintaining the provided aspect ratio and
maximum resolutions. As the wrapper is resized (e.g. if the webpage is stretched or compressed by a user) the canvas
will automatically resize to fit as best as it can.

## Setting up the automatic resize system

The automatic resizing system can be set up by providing some key details:

```typescript
// Get canvas
const messageBus = new MessageBus();

// Get the canvas
const canvas = document.getElementById(window.JamJar.CanvasID) as HTMLCanvasElement;

// Get the wrapper
const wrapper = document.getElementById(window.JamJar.CanvasWrapperID) as HTMLElement;

// Set the aspect ratio
const aspect = 16/9;

// (Optional) maximum resolution
const maxResolution = [1920, 1080];

new CanvasResizeSystem(messageBus, canvas, wrapper, aspect, maxResolution);
```

This will set up the automatic resizing, it will try to make sure the canvas fills the wrapper as best as it can, while
conforming to the aspect ratio provided and staying within the maximum resolution. If no maximum resolution is provided
then it will try and make it as big as it can within the wrapper and with the aspect provided.

The automatic resizing system follows these rules for setting the canvas size:

1. In the aspect ratio provided.
2. Smaller than or equal to the maximum resolution if provided.
3. Smaller than or equal to the wrapper size in pixels if not full screen.
4. Smaller than or equal to the screen resolution if full screen.
5. The largest possible resolution within these criteria.

## Updating aspect ratio

The aspect ratio can be updated after the system has been created by sending a message:

```typescript
// The aspect ratio to update to
const aspect = 4/3;

// Send the update aspect ratio message
messageBus.Publish(new Message(CanvasResizeSystem.MESSAGE_SET_ASPECT_RATIO, aspect));
```

## Updating maximum resolution

The maximum resolution can be set after the system has been created by sending a message:

```typescript
// The maximum resolution to update to
const maxResolution = [800, 600];

// Send the update maximum resolution message
messageBus.Publish(new Message(CanvasResizeSystem.MESSAGE_SET_MAX_RESOLUTION, maxResolution));
```

The maximum resolution can also be disabled by sending `null` as the resolution:

```typescript
// Send the message to 'unset' the maximum resolution
messageBus.Publish(new Message(CanvasResizeSystem.MESSAGE_SET_MAX_RESOLUTION, null));
```

## Full screen

The [CanvasResizeSystem] handles entering and exiting full screen, if the game is full screened then the wrapper will
be ignored for the duration of the full screen and instead the screen resolution will be used instead.

[CanvasResizeSystem]:../reference/classes/canvasresizesystem.md
