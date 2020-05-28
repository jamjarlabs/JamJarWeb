
# Class: SpriteAnimator

SpriteAnimator is a component for storing sprite animation information. The
SpriteAnimator can contain multiple SpriteAnimations, which can be selected
and set as the current animation.
SpriteAnimator can be used to add sprite animation, and allows defining
different animations.
SpriteAnimator should be used with a Sprite component in conjunction.

## Hierarchy

* [Component](component.md)

  ↳ **SpriteAnimator**

## Index

### Constructors

* [constructor](spriteanimator.md#constructor)

### Properties

* [animations](spriteanimator.md#animations)
* [current](spriteanimator.md#current)
* [key](spriteanimator.md#key)
* [KEY](spriteanimator.md#static-key)
* [MESSAGE_ADD](spriteanimator.md#static-message_add)
* [MESSAGE_REMOVE](spriteanimator.md#static-message_remove)

## Constructors

###  constructor

\+ **new SpriteAnimator**(`animations`: Map‹string, [SpriteAnimation](spriteanimation.md)›, `current`: string | undefined): *[SpriteAnimator](spriteanimator.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`animations` | Map‹string, [SpriteAnimation](spriteanimation.md)› | - |
`current` | string &#124; undefined | undefined |

**Returns:** *[SpriteAnimator](spriteanimator.md)*

## Properties

###  animations

• **animations**: *Map‹string, [SpriteAnimation](spriteanimation.md)›*

A map of SpriteAnimations, which are available to the SpriteAnimator as
different animations to switch between.

___

###  current

• **current**: *string | undefined*

The key of the current SpriteAnimation in the animations map, if this is
undefined there is no active animation.

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

### `Static` KEY

▪ **KEY**: *"sprite_animator"* = "sprite_animator"

Key of the sprite animator component.

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*
