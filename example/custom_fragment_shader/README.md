# Custom Fragment Shader

This example showcases how a custom fragment shader can be created and used.

## Overview

This example loads in some simple GLSL as a fragment shader to make everything green:

```glsl
#version 300 es
precision mediump float;

in vec2 vTextureCoordinate;

out vec4 outColor;

void main() {
    outColor = vec4(0,1,0,1);
}
```

The example then renders an example sprite using this custom shader.

## Running

> This example uses a relative dependency link to the JamJar engine to make sure it uses the latest code, if copying
> this code be sure to run `yarn add jamjar` to tie down to a specific version.

Run `yarn` to download the required dependencies.

* `yarn start` - Run the example using webpack-dev-server.
* `yarn build` - Build the example into the `dist/` folder.
