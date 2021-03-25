# Class: FakeAudioContext

## Hierarchy

* [*Fake*](fake.md)

  ↳ **FakeAudioContext**

## Implements

* *AudioContext*

## Table of contents

### Constructors

- [constructor](fakeaudiocontext.md#constructor)

### Properties

- [audioWorklet](fakeaudiocontext.md#audioworklet)
- [baseLatency](fakeaudiocontext.md#baselatency)
- [currentTime](fakeaudiocontext.md#currenttime)
- [destination](fakeaudiocontext.md#destination)
- [listener](fakeaudiocontext.md#listener)
- [onstatechange](fakeaudiocontext.md#onstatechange)
- [outputLatency](fakeaudiocontext.md#outputlatency)
- [sampleRate](fakeaudiocontext.md#samplerate)
- [state](fakeaudiocontext.md#state)

### Methods

- [addEventListener](fakeaudiocontext.md#addeventlistener)
- [close](fakeaudiocontext.md#close)
- [createAnalyser](fakeaudiocontext.md#createanalyser)
- [createBiquadFilter](fakeaudiocontext.md#createbiquadfilter)
- [createBuffer](fakeaudiocontext.md#createbuffer)
- [createBufferSource](fakeaudiocontext.md#createbuffersource)
- [createChannelMerger](fakeaudiocontext.md#createchannelmerger)
- [createChannelSplitter](fakeaudiocontext.md#createchannelsplitter)
- [createConstantSource](fakeaudiocontext.md#createconstantsource)
- [createConvolver](fakeaudiocontext.md#createconvolver)
- [createDelay](fakeaudiocontext.md#createdelay)
- [createDynamicsCompressor](fakeaudiocontext.md#createdynamicscompressor)
- [createGain](fakeaudiocontext.md#creategain)
- [createIIRFilter](fakeaudiocontext.md#createiirfilter)
- [createMediaElementSource](fakeaudiocontext.md#createmediaelementsource)
- [createMediaStreamDestination](fakeaudiocontext.md#createmediastreamdestination)
- [createMediaStreamSource](fakeaudiocontext.md#createmediastreamsource)
- [createMediaStreamTrackSource](fakeaudiocontext.md#createmediastreamtracksource)
- [createOscillator](fakeaudiocontext.md#createoscillator)
- [createPanner](fakeaudiocontext.md#createpanner)
- [createPeriodicWave](fakeaudiocontext.md#createperiodicwave)
- [createScriptProcessor](fakeaudiocontext.md#createscriptprocessor)
- [createStereoPanner](fakeaudiocontext.md#createstereopanner)
- [createWaveShaper](fakeaudiocontext.md#createwaveshaper)
- [decodeAudioData](fakeaudiocontext.md#decodeaudiodata)
- [dispatchEvent](fakeaudiocontext.md#dispatchevent)
- [getOutputTimestamp](fakeaudiocontext.md#getoutputtimestamp)
- [removeEventListener](fakeaudiocontext.md#removeeventlistener)
- [resume](fakeaudiocontext.md#resume)
- [suspend](fakeaudiocontext.md#suspend)

## Constructors

### constructor

\+ **new FakeAudioContext**(`reactors?`: [*Reactor*](reactor.md)[]): [*FakeAudioContext*](fakeaudiocontext.md)

#### Parameters:

Name | Type |
:------ | :------ |
`reactors` | [*Reactor*](reactor.md)[] |

**Returns:** [*FakeAudioContext*](fakeaudiocontext.md)

Inherited from: [Fake](fake.md)

## Properties

### audioWorklet

• **audioWorklet**: AudioWorklet

___

### baseLatency

• **baseLatency**: *number*

___

### currentTime

• **currentTime**: *number*

___

### destination

• **destination**: AudioDestinationNode

___

### listener

• **listener**: AudioListener

___

### onstatechange

• **onstatechange**: *null* \| (`ev`: Event) => *any*

___

### outputLatency

• **outputLatency**: *number*

___

### sampleRate

• **sampleRate**: *number*

___

### state

• **state**: AudioContextState

## Methods

### addEventListener

▸ **addEventListener**<K\>(`type`: K, `listener`: (`ev`: BaseAudioContextEventMap[K]) => *any*, `options?`: *boolean* \| AddEventListenerOptions): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *statechange* |

#### Parameters:

Name | Type |
:------ | :------ |
`type` | K |
`listener` | (`ev`: BaseAudioContextEventMap[K]) => *any* |
`options?` | *boolean* \| AddEventListenerOptions |

**Returns:** *void*

▸ **addEventListener**(`type`: *string*, `listener`: EventListenerOrEventListenerObject, `options?`: *boolean* \| AddEventListenerOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`listener` | EventListenerOrEventListenerObject |
`options?` | *boolean* \| AddEventListenerOptions |

**Returns:** *void*

___

### close

▸ **close**(): *Promise*<void\>

**Returns:** *Promise*<void\>

___

### createAnalyser

▸ **createAnalyser**(): AnalyserNode

**Returns:** AnalyserNode

___

### createBiquadFilter

▸ **createBiquadFilter**(): BiquadFilterNode

**Returns:** BiquadFilterNode

___

### createBuffer

▸ **createBuffer**(`numberOfChannels`: *number*, `length`: *number*, `sampleRate`: *number*): AudioBuffer

#### Parameters:

Name | Type |
:------ | :------ |
`numberOfChannels` | *number* |
`length` | *number* |
`sampleRate` | *number* |

**Returns:** AudioBuffer

___

### createBufferSource

▸ **createBufferSource**(): AudioBufferSourceNode

**Returns:** AudioBufferSourceNode

___

### createChannelMerger

▸ **createChannelMerger**(`numberOfInputs?`: *number*): ChannelMergerNode

#### Parameters:

Name | Type |
:------ | :------ |
`numberOfInputs?` | *number* |

**Returns:** ChannelMergerNode

___

### createChannelSplitter

▸ **createChannelSplitter**(`numberOfOutputs?`: *number*): ChannelSplitterNode

#### Parameters:

Name | Type |
:------ | :------ |
`numberOfOutputs?` | *number* |

**Returns:** ChannelSplitterNode

___

### createConstantSource

▸ **createConstantSource**(): ConstantSourceNode

**Returns:** ConstantSourceNode

___

### createConvolver

▸ **createConvolver**(): ConvolverNode

**Returns:** ConvolverNode

___

### createDelay

▸ **createDelay**(`maxDelayTime?`: *number*): DelayNode

#### Parameters:

Name | Type |
:------ | :------ |
`maxDelayTime?` | *number* |

**Returns:** DelayNode

___

### createDynamicsCompressor

▸ **createDynamicsCompressor**(): DynamicsCompressorNode

**Returns:** DynamicsCompressorNode

___

### createGain

▸ **createGain**(): GainNode

**Returns:** GainNode

___

### createIIRFilter

▸ **createIIRFilter**(`feedforward`: *number*[], `feedback`: *number*[]): IIRFilterNode

#### Parameters:

Name | Type |
:------ | :------ |
`feedforward` | *number*[] |
`feedback` | *number*[] |

**Returns:** IIRFilterNode

___

### createMediaElementSource

▸ **createMediaElementSource**(`mediaElement`: HTMLMediaElement): MediaElementAudioSourceNode

#### Parameters:

Name | Type |
:------ | :------ |
`mediaElement` | HTMLMediaElement |

**Returns:** MediaElementAudioSourceNode

___

### createMediaStreamDestination

▸ **createMediaStreamDestination**(): MediaStreamAudioDestinationNode

**Returns:** MediaStreamAudioDestinationNode

___

### createMediaStreamSource

▸ **createMediaStreamSource**(`mediaStream`: MediaStream): MediaStreamAudioSourceNode

#### Parameters:

Name | Type |
:------ | :------ |
`mediaStream` | MediaStream |

**Returns:** MediaStreamAudioSourceNode

___

### createMediaStreamTrackSource

▸ **createMediaStreamTrackSource**(`mediaStreamTrack`: MediaStreamTrack): MediaStreamTrackAudioSourceNode

#### Parameters:

Name | Type |
:------ | :------ |
`mediaStreamTrack` | MediaStreamTrack |

**Returns:** MediaStreamTrackAudioSourceNode

___

### createOscillator

▸ **createOscillator**(): OscillatorNode

**Returns:** OscillatorNode

___

### createPanner

▸ **createPanner**(): PannerNode

**Returns:** PannerNode

___

### createPeriodicWave

▸ **createPeriodicWave**(`real`: *Float32Array* \| *number*[], `imag`: *Float32Array* \| *number*[], `constraints?`: PeriodicWaveConstraints): PeriodicWave

#### Parameters:

Name | Type |
:------ | :------ |
`real` | *Float32Array* \| *number*[] |
`imag` | *Float32Array* \| *number*[] |
`constraints?` | PeriodicWaveConstraints |

**Returns:** PeriodicWave

___

### createScriptProcessor

▸ **createScriptProcessor**(`bufferSize?`: *number*, `numberOfInputChannels?`: *number*, `numberOfOutputChannels?`: *number*): ScriptProcessorNode

#### Parameters:

Name | Type |
:------ | :------ |
`bufferSize?` | *number* |
`numberOfInputChannels?` | *number* |
`numberOfOutputChannels?` | *number* |

**Returns:** ScriptProcessorNode

___

### createStereoPanner

▸ **createStereoPanner**(): StereoPannerNode

**Returns:** StereoPannerNode

___

### createWaveShaper

▸ **createWaveShaper**(): WaveShaperNode

**Returns:** WaveShaperNode

___

### decodeAudioData

▸ **decodeAudioData**(`audioData`: ArrayBuffer, `successCallback?`: *null* \| DecodeSuccessCallback, `errorCallback?`: *null* \| DecodeErrorCallback): *Promise*<AudioBuffer\>

#### Parameters:

Name | Type |
:------ | :------ |
`audioData` | ArrayBuffer |
`successCallback?` | *null* \| DecodeSuccessCallback |
`errorCallback?` | *null* \| DecodeErrorCallback |

**Returns:** *Promise*<AudioBuffer\>

___

### dispatchEvent

▸ **dispatchEvent**(`event`: Event): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | Event |

**Returns:** *boolean*

___

### getOutputTimestamp

▸ **getOutputTimestamp**(): AudioTimestamp

**Returns:** AudioTimestamp

___

### removeEventListener

▸ **removeEventListener**<K\>(`type`: K, `listener`: (`ev`: BaseAudioContextEventMap[K]) => *any*, `options?`: *boolean* \| EventListenerOptions): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *statechange* |

#### Parameters:

Name | Type |
:------ | :------ |
`type` | K |
`listener` | (`ev`: BaseAudioContextEventMap[K]) => *any* |
`options?` | *boolean* \| EventListenerOptions |

**Returns:** *void*

▸ **removeEventListener**(`type`: *string*, `listener`: EventListenerOrEventListenerObject, `options?`: *boolean* \| EventListenerOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`listener` | EventListenerOrEventListenerObject |
`options?` | *boolean* \| EventListenerOptions |

**Returns:** *void*

___

### resume

▸ **resume**(): *Promise*<void\>

**Returns:** *Promise*<void\>

___

### suspend

▸ **suspend**(): *Promise*<void\>

**Returns:** *Promise*<void\>
