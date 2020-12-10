# HTTP Audio Loading

Audio assets can be loaded over HTTP through the fetch JS API and are then made
available to use, for example with [AudioSource] components.

## Setting up HTTP Audio System

An [HTTPAudioSystem] can be set up by supplying a message bus and declaring the
system.

```typescript
new HTTPAudioSystem(messageBus);
```

## Loading an Audio Asset

```typescript
this.messageBus.Publish(Message.New<AudioRequest>(AudioRequest.MESSAGE_REQUEST_LOAD, new AudioRequest(
    "example",
    "assets/example.mp3"
)));
```

This loads the audio file `assets/example.mp3` and saves it as asset name
`example`. This allows the audio asset to be used throughout the system referred
to as `example`.

[AudioSource]: ../../reference/classes/audiosource
[HTTPAudioSystem]: ../../references/classes/httpaudiosystem
