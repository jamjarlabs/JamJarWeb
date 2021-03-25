# Host Interactions

Sites hosting a game can provide variables to games by using the `window.JamJar` global variable, variables and
functions are inserted into this global context allowing two way interactions, from game to host site and from host
site to game.

## Canvas ID and wrapper ID

The variable `window.JamJar.CanvasID` can be injected by a host site to specify which canvas the game should render to.
The variable `window.JamJar.CanvasWrapperID` can also be injected to allow the host site to provide a wrapper around
the canvas to provide maximum sizes for automatic canvas resizing systems.

For example:

```html
<script>
    window.JamJar = {};
    window.JamJar.CanvasID = "game-canvas";
    window.JamJar.CanvasWrapperID = "game-canvas-wrapper";
</script>
```

These variables can be used like this:

```typescript
if (window.JamJar === undefined) {
    throw ("Missing required JamJar configuration options");
}

if (window.JamJar.CanvasID === undefined) {
    throw ("Missing required CanvasID");
}

// Get canvas
const canvas = document.getElementById(window.JamJar.CanvasID) as HTMLCanvasElement;

// Get WebGL2 context
const gl = canvas.getContext("webgl2", { alpha: false });
if (!gl) {
    throw ("WebGL2 not supported in this browser")
}
```

## Root path

The `window.JamJar.RootPath` can be provided to allow loading assets from a different relative path. For example if the
game is hosted on the site `example.com` but the game and its assets are loaded in from `assets.example.com` then
`assets.example.com` could be provided as the root path so the game knows where to look for assets.

This variable is used behind the scenes by the HTTP Image/Audio/Script loading systems to resolve to the correct path.

The variables can be provided like this:

```html
<script>
    window.JamJar = {};
    window.JamJar.CanvasID = "game-canvas";
    window.JamJar.CanvasWrapperID = "game-canvas-wrapper";
    window.JamJar.RootPath = "/path/the/game/was/loaded/from";
</script>
```

## Stopping games

Games can be stopped by the host executing the `window.JamJar.StopGames()` function, this will stop any currently running
JamJar game on the host site.

For example:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Game Hosting Site</title>
        <script>
            window.JamJar = {};
            window.JamJar.CanvasID = "game-canvas";
            window.JamJar.CanvasWrapperID = "game-canvas-wrapper";
            window.JamJar.RootPath = "/";
        </script>
    </head>
    <body>
        <div id="game-canvas-wrapper">
            <canvas id="game-canvas"></canvas>
        </div>
        <button onclick="window.JamJar.StopGames()">Stop the game</button>
        <script src="./main.js" type="module"></script>
    </body>
</html>
```
