[![Build Status](https://github.com/jamjarlabs/jamjar/workflows/JamJar/badge.svg)](https://github.com/jamjarlabs/JamJar/actions)
[![CodeCov Report](https://codecov.io/gh/jamjarlabs/jamjar/branch/master/graph/badge.svg)](https://codecov.io/gh/jamjarlabs/jamjar)
[![License - Apache 2.0](http://img.shields.io/:license-apache-blue.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)
[![Documentation Status](https://readthedocs.org/projects/jamjar/badge/?version=latest)](https://jamjar.readthedocs.io/en/latest)
[![NPM Package](https://img.shields.io/npm/v/jamjar)](https://www.npmjs.com/package/jamjar)

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

## More information

Check [out the Wiki for more information](https://jamjar.readthedocs.io/en/latest).

## Dependencies

Dependencies for developing this project:

* [`node`](https://nodejs.org/en/) >= `v12.14.x` 
* [`yarn`](https://legacy.yarnpkg.com/en/) >= `1.19.x`

Dependencies to view docs locally:

* [`mkdocs`](https://www.mkdocs.org/)

Docs also require some plugins, use `pip install -r docs/requirements.txt` to get the required plugins.

## Set up

1. Clone this project.
2. Install dependencies `yarn install`.

## Developing

Commands available:

* `yarn lint` - Lints the code, if this doesn't pass the CI will fail.
* `yarn build` - Builds the `/lib` folder, `/lib` is the JS distributable code built from the TypeScript.
* `yarn watch` - Builds the project, but rebuilds on changes.
* `yarn docs` - Serve documentation locally.