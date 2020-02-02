
# Class: Color

Color represents an RGBA color.
Values from 0 to 1.

## Hierarchy

* **Color**

## Index

### Constructors

* [constructor](color.md#constructor)

### Properties

* [alpha](color.md#alpha)
* [blue](color.md#blue)
* [green](color.md#green)
* [red](color.md#red)

### Methods

* [GetTuple](color.md#gettuple)
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

###  alpha

• **alpha**: *number*

___

###  blue

• **blue**: *number*

___

###  green

• **green**: *number*

___

###  red

• **red**: *number*

## Methods

###  GetTuple

▸ **GetTuple**(): *[number, number, number, number]*

Returns the color in the form of a tuple `[red, green, blue, alpha]`.

**Returns:** *[number, number, number, number]*

The tuple representation of the color

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
