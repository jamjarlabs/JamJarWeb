# Class: AudioAsset

AudioAsset represents an in-memory audio asset that has been loaded/attempted
to be loaded.
Stores meta info around the audio, such as a name, the success
of the audio being loaded, and any errors from loading it.
Also stores the audio data itself.

## Table of contents

### Constructors

- [constructor](audioasset.md#constructor)

### Properties

- [buffer](audioasset.md#buffer)
- [error](audioasset.md#error)
- [name](audioasset.md#name)
- [MESSAGE\_FINISH\_LOAD](audioasset.md#message_finish_load)

## Constructors

### constructor

\+ **new AudioAsset**(`name`: *string*, `buffer`: AudioBuffer, `error?`: Error): [*AudioAsset*](audioasset.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`buffer` | AudioBuffer |
`error?` | Error |

**Returns:** [*AudioAsset*](audioasset.md)

## Properties

### buffer

• **buffer**: AudioBuffer

The data of the audio.

___

### error

• `Optional` **error**: *undefined* \| Error

An optional field, contains any error from loading the audio, if there is
none it will be undefined.

___

### name

• **name**: *string*

Name of the audio asset, how it is referred to throughout the system,
should be unique.

___

### MESSAGE\_FINISH\_LOAD

▪ `Readonly` `Static` **MESSAGE\_FINISH\_LOAD**: *finish_audio_load*= "finish\_audio\_load"

Message when an audio asset is finished loading.
