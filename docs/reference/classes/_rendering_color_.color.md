
# Class: Color

Color represents an RGBA color.
Values from 0 to 1.

## Hierarchy

* **Color**

## Index

### Constructors

* [constructor](_rendering_color_.color.md#constructor)

### Properties

* [alpha](_rendering_color_.color.md#alpha)
* [blue](_rendering_color_.color.md#blue)
* [green](_rendering_color_.color.md#green)
* [red](_rendering_color_.color.md#red)

### Methods

* [GetTuple](_rendering_color_.color.md#gettuple)
* [Mix](_rendering_color_.color.md#mix)

## Constructors

###  constructor

\+ **new Color**(`red`: number, `green`: number, `blue`: number, `alpha`: number): *[Color](_rendering_color_.color.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`red` | number | - |
`green` | number | - |
`blue` | number | - |
`alpha` | number | 1 |

**Returns:** *[Color](_rendering_color_.color.md)*

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

▸ **Mix**(`color`: [Color](_rendering_color_.color.md)): *[Color](_rendering_color_.color.md)*

Mixes two colors together.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`color` | [Color](_rendering_color_.color.md) | The color to mix with this one |

**Returns:** *[Color](_rendering_color_.color.md)*

The mixed color
