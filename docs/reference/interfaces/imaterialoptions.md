
# Interface: IMaterialOptions

IMaterialOptions represents optional properties for a material, will
generally be used with defaults that are overridden.

## Hierarchy

* **IMaterialOptions**

## Index

### Properties

* [color](imaterialoptions.md#optional-color)
* [shaders](imaterialoptions.md#optional-shaders)
* [texture](imaterialoptions.md#optional-texture)

## Properties

### `Optional` color

• **color**? : *[Color](../classes/color.md)*

The color to apply, either to a texture if there is one, or just the
direct color if there is no texture.

___

### `Optional` shaders

• **shaders**? : *string[]*

List of shaders to apply.

___

### `Optional` texture

• **texture**? : *[Texture](../classes/texture.md)*

The texture to apply.
