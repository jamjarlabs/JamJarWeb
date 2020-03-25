# Sprite System

The [`SpriteSystem`](../../reference/classes/spritesystem) allows rendering
world objects - with positions and scales in world space rather than the
[`UISystem`](../../reference/classes/uisystem) which operates in camera space.

## Setting up the Sprite System

To set up a [`SpriteSystem`](../../reference/classes/spritesystem), you simply
need to provide a message bus.

```typescript
new SpriteSystem(messageBus);
```

## Peer dependencies

The [`SpriteSystem`](../../reference/classes/spritesystem) will only work in
conjunction with some kind of rendering system, such as the
[`WebGLSystem`](../../reference/classes/webglsystem) to actually render the
elements; the [`SpriteSystem`](../../reference/classes/spritesystem) is a
pre-rendering system.

## Creating an entity with a sprite

An [`Entity`](../../reference/classes/entity) can be given a sprite by adding
the [`Sprite`](../../reference/classes/sprite) component to an entity.

```typescript
const spriteEntity = new Entity(messageBus);
spriteEntity.Add(new Transform(new Vector(0, 0), new Vector(5,5)));
spriteEntity.Add(new Sprite(new Color(1, 1, 1, 1), {
    bounds: Polygon.Rectangle(1, 1),
    texture: new Texture("example_texture", new Polygon([new Vector(0, 0), new Vector(1, 0), new Vector(1, 1), new Vector(0, 1)]).GetFloat32Array())
}));
```
This example shows creating an [`Entity`](../../reference/classes/entity) which
will use the [`Sprite`](../../reference/classes/sprite) component to render
using the `example_texture` texture.

## Z Order

Sprites contain a field [`zOrder`](../../reference/classes/sprite#zorder), which
determines the precendence with which sprites will appear on the screen. Objects
with a higher z order will appear ahead of objects with a lower z order.

![Example Z Order](../assets/z_order.svg)

## Textures

Sprites can optionally include a [`Texture`](../../reference/classes/texture),
if no [`Texture`](../../reference/classes/texture) is provided the colour
provided will simply be rendered instead.