# Class: AudioRequest

AudioRequest specifies all information required to load a audio data. This
includes the source of the audio data (e.g. a URL), and the name to assign
the audio data, which should be unique.

## Table of contents

### Constructors

- [constructor](audiorequest.md#constructor)

### Properties

- [name](audiorequest.md#name)
- [source](audiorequest.md#source)
- [MESSAGE\_REQUEST\_LOAD](audiorequest.md#message_request_load)

## Constructors

### constructor

\+ **new AudioRequest**(`name`: *string*, `source`: *string*): [*AudioRequest*](audiorequest.md)

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`source` | *string* |

**Returns:** [*AudioRequest*](audiorequest.md)

## Properties

### name

• **name**: *string*

Name of the audio asset, how it is referred to throughout the system,
should be unique.

___

### source

• **source**: *string*

Source of the audio, where the audio exists (URL, filepath etc.).

___

### MESSAGE\_REQUEST\_LOAD

▪ `Readonly` `Static` **MESSAGE\_REQUEST\_LOAD**: *request_audio_load*= "request\_audio\_load"

Message to request an audio asset to be loaded.
