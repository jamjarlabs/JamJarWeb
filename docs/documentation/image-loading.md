# Image Loading

JamJar supports loading images which are then rendered to textures to be used in
games. This process uses the [ImageRequest] object.

## Image Loading Systems

There is currently only one standard image loading system; [HTTPImageSystem]
used for loading images over HTTP. Rendering to textures is handled by separate
Render Systems such as the [WebGLSystem]

## Loading a Simple Image as a Texture

Images are loaded by sending a message to an image loading system with an
attached [ImageRequest] to specify the image.

```typescript
this.messageBus.Publish(Message.New<ImageRequest>(
    ImageRequest.MESSAGE_REQUEST_LOAD,
    new ImageRequest("bullet", "assets/bullet.png")
));
```

This example loads `assets/bullet.png` and if it is successful the texture will
be available under the key `bullet`.

## Using a Loaded Image Texture

Once an image has been loaded into a texture it can now be used for rendering,
such as in a sprite:

```typescript
const bullet = new Entity();
bullet.Add(new Transform(Vector.New(0,0), Vector.New(5,5)));
bullet.Add(new Sprite(new Material(
    new Texture(
        "bullet",
        Polygon.RectangleByPoints(Vector.New(0,0), Vector.New(1,1)).GetFloat32Array()
    )), 1)
);
```

This example will render a [Sprite] using the previously loaded `bullet` texture.

## Customising Texture Options

Textures generated from a loaded image can be customised further with additional
options provided to the [ImageRequest] in the form of [ITextureOptions].

```typescript
this.messageBus.Publish(Message.New<ImageRequest>(
    ImageRequest.MESSAGE_REQUEST_LOAD,
    new ImageRequest(
        "bullet",
        "assets/bullet.png",
        {
            minFilter: TextureFiltering.NEAREST,
            magFilter: TextureFiltering.NEAREST
        }
    )
));
```

This example will render the `assets/bullet.png` to a texture using the
[TextureFiltering] option of `NEAREST`, see [Texture Options] for more details
on texture customisation choices.

[ImageRequest]:../../reference/classes/imagerequest
[HTTPImageSystem]:../../reference/classes/httpimagesystem
[WebGLSystem]:../../reference/classes/webglsystem
[Sprite]:../../reference/classes/sprite
[ITextureOptions]:../../reference/interfaces/itextureoptions
[TextureFiltering]:../../reference/classes/texturefiltering
[Texture Options]:../texture-options
