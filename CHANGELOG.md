# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- `KeyboardSystem` messages emitted use JS `KeyboardEvent.code` (physical keyboard) rather than `KeyboardEvent.key` (input character).

## [v0.2.0] - 2020-02-24
### Added
- `KeyboardSystem` to manage keyboard input.
- `PointerSystem` to manage pointer input (mouse, touch).
- Separate Rendering into stages, with `pre-render`, `render` and `post-render`. 
- Sprites now processed in `pre-render`.
- WebGL rendering system added.
- `ImageSystem` to handle loading image assets.
- Rendering system now supports rendering textures.

## [0.1.0] - 2019-10-27
### Added
- Entity-Component-System architecture.
- Composition based entities and components.
- Regular game loop.
- Sprites and rendering.
- Collision detection.
- Scene management.
- Camera systems.
- Basic physics for velocities/acceleration/rotation.

[Unreleased]: https://github.com/jthomperoo/jamjar/compare/v0.2.0...HEAD
[v0.2.0]: https://github.com/jthomperoo/jamjar/compare/0.1.0...v0.2.0
[0.1.0]: https://github.com/jthomperoo/jamjar/releases/tag/0.1.0