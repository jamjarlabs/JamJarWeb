# Audio Sources

JamJar supports  playing audio, the [AudioSourceSystem]. [AudioSource]
components allow configuration of how the audio will be played, allowing control
over volume, playback rate, and application of custom filters.

## Setting up Audio Source System

An [AudioSourceSystem] can be set up by supplying a message bus and declaring
the system.

```typescript
new AudioSourceSystem(messageBus);
```

## Creating an entity with an Audio Source

```typescript
const audioSource = new Entity(messageBus);
audioSource.Add(new AudioSource("example", {
    playing: true,
    loop: -1,
    volume: 0.5,
    playbackRate: 1,
}));
```

This creates a new entity with an [AudioSource], which is set to be playing with
an infinite loop (loop value `-1`), and playing at normal playback rate (`1`)
and half volume `0.5`. The audio played is called `example`, which must be
loaded in advance with an Audio loading system, for example the
[HTTPAudioSystem]. 

## Loop

The loop option of the [AudioSource] defines how many times after the initial
play the audio should repeat, e.g. a value of `3` will result in `1` initial play
and `3` looped plays - a total of `4` plays. A value of `-1` indicates it should
play infinitely and loop non-stop.

## Applying Audio Filters

Audio filters can be applied to an [AudioSource] by defining a function and
supplying it as the `audioProcessor` option. This is a function that allows
appending Audio nodes by using the [Web Audio
API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
specification. This function should connect to the base node which is provided
as a parameter, and the final node in the chain should be removed.

For example:
```typescript
const audioSource = new Entity(this.messageBus);
audioSource.Add(new AudioSource("example", {
    playing: false,
    loop: -1,
    volume: 0.2,
    playbackRate: 1,
    audioProcessor: (base: AudioBufferSourceNode, context: AudioContext): AudioNode => {
        const filter = context.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(1000, context.currentTime);
        base.connect(filter);
        return filter;
    }
}));
```

This adds a low pass [BiquadFilterNode] filter to the audio being played.

[AudioSourceSystem]: ../../reference/classes/audiosourcesystem
[AudioSource]: ../../reference/classes/audiosource
[HTTPAudioSystem]: ../../references/classes/httpaudiosystem
[BiquadFilterNode]: https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode