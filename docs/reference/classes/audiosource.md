
# Class: AudioSource

AudioSource is a component for storing information around audio and how it
should be played.

## Hierarchy

* [Component](component.md)

  ↳ **AudioSource**

## Index

### Constructors

* [constructor](audiosource.md#constructor)

### Properties

* [audio](audiosource.md#audio)
* [audioProcessor](audiosource.md#optional-audioprocessor)
* [key](audiosource.md#key)
* [loop](audiosource.md#loop)
* [playCount](audiosource.md#playcount)
* [playbackRate](audiosource.md#playbackrate)
* [playing](audiosource.md#playing)
* [volume](audiosource.md#volume)
* [KEY](audiosource.md#static-key)
* [MESSAGE_ADD](audiosource.md#static-message_add)
* [MESSAGE_REMOVE](audiosource.md#static-message_remove)

### Methods

* [Play](audiosource.md#play)
* [Stop](audiosource.md#stop)

## Constructors

###  constructor

\+ **new AudioSource**(`audio`: string, `options`: [IAudioOptions](../interfaces/iaudiooptions.md), `playCount`: number): *[AudioSource](audiosource.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`audio` | string | - |
`options` | [IAudioOptions](../interfaces/iaudiooptions.md) | {} |
`playCount` | number | 0 |

**Returns:** *[AudioSource](audiosource.md)*

## Properties

###  audio

• **audio**: *string*

The name of the audio asset to play.

___

### `Optional` audioProcessor

• **audioProcessor**? : *undefined | function*

Audio processing function, during audio playback this function will be
called and allows injection of filters/customisation. This uses the Web
Audio API. The node returned should be the last node in the node chain.
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

___

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

###  loop

• **loop**: *number*

If the audio should loop, equal to the number of loops it should
complete, or -1 for an infinite amount of loops. E.g. a value of 3 would
result in 1 initial play and 3 looped plays.

___

###  playCount

• **playCount**: *number*

Internal variable used to track how many times the audio source has been
played, used to determine if it should continue looping.

___

###  playbackRate

• **playbackRate**: *number*

The playback rate for the audio as a decimal proportion of the original
sampling rate. A value of 1.0 is the audio at normal speed, 0.5 is half
speed, 2.0 is double speed.

___

###  playing

• **playing**: *boolean*

If the audio is playing or not, true = playing, false = not playing.

___

###  volume

• **volume**: *number*

The volume of the audio, between 0 and 1

___

### `Static` KEY

▪ **KEY**: *"audio_source"* = "audio_source"

Key of the audio source component.

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*

## Methods

###  Play

▸ **Play**(): *void*

Plays the audio, resets the play counter; will loop again for the number
of times specified.

**Returns:** *void*

___

###  Stop

▸ **Stop**(): *void*

Stops the audio, when it is replayed it will play from the start.

**Returns:** *void*
