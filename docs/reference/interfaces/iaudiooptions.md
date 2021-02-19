# Interface: IAudioOptions

IAudioOptions represents optional properties for audio playback, will
generally be used with defaults that are overridden.

## Table of contents

### Properties

- [audioProcessor](iaudiooptions.md#audioprocessor)
- [loop](iaudiooptions.md#loop)
- [playbackRate](iaudiooptions.md#playbackrate)
- [playing](iaudiooptions.md#playing)
- [volume](iaudiooptions.md#volume)

## Properties

### audioProcessor

• `Optional` **audioProcessor**: *undefined* \| (`base`: AudioBufferSourceNode, `context`: AudioContext) => AudioNode

Audio processing function, during audio playback this function will be
called and allows injection of filters/customisation. This uses the Web
Audio API. The node returned should be the last node in the node chain.
https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API

___

### loop

• `Optional` **loop**: *undefined* \| *number*

If the audio should loop, equal to the number of loops it should
complete, or -1 for an infinite amount of loops. E.g. a value of 3 would
result in 1 initial play and 3 looped plays.

___

### playbackRate

• `Optional` **playbackRate**: *undefined* \| *number*

The playback rate for the audio as a decimal proportion of the original
sampling rate. A value of 1.0 is the audio at normal speed, 0.5 is half
speed, 2.0 is double speed.

___

### playing

• `Optional` **playing**: *undefined* \| *boolean*

If the audio is playing or not, true = playing, false = not playing.

___

### volume

• `Optional` **volume**: *undefined* \| *number*

The volume of the audio, between 0 and 1
