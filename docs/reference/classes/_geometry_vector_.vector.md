
# Class: Vector

Vector is the 2 dimensional representation of a vector, with two values (x,y).

## Hierarchy

* **Vector**

## Index

### Constructors

* [constructor](_geometry_vector_.vector.md#constructor)

### Properties

* [x](_geometry_vector_.vector.md#x)
* [y](_geometry_vector_.vector.md#y)

### Methods

* [Add](_geometry_vector_.vector.md#add)
* [Apply3D](_geometry_vector_.vector.md#apply3d)
* [Apply4D](_geometry_vector_.vector.md#apply4d)
* [Copy](_geometry_vector_.vector.md#copy)
* [Dot](_geometry_vector_.vector.md#dot)
* [Invert](_geometry_vector_.vector.md#invert)
* [Multiply](_geometry_vector_.vector.md#multiply)
* [Rotate](_geometry_vector_.vector.md#rotate)
* [RotateDeg](_geometry_vector_.vector.md#rotatedeg)
* [Scale](_geometry_vector_.vector.md#scale)
* [Sub](_geometry_vector_.vector.md#sub)

## Constructors

###  constructor

\+ **new Vector**(`x`: number, `y`: number): *[Vector](_geometry_vector_.vector.md)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

## Properties

###  x

• **x**: *number*

___

###  y

• **y**: *number*

## Methods

###  Add

▸ **Add**(`vector`: [Vector](_geometry_vector_.vector.md)): *[Vector](_geometry_vector_.vector.md)*

Add adds two vectors together

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](_geometry_vector_.vector.md) | The vector to add to this one |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

The result of the addition

___

###  Apply3D

▸ **Apply3D**(`matrix`: [Matrix3D](_geometry_matrix_3d_.matrix3d.md)): *[Vector](_geometry_vector_.vector.md)*

Apply3D applies a 3x3 matrix to the vector and returns the result.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matrix` | [Matrix3D](_geometry_matrix_3d_.matrix3d.md) | Matrix to apply to the vector |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

Vector that has the matrix applied to it

___

###  Apply4D

▸ **Apply4D**(`matrix`: [Matrix4D](_geometry_matrix_4d_.matrix4d.md)): *[Vector](_geometry_vector_.vector.md)*

Apply4D applies a 4x4 matrix to the vector and returns the result.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`matrix` | [Matrix4D](_geometry_matrix_4d_.matrix4d.md) | Matrix to apply to the vector |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

Vector that has the matrix applied to it

___

###  Copy

▸ **Copy**(): *[Vector](_geometry_vector_.vector.md)*

Copy produces a copy of the vector and its values, rather than pointing to
the same vector.

**Returns:** *[Vector](_geometry_vector_.vector.md)*

The copy of the vector

___

###  Dot

▸ **Dot**(`vector`: [Vector](_geometry_vector_.vector.md)): *number*

Dot calculates the dot product of two vectors.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](_geometry_vector_.vector.md) | The vector to dot with this vector |

**Returns:** *number*

The result of the dot product

___

###  Invert

▸ **Invert**(): *[Vector](_geometry_vector_.vector.md)*

Invert flips the values of the vector, `x -> -x` and `y -> -y`.

**Returns:** *[Vector](_geometry_vector_.vector.md)*

The result of the inverting

___

###  Multiply

▸ **Multiply**(`vector`: [Vector](_geometry_vector_.vector.md)): *[Vector](_geometry_vector_.vector.md)*

Multiply multiplies two vectors together

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](_geometry_vector_.vector.md) | The matrix to multiply this one by |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

The result of the multiplication

___

###  Rotate

▸ **Rotate**(`center`: [Vector](_geometry_vector_.vector.md), `angle`: number): *[Vector](_geometry_vector_.vector.md)*

Rotate applies a rotation around a point to the vector in radians.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | [Vector](_geometry_vector_.vector.md) | The point to rotate around |
`angle` | number | The angle in radians to rotate by |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

The result of the rotation

___

###  RotateDeg

▸ **RotateDeg**(`center`: [Vector](_geometry_vector_.vector.md), `angle`: number): *[Vector](_geometry_vector_.vector.md)*

RotateDeg applies a rotation around a point to the vector in degrees.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`center` | [Vector](_geometry_vector_.vector.md) | The point to rotate around |
`angle` | number | The angle in degrees to rotate by |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

The result of the rotation

___

###  Scale

▸ **Scale**(`scalar`: number): *[Vector](_geometry_vector_.vector.md)*

Scale multiplies this vector by a scalar value (non-vector).

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`scalar` | number | The scalar value to multiply the vector by |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

The result of the scaling

___

###  Sub

▸ **Sub**(`vector`: [Vector](_geometry_vector_.vector.md)): *[Vector](_geometry_vector_.vector.md)*

Sub takes one vector from another

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`vector` | [Vector](_geometry_vector_.vector.md) | The vector to subtract from this one |

**Returns:** *[Vector](_geometry_vector_.vector.md)*

The result of the subtraction
