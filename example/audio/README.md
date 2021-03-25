# Audio

This example showcases how audio can be loaded in over HTTP and played.

## Overview

The example loads in an MP3 file over HTTP.

This example is two buttons, one to start playing the looped audio MP3, another to stop it from playing.

The game has to have a button press before starting, since Chrome and Firefox require user interaction before audio
can be played.

## Running

> This example uses a relative dependency link to the JamJar engine to make sure it uses the latest code, if copying
> this code be sure to run `yarn add jamjar` to tie down to a specific version.

Run `yarn` to download the required dependencies.

* `yarn start` - Run the example using webpack-dev-server.
* `yarn build` - Build the example into the `dist/` folder.
