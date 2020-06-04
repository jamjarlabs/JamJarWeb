# Z Order Example

This example shows how the `zOrder` system works, with higher numbers being
rendered infront of lower numbers.

## Overview

This example loads a sprite sheet (`assets/example.png`) and uses it to create 4
entities, with different `zOrder` values, set to overlap eachother. Each sprite
marks the `zOrder` value with the texture applied to it (`0, 1, 2, 5`). The
higher the `zOrder` the more precedence the sprite is given when rendering, and
it is rendered ontop of the other sprites.

## Running

* `yarn start` - Run the example using webpack-dev-server.
* `yarn build` - Build the example into the `dist/` folder.