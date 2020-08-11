# Sprites

Sprites are simple renderable components, allowing shapes to be rendered with
materials applied to them to specify texture, color and shaders.  

The [SpriteSystem] allows rendering [Sprite] components - by tracking [Sprite]
components and generating a list of [IRenderable] for render systems to use.

## Setting up the Sprite System

To set up a [SpriteSystem], you simply need to provide a message bus.

```typescript
new SpriteSystem(messageBus);
```

## Peer dependencies

The [SpriteSystem] will only work in conjunction with some kind of rendering
system, such as the [WebGLSystem] to actually render the elements; the
[SpriteSystem] is a pre-rendering system.

## Creating an entity with a sprite

An [Entity] can be given a sprite by adding the [Sprite] component to an entity.

```typescript
const spriteEntity = new Entity(messageBus);
spriteEntity.Add(new Transform(new Vector(0, 0), new Vector(5,5)));
spriteEntity.Add(new Sprite(
    new Material({
        texture: new Texture("example_texture", Polygon.RectangleByPoints(new Vector(0,0), new Vector(1,1))),
    }), 
    0, 
    Polygon.RectangleByDimensions(1,1)
));
```
This example shows creating an [Entity] which
will use the [Sprite] component to render
using the `example_texture` texture.

## Z Order

Sprites contain a field [zOrder], which determines the precendence with which
sprites will appear on the screen. Objects with a higher z order will appear
ahead of objects with a lower z order.

![Example Z Order](../assets/z_order.svg)

## Material

Sprites specify the [Material] that should be applied when rendering it,
allowing choice over texture, color, and shaders.

## Creating a UI sprite

A UI sprite can be created by adding a [UI] component to an entity, alongside
required [Transform] and [Sprite] components.

```typescript
const gameCamera = new Entity(messageBus);
gameCamera.Add(new Transform(new Vector(0, 0), new Vector(5, 5)));
gameCamera.Add(new Camera());

const uiElement = new Entity(messageBus);
uiElement.Add(new Transform(new Vector(0, 0), new Vector(0.2,0.2)));
uiElement.Add(new Sprite(
    new Material({
        texture: new Texture("example_texture", Polygon.RectangleByPoints(new Vector(0,0), new Vector(1,1))),
    }), 
    0, 
    Polygon.RectangleByDimensions(1,1)
));
uiElement.Add(new UI(gameCamera));
```

This example shows creating a camera, and then a UI element that will display in
the center of the camera - with the `example_texture` texture.

[SpriteSystem]: ../../reference/classes/spritesystem
[Sprite]: ../../reference/classes/sprite
[IRenderable]: ../../reference/interfaces/irenderable
[WebGLSystem]: ../../reference/classes/webglsystem
[Entity]:../../reference/classes/entity
[zOrder]:../../reference/classes/sprite#zorder
[Material]:../../reference/classes/material
[UI]:../../reference/classes/ui
[Transform]:../../reference/classes/transform