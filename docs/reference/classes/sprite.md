# Class: Sprite

Sprite is a component for storing information around a sprite
and how it should be drawn. Contains information around the
colour to use if no texture is provided and the z order for
deciding which order to draw the sprite in.
Can contain texture information such as bounds and a texture.

## Hierarchy

* [*Component*](component.md)

  ↳ **Sprite**

## Table of contents

### Constructors

- [constructor](sprite.md#constructor)

### Properties

- [key](sprite.md#key)
- [material](sprite.md#material)
- [transformedShape](sprite.md#transformedshape)
- [zOrder](sprite.md#zorder)
- [KEY](sprite.md#key)
- [MESSAGE\_ADD](sprite.md#message_add)
- [MESSAGE\_REMOVE](sprite.md#message_remove)

### Methods

- [Free](sprite.md#free)

## Constructors

### constructor

\+ **new Sprite**(`material`: [*Material*](material.md), `zOrder?`: *number*): [*Sprite*](sprite.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`material` | [*Material*](material.md) | - |
`zOrder` | *number* | 0 |

**Returns:** [*Sprite*](sprite.md)

Inherited from: [Component](component.md)

## Properties

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### material

• **material**: [*Material*](material.md)

Material to apply when rendering the Sprite.

___

### transformedShape

• **transformedShape**: [*AABB*](aabb.md)

___

### zOrder

• **zOrder**: *number*

Order which the sprite should appear, if it should appear infront/behind other
objects, the higher the value the more precedence it is given and will
appear in front of objects with a lower value.

___

### KEY

▪ `Readonly` `Static` **KEY**: *sprite*= "sprite"

Key of the sprite component.

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

Overrides: [Component](component.md)
