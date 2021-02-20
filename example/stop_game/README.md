# stop_game

This is an example game showing how a site hosting a JamJar game can stop a running game.

The game itself is a simple red box that rotates, it will stop rotating only if the game has been stopped.

The game is stopped by a button:

```html
<button onclick="window.JamJar.StopGames()">Stop the game</button>
```

This button uses the `window.JamJar.StopGames()` global function to stop the game.

## Running this sample

Since this sample is used to help development, it needs to be configured slightly to run.

In this directory run:

```bash
yarn add jamjar
```

Then the game can be run by using:

```bash
yarn run start
```

The game will be available at <http://0.0.0.0:8000>.
