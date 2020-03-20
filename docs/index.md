[![Build Status](https://github.com/jamjarlabs/jamjar/workflows/JamJar/badge.svg)](https://github.com/jamjarlabs/JamJar/actions)
[![CodeCov Report](https://codecov.io/gh/jamjarlabs/jamjar/branch/master/graph/badge.svg)](https://codecov.io/gh/jamjarlabs/jamjar)
[![License - Apache 2.0](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![Documentation Status](https://readthedocs.org/projects/jamjar/badge/?version=latest)](https://jamjar.readthedocs.io/en/latest)
[![NPM Package](https://img.shields.io/npm/v/jamjar/latest)](https://www.npmjs.com/package/jamjar)

# JamJar 2D Typescript Game Engine

JamJar is a 2D typescript game engine, designed to simplify building browser WebGL based games.  
The engine is built for the source to be looked at and understood, to help in understanding game dev concepts.  

JamJar provides the following:

* Entity-Component-System architecture.
* Composition based entities and components.
* Regular game loop.
* Set of standard systems to use
  * UI System - user interfaces (HUDs etc.).
  * WebGL System - rendering using WebGL onto a HTML5 canvas.
  * Collision System - collisions between colliders.
  * Fullscreen System - fullscreen events and pointer lock.
  * Interpolation System - smoothing movements between frames.
  * Keyboard System - keyboard input.
  * Pointer System - browser pointer input (mouse, touch etc.)
  * Image System - loading image assets.
  * Sprite System - processing sprites and images before rendering.
  * Motion System - simple motion; velocity, acceleration, angular velocity etc.