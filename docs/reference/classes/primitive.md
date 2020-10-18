
# Class: Primitive

Primitive allows for a more direct level of control over how an object is
rendered, allowing drawing points, lines and polygons; with specifications
over the draw mode. The shape is passed to the render system as is, without
modification.

## Hierarchy

* [Component](component.md)

  ↳ **Primitive**

## Implements

* [IFreeable](../interfaces/ifreeable.md)

## Index

### Constructors

* [constructor](primitive.md#constructor)

### Properties

* [drawMode](primitive.md#drawmode)
* [key](primitive.md#key)
* [material](primitive.md#material)
* [points](primitive.md#points)
* [zOrder](primitive.md#zorder)
* [KEY](primitive.md#static-key)
* [MESSAGE_ADD](primitive.md#static-message_add)
* [MESSAGE_REMOVE](primitive.md#static-message_remove)

### Methods

* [Free](primitive.md#free)

## Constructors

###  constructor

\+ **new Primitive**(`material`: [Material](material.md), `zOrder`: number, `points`: [Polygon](polygon.md), `drawMode`: [DrawMode](../enums/drawmode.md)): *[Primitive](primitive.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`material` | [Material](material.md) | - |
`zOrder` | number | - |
`points` | [Polygon](polygon.md) | Polygon.RectangleByDimensions(1, 1) |
`drawMode` | [DrawMode](../enums/drawmode.md) | DrawMode.LINE_STRIP |

**Returns:** *[Primitive](primitive.md)*

## Properties

###  drawMode

• **drawMode**: *[DrawMode](../enums/drawmode.md)*

Draw mode of the primitive, allows direct control over how the primitive
is rendered.

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

###  material

• **material**: *[Material](material.md)*

Material to apply when rendering the primitive.

___

###  points

• **points**: *[Polygon](polygon.md)*

List of points to pass to the render system, the shape that will be
rendered.

___

###  zOrder

• **zOrder**: *number*

Order which the primitive should appear, if it should appear
infront/behind other objects, the higher the value the more precedence it
is given and will appear in front of objects with a lower value.

___

### `Static` KEY

▪ **KEY**: *"primitive"* = "primitive"

Key of the primitive component.

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*

## Methods

###  Free

▸ **Free**(): *void*

*Implementation of [IFreeable](../interfaces/ifreeable.md)*

*Overrides [Component](component.md).[Free](component.md#free)*

**Returns:** *void*
