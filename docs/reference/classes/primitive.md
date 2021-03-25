# Class: Primitive

Primitive allows for a more direct level of control over how an object is
rendered, allowing drawing points, lines and polygons; with specifications
over the draw mode. The shape is passed to the render system as is, without
modification.

## Hierarchy

* [*Component*](component.md)

  ↳ **Primitive**

## Table of contents

### Constructors

- [constructor](primitive.md#constructor)

### Properties

- [drawMode](primitive.md#drawmode)
- [key](primitive.md#key)
- [material](primitive.md#material)
- [points](primitive.md#points)
- [zOrder](primitive.md#zorder)
- [KEY](primitive.md#key)
- [MESSAGE\_ADD](primitive.md#message_add)
- [MESSAGE\_REMOVE](primitive.md#message_remove)

### Methods

- [Free](primitive.md#free)

## Constructors

### constructor

\+ **new Primitive**(`material`: [*Material*](material.md), `zOrder`: *number*, `points?`: [*Polygon*](polygon.md), `drawMode?`: [*DrawMode*](../enums/drawmode.md)): [*Primitive*](primitive.md)

#### Parameters:

Name | Type |
:------ | :------ |
`material` | [*Material*](material.md) |
`zOrder` | *number* |
`points` | [*Polygon*](polygon.md) |
`drawMode` | [*DrawMode*](../enums/drawmode.md) |

**Returns:** [*Primitive*](primitive.md)

Inherited from: [Component](component.md)

## Properties

### drawMode

• **drawMode**: [*DrawMode*](../enums/drawmode.md)

Draw mode of the primitive, allows direct control over how the primitive
is rendered.

___

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### material

• **material**: [*Material*](material.md)

Material to apply when rendering the primitive.

___

### points

• **points**: [*Polygon*](polygon.md)

List of points to pass to the render system, the shape that will be
rendered.

___

### zOrder

• **zOrder**: *number*

Order which the primitive should appear, if it should appear
infront/behind other objects, the higher the value the more precedence it
is given and will appear in front of objects with a lower value.

___

### KEY

▪ `Readonly` `Static` **KEY**: *primitive*= "primitive"

Key of the primitive component.

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
