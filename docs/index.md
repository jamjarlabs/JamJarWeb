[![Build
Status](https://github.com/jamjarlabs/jamjar/workflows/JamJar/badge.svg)](https://github.com/jamjarlabs/JamJar/actions)
[![CodeCov
Report](https://codecov.io/gh/jamjarlabs/jamjar/branch/master/graph/badge.svg)](https://codecov.io/gh/jamjarlabs/jamjar)
[![License - Apache
2.0](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![Documentation
Status](https://readthedocs.org/projects/jamjar/badge/?version=latest)](https://jamjar.readthedocs.io/en/latest)
[![NPM
Package](https://img.shields.io/npm/v/jamjar/latest)](https://www.npmjs.com/package/jamjar)

# JamJar 2D Typescript Game Engine

JamJar is a 2D typescript game engine, designed to simplify building browser
WebGL based games.  
The engine is built for the source to be looked at and understood, to help in
understanding game dev concepts.  

JamJar provides the following:
* Entity-Component-System architecture.
* Composition based entities and components.
* Messaging.
* Regular game loop.
* Custom shader support.
* Set of standard systems to use
  * WebGL - rendering using WebGL onto a HTML5 canvas.
  * Collision - collisions between colliders.
  * Fullscreen - fullscreen events and pointer lock.
  * Interpolation - smoothing movements between frames.
  * Keyboard - keyboard input.
  * Pointer - browser pointer input (mouse, touch etc.)
  * HTTP Image - loading image assets over HTTP.
  * Sprite - processing sprites and images before rendering.
  * Motion - simple motion; velocity, acceleration, angular velocity etc.
  * UI - user interfaces (HUDs etc.).
  * Text - processing text before rendering, handling fonts.
  * Sprite Animation - Animation through sprites.