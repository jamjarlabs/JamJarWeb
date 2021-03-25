# Animation

This example shows how a JamJar game can use the sprite animation systems to loop through sprite keyframes.

## Overview

The example loads in a sprite sheet from `assets/example.png` and sets up keyframes using the sprite sheet. The
animation changes between animation modes, with different play rates.

## Running

> This example uses a relative dependency link to the JamJar engine to make sure it uses the latest code, if copying
> this code be sure to run `yarn add jamjar` to tie down to a specific version.

Run `yarn` to download the required dependencies.

* `yarn start` - Run the example using webpack-dev-server.
* `yarn build` - Build the example into the `dist/` folder.
