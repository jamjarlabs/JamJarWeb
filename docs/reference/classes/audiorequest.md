
# Class: AudioRequest

AudioRequest specifies all information required to load a audio data. This
includes the source of the audio data (e.g. a URL), and the name to assign
the audio data, which should be unique.

## Hierarchy

* **AudioRequest**

## Index

### Constructors

* [constructor](audiorequest.md#constructor)

### Properties

* [name](audiorequest.md#name)
* [source](audiorequest.md#source)
* [MESSAGE_REQUEST_LOAD](audiorequest.md#static-message_request_load)

## Constructors

###  constructor

\+ **new AudioRequest**(`name`: string, `source`: string): *[AudioRequest](audiorequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`source` | string |

**Returns:** *[AudioRequest](audiorequest.md)*

## Properties

###  name

• **name**: *string*

Name of the audio asset, how it is referred to throughout the system,
should be unique.

___

###  source

• **source**: *string*

Source of the audio, where the audio exists (URL, filepath etc.).

___

### `Static` MESSAGE_REQUEST_LOAD

▪ **MESSAGE_REQUEST_LOAD**: *"request_audio_load"* = "request_audio_load"

Message to request an audio asset to be loaded.
