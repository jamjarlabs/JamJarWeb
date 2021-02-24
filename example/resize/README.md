# Resize

This is an example game using the automatic canvas resizing system.

## Aspect ratio control

This game uses the `CanvasResizeSystem` to handle resizing the game's canvas, it also uses the `FullscreenSystem` to
handle entering and exiting full screen, which works alongside the automatic canvas resizing.

The game has a custom `AspectControlSystem` which allows user keyboard input to loop through different aspect ratios
and maximum resolutions, and also to enter and exit full screen. When the aspect ratio is changed the game deletes
and recreates the camera to handle the new aspect ratio (otherwise the game would be stretched/compressed). The camera
is always set to show 100 game units in height, the width is calculated as `height (100) * aspect ratio`.

The `AspectControlSystem` also uses the `CanvasResize.GetClosestAspectRatioToResolution` to determine which aspect
ratio it should initially use, taking the screen dimensions and a list of possible ratios and returning the most
likely to fit. This function is useful to provide an initial best estimate of which aspect ratio a user's device
would work with.

## Running

> This example uses a relative dependency link to the JamJar engine to make sure it uses the latest code, if copying
> this code be sure to run `yarn add jamjar` to tie down to a specific version.

Run `yarn` to download the required dependencies.

* `yarn start` - Run the example using webpack-dev-server.
* `yarn build` - Build the example into the `dist/` folder.
