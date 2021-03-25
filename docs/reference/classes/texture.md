# Class: Texture

Texture is the mapping from an image that has been loaded, deciding
how the texture should be drawn and represented.

## Implements

* [*IFreeable*](../interfaces/ifreeable.md)

## Table of contents

### Constructors

- [constructor](texture.md#constructor)

### Properties

- [image](texture.md#image)
- [points](texture.md#points)

### Methods

- [Copy](texture.md#copy)
- [Free](texture.md#free)
- [GenerateSpritesheetIndex](texture.md#generatespritesheetindex)

## Constructors

### constructor

\+ **new Texture**(`image`: *string*, `points?`: [*Polygon*](polygon.md)): [*Texture*](texture.md)

#### Parameters:

Name | Type |
:------ | :------ |
`image` | *string* |
`points` | [*Polygon*](polygon.md) |

**Returns:** [*Texture*](texture.md)

## Properties

### image

• **image**: *string*

Name of the image the texture refers to.

___

### points

• **points**: [*Polygon*](polygon.md)

Mapping in points on the image.

## Methods

### Copy

▸ **Copy**(): [*Texture*](texture.md)

Make a value copy of the texture.

**Returns:** [*Texture*](texture.md)

___

### Free

▸ **Free**(): *void*

Free releases an object or it's constituent parts back into any available object pools.

**Returns:** *void*

Implementation of: [IFreeable](../interfaces/ifreeable.md)

___

### GenerateSpritesheetIndex

▸ `Static`**GenerateSpritesheetIndex**(`rowCount`: *number*, `columnCount`: *number*): [*Polygon*](polygon.md)[]

GenerateSpritesheetIndex generates an indexed array of shapes to access
each sprite in a sprite sheet. The sprite sheet must have all sprites the
same width, and height - empty sprite positions work.
The indexed sprite sheet operates from left to right, bottom to top.
For example, the following shows the indexes of each position in the
sprite sheet:

|---------|
| 0  1  2 |
| 3  4  5 |
| 6  7  8 |
|---------|

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`rowCount` | *number* | number of rows in the sprite sheet (vertically).   |
`columnCount` | *number* | number of columns in the sprite sheet (horizontally).   |

**Returns:** [*Polygon*](polygon.md)[]

- An indexed array of shapes to access each sprite.
