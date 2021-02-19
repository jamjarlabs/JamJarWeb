# Class: AudioSource

AudioSource is a component for storing information around audio and how it
should be played.

## Hierarchy

* [*Component*](component.md)

  ↳ **AudioSource**

## Table of contents

### Constructors

- [constructor](audiosource.md#constructor)

### Properties

- [audio](audiosource.md#audio)
- [audioProcessor](audiosource.md#audioprocessor)
- [key](audiosource.md#key)
- [loop](audiosource.md#loop)
- [playCount](audiosource.md#playcount)
- [playbackRate](audiosource.md#playbackrate)
- [playing](audiosource.md#playing)
- [volume](audiosource.md#volume)
- [KEY](audiosource.md#key)
- [MESSAGE\_ADD](audiosource.md#message_add)
- [MESSAGE\_REMOVE](audiosource.md#message_remove)

### Methods

- [Free](audiosource.md#free)
- [Play](audiosource.md#play)
- [Stop](audiosource.md#stop)

## Constructors

### constructor

\+ **new AudioSource**(`audio`: *string*, `options?`: [*IAudioOptions*](../interfaces/iaudiooptions.md), `playCount?`: *number*): [*AudioSource*](audiosource.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`audio` | *string* | - |
`options` | [*IAudioOptions*](../interfaces/iaudiooptions.md) | - |
`playCount` | *number* | 0 |

**Returns:** [*AudioSource*](audiosource.md)

Inherited from: [Component](component.md)

## Properties

### audio

• **audio**: *string*

The name of the audio asset to play.

___

### audioProcessor

• `Optional` **audioProcessor**: *undefined* \| (`base`: AudioBufferSourceNode, `context`: AudioContext) => AudioNode

Audio processing function, during audio playback this function will be
called and allows injection of filters/customisation. This uses the Web
Audio API. The node returned should be the last node in the node chain.
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

___

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### loop

• **loop**: *number*

If the audio should loop, equal to the number of loops it should
complete, or -1 for an infinite amount of loops. E.g. a value of 3 would
result in 1 initial play and 3 looped plays.

___

### playCount

• **playCount**: *number*

Internal variable used to track how many times the audio source has been
played, used to determine if it should continue looping.

___

### playbackRate

• **playbackRate**: *number*

The playback rate for the audio as a decimal proportion of the original
sampling rate. A value of 1.0 is the audio at normal speed, 0.5 is half
speed, 2.0 is double speed.

___

### playing

• **playing**: *boolean*

If the audio is playing or not, true = playing, false = not playing.

___

### volume

• **volume**: *number*

The volume of the audio, between 0 and 1

___

### KEY

▪ `Readonly` `Static` **KEY**: *audio_source*= "audio\_source"

Key of the audio source component.

___

### MESSAGE\_ADD

▪ `Readonly` `Static` **MESSAGE\_ADD**: *component_add*= "component\_add"

Inherited from: [Component](component.md).[MESSAGE_ADD](component.md#message_add)

___

### MESSAGE\_REMOVE

▪ `Readonly` `Static` **MESSAGE\_REMOVE**: *component_remove*= "component\_remove"

Inherited from: [Component](component.md).[MESSAGE_REMOVE](component.md#message_remove)

## Methods

### Free

▸ **Free**(): *void*

**Returns:** *void*

Inherited from: [Component](component.md)

___

### Play

▸ **Play**(): *void*

Plays the audio, resets the play counter; will loop again for the number
of times specified.

**Returns:** *void*

___

### Stop

▸ **Stop**(): *void*

Stops the audio, when it is replayed it will play from the start.

**Returns:** *void*
