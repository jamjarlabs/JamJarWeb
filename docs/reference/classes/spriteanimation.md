
# Class: SpriteAnimation

SpriteAnimation is used to define an animation as a series of materials to
apply to a Sprite, with specifications on key frames, frame rate, and if the
animation should repeat.

SpriteAnimation uses an array of key frames to iterate through for
defining the materials to apply and for how long to apply them.

## Hierarchy

* **SpriteAnimation**

## Index

### Constructors

* [constructor](spriteanimation.md#constructor)

### Properties

* [durationSinceRepeat](spriteanimation.md#durationsincerepeat)
* [frameRate](spriteanimation.md#framerate)
* [keyframes](spriteanimation.md#keyframes)
* [repeat](spriteanimation.md#repeat)
* [repeatCount](spriteanimation.md#repeatcount)

## Constructors

###  constructor

\+ **new SpriteAnimation**(`keyframes`: [SpriteKeyFrame](spritekeyframe.md)[], `frameRate`: number, `repeat`: number, `durationSinceRepeat`: number, `repeatCount`: number): *[SpriteAnimation](spriteanimation.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`keyframes` | [SpriteKeyFrame](spritekeyframe.md)[] | - |
`frameRate` | number | - |
`repeat` | number | - |
`durationSinceRepeat` | number | 0 |
`repeatCount` | number | 0 |

**Returns:** *[SpriteAnimation](spriteanimation.md)*

## Properties

###  durationSinceRepeat

• **durationSinceRepeat**: *number*

State tracker, keeping track of the time since the animation has repeated.

___

###  frameRate

• **frameRate**: *number*

The frame rate of the animation in frames per second

___

###  keyframes

• **keyframes**: *[SpriteKeyFrame](spritekeyframe.md)[]*

Key frames to apply, each one specifies a material and duration of
keyframe in frames.

___

###  repeat

• **repeat**: *number*

If the animation should repeat, a value of 0 means 0 repetitions and it
will not repeat, a value of 5 means 5 repeats. A value of -1 means
infinite repetitions.

___

###  repeatCount

• **repeatCount**: *number*

State tracker, keeping track of the number of times the animation has repeated.
