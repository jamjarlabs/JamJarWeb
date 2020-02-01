[![Build](https://github.com/jthomperoo/jamjar/workflows/JamJar/badge.svg)](https://github.com/jthomperoo/JamJar/actions)
[![codecov](https://codecov.io/gh/jthomperoo/jamjar/branch/master/graph/badge.svg)](https://codecov.io/gh/jthomperoo/jamjar)
[![License](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

# JamJar 2D Typescript Game Engine

JamJar is a 2D typescript game engine, designed to simplify building browser WebGL based games.  
The engine is built for the source to be looked at and understood, to help in understanding game dev concepts.  

JamJar provides the following:
* Entity-Component-System architecture.
* Composition based entities and components.
* Regular game loop.
* Sprites and rendering.
* Collision detection.
* Scene management.
* Camera systems.
* Basic physics for velocities/acceleration/rotation.
* In development - Rigidbody system

## Game development

## Engine development

### Dependencies

* node
* yarn

### Set up

1. Clone this project.
2. Install dependencies `yarn install`.

### Developing

Commands available:

* `yarn lint` - Lints the code, if this doesn't pass the CI will fail.
* `yarn build` - Builds the `/lib` folder, `/lib` is the JS distributable code built from the TypeScript.
* `yarn watch` - Builds the project, but rebuilds on changes.