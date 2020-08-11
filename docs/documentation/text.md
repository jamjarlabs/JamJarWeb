# Text

The [TextSystem] allows rendering text - taking in text components and producing
a list [Renderable] objects for a [RenderSystem] to use.

## Peer dependencies

The [TextSystem] will only work in conjunction with some kind of rendering
system, such as the [WebGLSystem] to actually render the elements; the
[TextSystem] is a pre-rendering system.

## Setting up the Text System

To set up a [TextSystem], you simply need to provide a message bus.

```typescript
new TextSystem(messageBus);
```

## Loading a font

Before rendering text, a font must be loaded so it can be used. A font can be
loaded by sending a load font message with a [FontAsset] payload containing the
information about the font. Any font that has already been loaded by the browser
can be loaded in, allowing use of external fonts by including it in CSS or in
HTML, for example:

```html
<link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet">
```

This loads the `VT323` font into the browser using HTML.

```typescript
messageBus.Publish(new Message<FontAsset>(FontAsset.MESSAGE_REQUEST_LOAD, new FontAsset(
    "example_font",
    "VT323",
    "normal",
    100,
    0,
    1,
    1,
    "abcdefghijklmnopqrstuv"
)));
```

This font load message will request that the `VT323` font is loaded, with the
following settings:

- Font weight = `normal`
- Font size = `100`
- Buffer = `0`
- Radius = `1`
- Cutoff = `1`
- Characters to load = `abcdefghijklmnopqrstuv`

This will load the font with the settings above, loading only the characters
provided, which will be generated into a texture available to the render system
for rendering text. Any characters not specified in this will not be rendered.
The font will be stored with the unique name `example_font`, allowing it to be
referenced when creating [Text] components.

## Creating an entity with text

Once a font has been loaded, text can be drawn by attaching a [Text] and a
[Transform] component to the entity; the [TextSystem] will pick this up and
process it before sending it to a [RenderSystem].

```typescript
const textEntity = new Entity(messageBus);
textEntity.Add(new Transform(new Vector(0, 0), new Vector(5,5)));
textEntity.Add(new Text(1, "hello world", "example_font", TextAlignment.Center, 2.5, new Color(0,1,0)));
```

This would create text "hello world" that is center aligned, using the font
`example_font`, with spacing between each character of `2.5`, and the text will
be green.

## Alignment

See [TextAlignment] for alignment options.

## World space text

If [Text] is added without a [UI] component, the text is rendered in world
space. This means that the [Transform] is interpreted in the normal way, within
the world. The [Transform] position determines the origin point for the text,
and the text will be positioned differently depending on the [TextAlignment].
The scale determines how wide and tall each individual character is, not the
entire word.

## UI text

If [Text] is added with a [UI] component, the text is rendered camera space.
This means that the [Transform] is interpreted to be relative to the camera that
is being targeted. The [Transform] position determines the origin point for the text,
and the text will be positioned differently depending on the [TextAlignment]. In
camera space the position will be from `-1` to `1`, with `0,0` as the center of
the camera, `1,1` being the top right, and `-1,-1` being the bottom left. The
scale determines how wide and tall each individual character is, not the entire
word, and it is relative to the camera, with a scale of `1,1` being the entire
camera viewport, and `0.5,0.5` being half of it's width and height.

[TextSystem]: ../../reference/classes/textsystem
[Renderable]: ../../reference/classes/renderable
[RenderSystem]: ../../reference/classes/rendersystem
[WebGLSystem]: ../../reference/classes/webglsystem
[FontAsset]: ../../reference/classes/fontasset
[Text]: ../../reference/classes/text
[Transform]: ../../reference/classes/transform
[TextAlignment]: ../../reference/enums/textalignment
[UI]: ../../reference/classes/ui