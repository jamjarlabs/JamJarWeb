# Class: FontAsset

FontAsset represents a loaded and rendered font asset.

## Table of contents

### Constructors

- [constructor](fontasset.md#constructor)

### Properties

- [name](fontasset.md#name)
- [request](fontasset.md#request)
- [MESSAGE\_FINISH\_LOAD](fontasset.md#message_finish_load)

## Constructors

### constructor

\+ **new FontAsset**(`name`: *string*, `request`: [*FontRequest*](fontrequest.md)): [*FontAsset*](fontasset.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`request` | [*FontRequest*](fontrequest.md) |

**Returns:** [*FontAsset*](fontasset.md)

## Properties

### name

• **name**: *string*

Name of the asset

___

### request

• **request**: [*FontRequest*](fontrequest.md)

Request that created the asset

___

### MESSAGE\_FINISH\_LOAD

▪ `Readonly` `Static` **MESSAGE\_FINISH\_LOAD**: *finish_font_load*= "finish\_font\_load"

Message when a font asset is finished loading.
