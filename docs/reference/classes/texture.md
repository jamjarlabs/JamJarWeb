
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
* [points](texture.md#optional-points)

## Constructors

###  constructor

\+ **new Texture**(`image`: string, `points?`: Float32Array): *[Texture](texture.md)*

**Parameters:**

Name | Type |
------ | ------ |
`image` | string |
`points?` | Float32Array |

**Returns:** *[Texture](texture.md)*

## Properties

###  image

• **image**: *string*

Name of the image the texture refers to.

___

### `Optional` points

• **points**? : *Float32Array*

Mapping in points on the image, represented as Float32Array for performance.
