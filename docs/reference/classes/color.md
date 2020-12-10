
# Class: Color

Color represents an RGBA color.
Values from 0 to 1.

## Hierarchy

* **Color**

## Index

### Constructors

* [constructor](color.md#constructor)

### Properties

* [data](color.md#data)

### Accessors

* [alpha](color.md#alpha)
* [blue](color.md#blue)
* [green](color.md#green)
* [red](color.md#red)

### Methods

* [Copy](color.md#copy)
* [GetFloat32Array](color.md#getfloat32array)
* [Mix](color.md#mix)

## Constructors

###  constructor

\+ **new Color**(`red`: number, `green`: number, `blue`: number, `alpha`: number): *[Color](color.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`red` | number | - |
`green` | number | - |
`blue` | number | - |
`alpha` | number | 1 |

**Returns:** *[Color](color.md)*

## Properties

###  data

• **data**: *Float32Array*

## Accessors

###  alpha

• **get alpha**(): *number*

**Returns:** *number*

• **set alpha**(`value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  blue

• **get blue**(): *number*

**Returns:** *number*

• **set blue**(`value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  green

• **get green**(): *number*

**Returns:** *number*

• **set green**(`value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

___

###  red

• **get red**(): *number*

**Returns:** *number*

• **set red**(`value`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *void*

## Methods

###  Copy

▸ **Copy**(): *[Color](color.md)*

Make a value copy of the color.

**Returns:** *[Color](color.md)*

___

###  GetFloat32Array

▸ **GetFloat32Array**(): *Float32Array*

**Returns:** *Float32Array*

___

###  Mix

▸ **Mix**(`color`: [Color](color.md)): *[Color](color.md)*

Mixes two colors together.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | [Color](color.md) | The color to mix with this one |

**Returns:** *[Color](color.md)*

The mixed color
