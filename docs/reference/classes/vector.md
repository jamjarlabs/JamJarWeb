
# Class: Vector

Vector is the 2 dimensional representation of a vector, with two values (x,y).

## Hierarchy

* **Vector**

## Index

### Constructors

* [constructor](vector.md#constructor)

### Properties

* [x](vector.md#x)
* [y](vector.md#y)

### Methods

* [Add](vector.md#add)
* [Apply3D](vector.md#apply3d)
* [Apply4D](vector.md#apply4d)
* [Copy](vector.md#copy)
* [Dot](vector.md#dot)
* [Invert](vector.md#invert)
* [Magnitude](vector.md#magnitude)
* [Multiply](vector.md#multiply)
* [Normalize](vector.md#normalize)
* [Rotate](vector.md#rotate)
* [RotateDeg](vector.md#rotatedeg)
* [Scale](vector.md#scale)
* [Sub](vector.md#sub)

## Constructors

###  constructor

\+ **new Vector**(`x`: number, `y`: number): *[Vector](vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[Vector](vector.md)*

## Properties

###  x

• **x**: *number*

___

###  y

• **y**: *number*

## Methods

###  Add

▸ **Add**(`vector`: [Vector](vector.md)): *[Vector](vector.md)*

Add adds two vectors together

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](vector.md) | The vector to add to this one |

**Returns:** *[Vector](vector.md)*

The result of the addition

___

###  Apply3D

▸ **Apply3D**(`matrix`: [Matrix3D](matrix3d.md)): *[Vector](vector.md)*

Apply3D applies a 3x3 matrix to the vector and returns the result.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matrix` | [Matrix3D](matrix3d.md) | Matrix to apply to the vector |

**Returns:** *[Vector](vector.md)*

Vector that has the matrix applied to it

___

###  Apply4D

▸ **Apply4D**(`matrix`: [Matrix4D](matrix4d.md)): *[Vector](vector.md)*

Apply4D applies a 4x4 matrix to the vector and returns the result.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matrix` | [Matrix4D](matrix4d.md) | Matrix to apply to the vector |

**Returns:** *[Vector](vector.md)*

Vector that has the matrix applied to it

___

###  Copy

▸ **Copy**(): *[Vector](vector.md)*

Copy produces a copy of the vector and its values, rather than pointing to
the same vector.

**Returns:** *[Vector](vector.md)*

The copy of the vector

___

###  Dot

▸ **Dot**(`vector`: [Vector](vector.md)): *number*

Dot calculates the dot product of two vectors.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](vector.md) | The vector to dot with this vector |

**Returns:** *number*

The result of the dot product

___

###  Invert

▸ **Invert**(): *[Vector](vector.md)*

Invert flips the values of the vector, `x -> -x` and `y -> -y`.

**Returns:** *[Vector](vector.md)*

The result of the inverting

___

###  Magnitude

▸ **Magnitude**(): *number*

Calculates magnitude of this vector.

**Returns:** *number*

The magnitude

___

###  Multiply

▸ **Multiply**(`vector`: [Vector](vector.md)): *[Vector](vector.md)*

Multiply multiplies two vectors together

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](vector.md) | The matrix to multiply this one by |

**Returns:** *[Vector](vector.md)*

The result of the multiplication

___

###  Normalize

▸ **Normalize**(): *[Vector](vector.md)*

Returns a normalized version of the vector.

**Returns:** *[Vector](vector.md)*

The normalized vector

___

###  Rotate

▸ **Rotate**(`center`: [Vector](vector.md), `angle`: number): *[Vector](vector.md)*

Rotate applies a rotation around a point to the vector in radians.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | [Vector](vector.md) | The point to rotate around |
`angle` | number | The angle in radians to rotate by |

**Returns:** *[Vector](vector.md)*

The result of the rotation

___

###  RotateDeg

▸ **RotateDeg**(`center`: [Vector](vector.md), `angle`: number): *[Vector](vector.md)*

RotateDeg applies a rotation around a point to the vector in degrees.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | [Vector](vector.md) | The point to rotate around |
`angle` | number | The angle in degrees to rotate by |

**Returns:** *[Vector](vector.md)*

The result of the rotation

___

###  Scale

▸ **Scale**(`scalar`: number): *[Vector](vector.md)*

Scale multiplies this vector by a scalar value (non-vector).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scalar` | number | The scalar value to multiply the vector by |

**Returns:** *[Vector](vector.md)*

The result of the scaling

___

###  Sub

▸ **Sub**(`vector`: [Vector](vector.md)): *[Vector](vector.md)*

Sub takes one vector from another

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](vector.md) | The vector to subtract from this one |

**Returns:** *[Vector](vector.md)*

The result of the subtraction
