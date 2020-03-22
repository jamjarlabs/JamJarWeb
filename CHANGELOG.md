# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [v0.5.0] - 2020-03-22
### Added
- `zOrder` field to sprites, to determine which sprites should be rendered infront of which.
### Changed
- `System` and descendants of `System` now use optional parameters rather than an object containing multiple parameters.
- `Pointer` events are now published immediately and do not wait for the next update.
### Fixed
- `PointerCameraInfo.withinBounds` now correctly calculated.

## [v0.4.1] - 2020-03-20
### Fixed
- `worldPosition` now correctly calculated; correctly handles new coordinate space.

## [v0.4.0] - 2020-03-20
### Added
- New `UISystem` for creating HUDs and UIs, position and scale relative to camera view rather than world space.
### Changed
- Changed coordinate systems from `(-0.5, -0.5) -> (0.5, 0.5)` to `(-1, -1) -> (1, 1)` to be more intuitive.
  - `Camera` field `viewportPosition` changed.
  - `PointerCameraInfo` field `cameraPosition` changed.
  - `Pointer` field `elementPosition` changed.
  - For `UI` enabled entities, the `Transform` field `position` changed.

## [v0.3.0] - 2020-03-05
### Added
- Added `FullscreenSystem` to handle fullscreen events and pointer lock.
- `PointerSystem` supports pointer lock through the `FullscreenSystem`.
- `PointInside` function for shapes (`Polygon` and `Ellipse`), determines if a point is inside the polygon.
### Changed
- `KeyboardSystem` messages emitted use JS `KeyboardEvent.code` (physical keyboard) rather than `KeyboardEvent.key` (input character).
- `System` to store `SystemEntities` as a map rather than as an array, for easier random access.
### Removed
- `GetSystemEntity` - no longer needed as `SystemEntities` stored as map.

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

[Unreleased]: https://github.com/jamjarlabs/jamjar/compare/v0.5.0...HEAD
[v0.4.1]: https://github.com/jamjarlabs/jamjar/compare/v0.4.1...v0.5.0
[v0.4.1]: https://github.com/jamjarlabs/jamjar/compare/v0.4.0...v0.4.1
[v0.4.0]: https://github.com/jamjarlabs/jamjar/compare/v0.3.0...v0.4.0
[v0.3.0]: https://github.com/jamjarlabs/jamjar/compare/v0.2.0...v0.3.0
[v0.2.0]: https://github.com/jamjarlabs/jamjar/compare/0.1.0...v0.2.0
[0.1.0]: https://github.com/jamjarlabs/jamjar/releases/tag/0.1.0