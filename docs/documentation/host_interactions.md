# Host Interactions

Sites hosting a game can provide variables to games by using the `window` global variable, variables and functions are
inserted into this global context allowing two way interactions, from game to host site and from host site to game.

## Stopping games

Games can be stopped by the host executing the `window.JamJarStopGames()` function, this will stop any currently running
JamJar game on the host site.

For example:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Game Hosting Site</title>
        <script>
            window.GameCanvasID = "game-canvas";
            window.GameRootPath = "/"
            window.GameCanvasWrapperID = "game-canvas-wrapper"
        </script>
    </head>
    <body>
        <div id="game-canvas-wrapper">
            <canvas id="game-canvas"></canvas>
        </div>
        <button onclick="window.JamJarStopGames()">Stop the game</button>
        <script src="./main.js" type="module"></script>
    </body>
</html>
```
