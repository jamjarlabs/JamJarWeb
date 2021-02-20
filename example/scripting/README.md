# Scripting

This example showcases how JamJar games can dynamically load in scripts in JavaScript form to be executed at runtime.

## Overview

This example loads in two scripts (`assets/collision_enter.js` and `assets/collision_exit.js`) which are simple scripts
that change the color of an object on collision enter and exit.

The example itself includes three entities that collide with eachother, triggering the scripts and changing colors.

## Running

> This example uses a relative dependency link to the JamJar engine to make sure it uses the latest code, if copying
> this code be sure to run `yarn add jamjar` to tie down to a specific version.

Run `yarn` to download the required dependencies.

* `yarn start` - Run the example using webpack-dev-server.
* `yarn build` - Build the example into the `dist/` folder.
