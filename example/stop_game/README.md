# Stop Game

This is an example game showing how a site hosting a JamJar game can stop a running game.

## Overview

The game itself is a simple red box that rotates, it will stop rotating only if the game has been stopped.

The game is stopped by a button:

```html
<button onclick="window.JamJar.StopGames()">Stop the game</button>
```

This button uses the `window.JamJar.StopGames()` global function to stop the game.

## Running

> This example uses a relative dependency link to the JamJar engine to make sure it uses the latest code, if copying
> this code be sure to run `yarn add jamjar` to tie down to a specific version.

Run `yarn` to download the required dependencies.

* `yarn start` - Run the example using webpack-dev-server.
* `yarn build` - Build the example into the `dist/` folder.
