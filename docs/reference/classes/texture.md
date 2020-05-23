
# Class: Texture

Texture is the mapping from an image that has been loaded, deciding
how the texture should be drawn and represented.

## Hierarchy

* **Texture**

## Index

### Constructors

* [constructor](texture.md#constructor)

### Properties

* [image](texture.md#image)
* [points](texture.md#points)

### Methods

* [Copy](texture.md#copy)

## Constructors

###  constructor

\+ **new Texture**(`image`: string, `points`: [Polygon](polygon.md)): *[Texture](texture.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`image` | string | - |
`points` | [Polygon](polygon.md) | Polygon.QuadByPoints(new Vector(0,0), new Vector(1,1)) |

**Returns:** *[Texture](texture.md)*

## Properties

###  image

• **image**: *string*

Name of the image the texture refers to.

___

###  points

• **points**: *[Polygon](polygon.md)*

Mapping in points on the image.

## Methods

###  Copy

▸ **Copy**(): *[Texture](texture.md)*

Make a value copy of the texture.

**Returns:** *[Texture](texture.md)*
