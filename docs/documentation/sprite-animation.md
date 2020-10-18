# Sprite Animation

Sprite Animation allows adjusting a Sprite's [Material] with key frame based
animation.

## Setting up Sprite Animator System

To set up a [SpriteAnimatorSystem], you simply need to provide a message bus.

```typescript
new SpriteAnimatorSystem(messageBus);
```

## Creating an Entity with Sprite Animation

To set up an [Entity] with Sprite Animation, there are three components
required, a [Transform], a [Sprite], and a [SpriteAnimator].

The following sample creates an entity with Sprite Animation, using a 2x2 sprite
sheet. The sprite sheet is accessed uing [Texture.GenerateSpritesheetIndex]
which indexes a 2x2 sprite sheet. The [Sprite] is set up initially using the
first sprite in the sprite sheet. The [SpriteAnimator] is set up one animation
with four key frames, one for each sprite in the sprite sheet - each key frame
lasts 10 frames, and the frame rate of the animation is 10 frames per second.
The animation is set to loop infinitely.

```typescript
const spriteSheetIndices = Texture.GenerateSpritesheetIndex(2, 2);

const animationEntity = new Entity(messageBus);
animationEntity.Add(new Transform(Vector.New(0, 0), Vector.New(5,5)));
animationEntity.Add(new Sprite(
    new Material({
        texture: new Texture("example_spritesheet", spriteSheetIndices[0]),
    }),
    0,
    Polygon.RectangleByDimensions(1,1)
));
animationEntity.Add(new SpriteAnimator(
    new Map<string, SpriteAnimation>([
        ["example", new SpriteAnimation(
            [
                new SpriteKeyFrame(
                    new Material({
                        texture: new Texture("example_spritesheet", spriteSheetIndices[0]),
                    }),
                    10
                ),
                new SpriteKeyFrame(
                    new Material({
                        texture: new Texture("example_spritesheet", spriteSheetIndices[1]),
                    }),
                    10
                ),
                new SpriteKeyFrame(
                    new Material({
                        texture: new Texture("example_spritesheet", spriteSheetIndices[2]),
                    }),
                    10
                ),
                new SpriteKeyFrame(
                    new Material({
                        texture: new Texture("example_spritesheet", spriteSheetIndices[3]),
                    }),
                    10
                ),
            ],
            10,
            -1
        )],
    ]),
    "example"
));
```

[Material]:../../reference/classes/material
[SpriteAnimatorSystem]:../../reference/classes/spriteanimatorsystem
[Entity]:../../reference/classes/entity
[Transform]:../../reference/classes/transform
[Sprite]:../../reference/classes/sprite
[SpriteAnimator]:../../reference/classes/spriteanimator
[Texture.GenerateSpritesheetIndex]:../../reference/classes/texture#static-generatespritesheetindex
