# Class: SpriteAnimator

SpriteAnimator is a component for storing sprite animation information. The
SpriteAnimator can contain multiple SpriteAnimations, which can be selected
and set as the current animation.
SpriteAnimator can be used to add sprite animation, and allows defining
different animations.
SpriteAnimator should be used with a Sprite component in conjunction.

## Hierarchy

* [*Component*](component.md)

  ↳ **SpriteAnimator**

## Table of contents

### Constructors

- [constructor](spriteanimator.md#constructor)

### Properties

- [animations](spriteanimator.md#animations)
- [current](spriteanimator.md#current)
- [key](spriteanimator.md#key)
- [KEY](spriteanimator.md#key)
- [MESSAGE\_ADD](spriteanimator.md#message_add)
- [MESSAGE\_REMOVE](spriteanimator.md#message_remove)

### Methods

- [Free](spriteanimator.md#free)

## Constructors

### constructor

\+ **new SpriteAnimator**(`animations`: *Map*<string, [*SpriteAnimation*](spriteanimation.md)\>, `current?`: *undefined* \| *string*): [*SpriteAnimator*](spriteanimator.md)

#### Parameters:

Name | Type |
:------ | :------ |
`animations` | *Map*<string, [*SpriteAnimation*](spriteanimation.md)\> |
`current` | *undefined* \| *string* |

**Returns:** [*SpriteAnimator*](spriteanimator.md)

Inherited from: [Component](component.md)

## Properties

### animations

• **animations**: *Map*<string, [*SpriteAnimation*](spriteanimation.md)\>

A map of SpriteAnimations, which are available to the SpriteAnimator as
different animations to switch between.

___

### current

• **current**: *undefined* \| *string*

The key of the current SpriteAnimation in the animations map, if this is
undefined there is no active animation.

___

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### KEY

▪ `Readonly` `Static` **KEY**: *sprite_animator*= "sprite\_animator"

Key of the sprite animator component.

___

### MESSAGE\_ADD

▪ `Readonly` `Static` **MESSAGE\_ADD**: *component_add*= "component\_add"

Inherited from: [Component](component.md).[MESSAGE_ADD](component.md#message_add)

___

### MESSAGE\_REMOVE

▪ `Readonly` `Static` **MESSAGE\_REMOVE**: *component_remove*= "component\_remove"

Inherited from: [Component](component.md).[MESSAGE_REMOVE](component.md#message_remove)

## Methods

### Free

▸ **Free**(): *void*

**Returns:** *void*

Inherited from: [Component](component.md)
