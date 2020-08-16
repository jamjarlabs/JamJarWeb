# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic
Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- `HTTPAudioSystem` for loading audio assets over HTTP.
- `AudioSourceSystem` for interpreting `AudioSource` components and using them
  to play audio.
  - Audio can be played by adding an `AudioSource` to an entity and configuring
    it.
- Scripting system.
  - `HTTPScriptSystem` loads scripts over HTTP.
  - `ScriptTriggerSystem` handles standalone scripts that can be triggered on
  events, currently only event supported is `Update`.
  - `ScriptEngineSystem` handles executing scripts and provides an interface
  between the game engine and the script.
  - `Collider` now has an optional `script` string, which allows triggering a
  script on collision.
  - Scripts can be manually triggered by sending a `ScriptTriggerRequest` as a
  message.
- `AABB` shape, Axis-Aligned Bounding Box - ignores rotation, good for faster
collision detection than fully defined Polygons.
- `AABBAlgorithm` for detecting collisions between AABBs, can take any shape,
only does checks in 4 directions.
### Changed
- Collision events now set to be on collision enter and exit only, not every
update that the collision is occurring for.
- Scripts can now be set to be trigged on collision enter or exit in the
`Collider` component. Scripts no longer can be triggered on every update for
the duration of a collision.
- Collision algorithms now take as input an array of `IShape` to check, rather
than simply two `IShape`, and returns a list of `CollisionInfo`, rather than a
single `CollisionInfo` or undefined.
- Renamed `CalculateCollision` -> `CalculateCollisions` in
`ICollisionAlgorithm`
- `GJKAlgorithm` updated to match new `ICollisionAlgorithm` interface.
- `AlwaysCollideAlgorithm` renamed `AllCollideAlgorithm`.
- `NeverCollideAlgorithm` renamed `NoneCollideAlgorithm`.
### Fixed
- The zOrder is now correctly interpreted in `WebGLSystem` rather than being
  in order of renderable creation.
- `Rotate` and `RotateDeg` now calculating correctly.

## [v0.8.0] - 2020-05-28
### Added
- Ability to configure how textures are configured with `ITextureOptions`.
  - Can specify x and y wrap.
    - Repeat.
    - Repeat mirror.
    - Clamp to edge.
  - Can specify magnification and minification filters.
    - Nearest neighbour.
    - Bilinear.
    - Trilinear.
  - Can specify generating mipmaps.
- Primitive rendering, can now render primitive shapes by adding a `Primitive`
  component - can render lines, polygons, and points; allows specifying draw
  mode.
  - Allows more low level control over rendering, rather than `Sprite`, which
    has a fixed draw mode and is further processed by the `SpriteSystem`.
- `Material` property `color` added, if there is a texture the texture will be
  mixed with this color, if there is no texture the color will be used directly.
- Simple `tags` option for entities, an array of string tags that can be used to
  discriminate between entities without requiring an entirely new component.
- Simple `layers` option for entities, an array of string layers, intended for
  grouping entities and treating them differently.
- `CollisionSystem` now takes an optional `collisionLayerPairs` parameter, if
  this is provided it allows for filtering collisions by layers - with only
  specified layers allowed to collide. If no `collisionLayerPairs` provided,
  no filtering is applied.
- New option for loading textures, `mirror` - allows loading textures in a
  mirrored mode (flip horizontally and vertically).
- New static quad functions in `Polygon`, `QuadByPoints` and `QuadByDimensions`
  to generate quads easily.
- Sprite Animation through the `SpriteAnimator` components and
  `SpriteAnimatorSystem`.
  - Can make animations with a `SpriteAnimation`, allows switching between
    animation states.
  - `SpriteAnimation` allows specifying animation frame rate.
  - `SpriteAnimation` defined as an array of `SpriteKeyFrame`, which contain
    information such as the material to render with, the duration of the
    keyframe etc.
- New `GenerateSpritesheetIndex` static function for `Texture`, allows creation
  of an indexed sprite sheet for ease of use with a texture.
### Changed
- Images now loaded with a new `ImageRequest` rather than an `ImageAsset` -
  `ImageAsset` used internally.
  - Message for loading images moved from `ImageAsset` to `ImageRequest`.
- Optional font options specified by a `IFontOptions` interface, allows
  overriding default font options such as `characters`, `buffer`, `cutoff` etc.
- `Material` options specified by new `IMaterialOptions`, a collection of
  optional arguments that override material defaults, such as `texture`, `color`
  and `shaders`.
- `Material` property `texture` now optional, if none provided it will render
  only using the `color`.
- `TRIANGLES` draw mode now used instead of `TRIANGLES_FAN` for sprites.
- Sprites and text now rendered exclusively using quads, sprite shape can no
  longer be specified.
### Fixed
- Z order bug where an error was thrown if there were gaps between z orders,
  e.g. `0, 1, 3` would error because `2` was missing - caused due to internal
  representation of z order with an array; changed to use a map.
- Dispatches in the message bus could be skipped if a subscriber unsubscribed
  from the message, causing the order to be confused and subscribers to be
  skipped. Fixed by cloning the dispatch queue before dispatching.
### Removed
- Cannot draw with `TRIANGLES_FAN` draw mode.

## [v0.7.0] - 2020-05-04
### Added
- Frustum Culling separated out, can choose a collision algorithm to use for
  culling.
- `Apply4D` added to `Polygon` to apply 4D matrices.
- `Center` added to `Polygon` to get center of shape.
- `Center` added to `IShape`.
- Wheel support, can now listen for `wheel` events, which are published with
  throttled `WheelEvent` messages.
### Changed
- Collision algorithms now abstracted as `ICollisionAlgorithm`, can be swapped
  out in `CollisionSystem` and `FrustumCulling`.
    - Collision algorithms take two shapes as input and output a `CollisionInfo`
    object, or undefined if there is no collision.
- GJK refactored to work as a `ICollisionAlgorithm`.

## [v0.6.1] - 2020-04-04
### Fixed
- `Text` position correctly calculated for `UI` entities.

## [v0.6.0] - 2020-04-04
### Added
- `RectangleByPoints` function in `Polygon`, creates a new `Polygon` rectangle
  between the two provided points.
- Frustum culling, only rendering what is on screen to improve performance.
- Text rendering with the `TextSystem`, `FontAsset` and `Text` Component.
  - Supports any font loaded through the browser.
  - Specify font size, weight, family, and other tuning options through
    `FontAsset` for a font.
  - Specify z order, alignment, spacing, color, offset and shaders through
    `Text` component for a specific piece of text.
  - New fragment shader for rendering text, `default_text_fragment`.
- `Renderable` can now have additional information attached to them by
  pre-rendering systems, which can be accessed by shaders.
- `Material` represents shaders and a texture to apply. Can be applied to
  entities, allowing custom shaders.
- Can now load custom shaders using a `ShaderAsset`.
### Changed
- Merged `SpriteSystem` and `UISystem` into a single system - `SpriteSystem`.
- `Rectangle` function in `Polygon` renamed `RectangleByDimensions`.
- `RectangleByDimensions` takes an optional origin point, default `0,0`.
- All sprites require a `Texture` now, no longer optional.
- `ImageSystem` renamed to `HTTPImageSystem`.
- Group by texture for WebGL rendering to reduce texture switching and improve
  performance.
### Fixed
- `Polygon.PointInside` does not mistakenly predict point to the right of the
  polygon are inside.

## [v0.5.0] - 2020-03-22
### Added
- `zOrder` field to sprites, to determine which sprites should be rendered
  infront of which.
### Changed
- `System` and descendants of `System` now use optional parameters rather than
  an object containing multiple parameters.
- `Pointer` events are now published immediately and do not wait for the next
  update.
### Fixed
- `PointerCameraInfo.withinBounds` now correctly calculated.

## [v0.4.1] - 2020-03-20
### Fixed
- `worldPosition` now correctly calculated; correctly handles new coordinate
  space.

## [v0.4.0] - 2020-03-20
### Added
- New `UISystem` for creating HUDs and UIs, position and scale relative to
  camera view rather than world space.
### Changed
- Changed coordinate systems from `(-0.5, -0.5) -> (0.5, 0.5)` to `(-1, -1) ->
  (1, 1)` to be more intuitive.
  - `Camera` field `viewportPosition` changed.
  - `PointerCameraInfo` field `cameraPosition` changed.
  - `Pointer` field `elementPosition` changed.
  - For `UI` enabled entities, the `Transform` field `position` changed.

## [v0.3.0] - 2020-03-05
### Added
- Added `FullscreenSystem` to handle fullscreen events and pointer lock.
- `PointerSystem` supports pointer lock through the `FullscreenSystem`.
- `PointInside` function for shapes (`Polygon` and `Ellipse`), determines if a
  point is inside the polygon.
### Changed
- `KeyboardSystem` messages emitted use JS `KeyboardEvent.code` (physical
  keyboard) rather than `KeyboardEvent.key` (input character).
- `System` to store `SystemEntities` as a map rather than as an array, for
  easier random access.
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

[Unreleased]:
https://github.com/jamjarlabs/jamjar/compare/v0.8.0...HEAD
[v0.8.0]:
https://github.com/jamjarlabs/jamjar/compare/v0.7.0...v0.8.0
[v0.7.0]:
https://github.com/jamjarlabs/jamjar/compare/v0.6.1...v0.7.0
[v0.6.1]:
https://github.com/jamjarlabs/jamjar/compare/v0.6.0...v0.6.1
[v0.6.0]:
https://github.com/jamjarlabs/jamjar/compare/v0.5.0...v0.6.0
[v0.5.0]:
https://github.com/jamjarlabs/jamjar/compare/v0.4.1...v0.5.0
[v0.4.1]:
https://github.com/jamjarlabs/jamjar/compare/v0.4.0...v0.4.1
[v0.4.0]:
https://github.com/jamjarlabs/jamjar/compare/v0.3.0...v0.4.0
[v0.3.0]:
https://github.com/jamjarlabs/jamjar/compare/v0.2.0...v0.3.0
[v0.2.0]:
https://github.com/jamjarlabs/jamjar/compare/0.1.0...v0.2.0
[0.1.0]:
https://github.com/jamjarlabs/jamjar/releases/tag/0.1.0
