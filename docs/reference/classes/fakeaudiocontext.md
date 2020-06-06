
# Class: FakeAudioContext

## Hierarchy

* [Fake](fake.md)

  ↳ **FakeAudioContext**

## Implements

* AudioContext

## Index

### Constructors

* [constructor](fakeaudiocontext.md#constructor)

### Properties

* [audioWorklet](fakeaudiocontext.md#audioworklet)
* [baseLatency](fakeaudiocontext.md#baselatency)
* [currentTime](fakeaudiocontext.md#currenttime)
* [destination](fakeaudiocontext.md#destination)
* [listener](fakeaudiocontext.md#listener)
* [onstatechange](fakeaudiocontext.md#onstatechange)
* [outputLatency](fakeaudiocontext.md#outputlatency)
* [sampleRate](fakeaudiocontext.md#samplerate)
* [state](fakeaudiocontext.md#state)

### Methods

* [addEventListener](fakeaudiocontext.md#addeventlistener)
* [close](fakeaudiocontext.md#close)
* [createAnalyser](fakeaudiocontext.md#createanalyser)
* [createBiquadFilter](fakeaudiocontext.md#createbiquadfilter)
* [createBuffer](fakeaudiocontext.md#createbuffer)
* [createBufferSource](fakeaudiocontext.md#createbuffersource)
* [createChannelMerger](fakeaudiocontext.md#createchannelmerger)
* [createChannelSplitter](fakeaudiocontext.md#createchannelsplitter)
* [createConstantSource](fakeaudiocontext.md#createconstantsource)
* [createConvolver](fakeaudiocontext.md#createconvolver)
* [createDelay](fakeaudiocontext.md#createdelay)
* [createDynamicsCompressor](fakeaudiocontext.md#createdynamicscompressor)
* [createGain](fakeaudiocontext.md#creategain)
* [createIIRFilter](fakeaudiocontext.md#createiirfilter)
* [createMediaElementSource](fakeaudiocontext.md#createmediaelementsource)
* [createMediaStreamDestination](fakeaudiocontext.md#createmediastreamdestination)
* [createMediaStreamSource](fakeaudiocontext.md#createmediastreamsource)
* [createMediaStreamTrackSource](fakeaudiocontext.md#createmediastreamtracksource)
* [createOscillator](fakeaudiocontext.md#createoscillator)
* [createPanner](fakeaudiocontext.md#createpanner)
* [createPeriodicWave](fakeaudiocontext.md#createperiodicwave)
* [createScriptProcessor](fakeaudiocontext.md#createscriptprocessor)
* [createStereoPanner](fakeaudiocontext.md#createstereopanner)
* [createWaveShaper](fakeaudiocontext.md#createwaveshaper)
* [decodeAudioData](fakeaudiocontext.md#decodeaudiodata)
* [dispatchEvent](fakeaudiocontext.md#dispatchevent)
* [getOutputTimestamp](fakeaudiocontext.md#getoutputtimestamp)
* [removeEventListener](fakeaudiocontext.md#removeeventlistener)
* [resume](fakeaudiocontext.md#resume)
* [suspend](fakeaudiocontext.md#suspend)

## Constructors

###  constructor

\+ **new FakeAudioContext**(`reactors`: [Reactor](reactor.md)[]): *[FakeAudioContext](fakeaudiocontext.md)*

*Inherited from [Fake](fake.md).[constructor](fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reactors` | [Reactor](reactor.md)[] | [] |

**Returns:** *[FakeAudioContext](fakeaudiocontext.md)*

## Properties

###  audioWorklet

• **audioWorklet**: *AudioWorklet*

___

###  baseLatency

• **baseLatency**: *number*

___

###  currentTime

• **currentTime**: *number*

___

###  destination

• **destination**: *AudioDestinationNode*

___

###  listener

• **listener**: *AudioListener*

___

###  onstatechange

• **onstatechange**: *function | null*

___

###  outputLatency

• **outputLatency**: *number*

___

###  sampleRate

• **sampleRate**: *number*

___

###  state

• **state**: *AudioContextState*

## Methods

###  addEventListener

▸ **addEventListener**<**K**>(`type`: K, `listener`: function, `options?`: boolean | AddEventListenerOptions | undefined): *void*

**Type parameters:**

▪ **K**: *"statechange"*

**Parameters:**

▪ **type**: *K*

▪ **listener**: *function*

▸ (`this`: AudioContext, `ev`: BaseAudioContextEventMap[K]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`this` | AudioContext |
`ev` | BaseAudioContextEventMap[K] |

▪`Optional`  **options**: *boolean | AddEventListenerOptions | undefined*

**Returns:** *void*

▸ **addEventListener**(`type`: string, `listener`: EventListenerOrEventListenerObject, `options?`: boolean | AddEventListenerOptions | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`listener` | EventListenerOrEventListenerObject |
`options?` | boolean &#124; AddEventListenerOptions &#124; undefined |

**Returns:** *void*

___

###  close

▸ **close**(): *Promise‹void›*

**Returns:** *Promise‹void›*

___

###  createAnalyser

▸ **createAnalyser**(): *AnalyserNode*

**Returns:** *AnalyserNode*

___

###  createBiquadFilter

▸ **createBiquadFilter**(): *BiquadFilterNode*

**Returns:** *BiquadFilterNode*

___

###  createBuffer

▸ **createBuffer**(`numberOfChannels`: number, `length`: number, `sampleRate`: number): *AudioBuffer*

**Parameters:**

Name | Type |
------ | ------ |
`numberOfChannels` | number |
`length` | number |
`sampleRate` | number |

**Returns:** *AudioBuffer*

___

###  createBufferSource

▸ **createBufferSource**(): *AudioBufferSourceNode*

**Returns:** *AudioBufferSourceNode*

___

###  createChannelMerger

▸ **createChannelMerger**(`numberOfInputs?`: number | undefined): *ChannelMergerNode*

**Parameters:**

Name | Type |
------ | ------ |
`numberOfInputs?` | number &#124; undefined |

**Returns:** *ChannelMergerNode*

___

###  createChannelSplitter

▸ **createChannelSplitter**(`numberOfOutputs?`: number | undefined): *ChannelSplitterNode*

**Parameters:**

Name | Type |
------ | ------ |
`numberOfOutputs?` | number &#124; undefined |

**Returns:** *ChannelSplitterNode*

___

###  createConstantSource

▸ **createConstantSource**(): *ConstantSourceNode*

**Returns:** *ConstantSourceNode*

___

###  createConvolver

▸ **createConvolver**(): *ConvolverNode*

**Returns:** *ConvolverNode*

___

###  createDelay

▸ **createDelay**(`maxDelayTime?`: number | undefined): *DelayNode*

**Parameters:**

Name | Type |
------ | ------ |
`maxDelayTime?` | number &#124; undefined |

**Returns:** *DelayNode*

___

###  createDynamicsCompressor

▸ **createDynamicsCompressor**(): *DynamicsCompressorNode*

**Returns:** *DynamicsCompressorNode*

___

###  createGain

▸ **createGain**(): *GainNode*

**Returns:** *GainNode*

___

###  createIIRFilter

▸ **createIIRFilter**(`feedforward`: number[], `feedback`: number[]): *IIRFilterNode*

**Parameters:**

Name | Type |
------ | ------ |
`feedforward` | number[] |
`feedback` | number[] |

**Returns:** *IIRFilterNode*

___

###  createMediaElementSource

▸ **createMediaElementSource**(`mediaElement`: HTMLMediaElement): *MediaElementAudioSourceNode*

**Parameters:**

Name | Type |
------ | ------ |
`mediaElement` | HTMLMediaElement |

**Returns:** *MediaElementAudioSourceNode*

___

###  createMediaStreamDestination

▸ **createMediaStreamDestination**(): *MediaStreamAudioDestinationNode*

**Returns:** *MediaStreamAudioDestinationNode*

___

###  createMediaStreamSource

▸ **createMediaStreamSource**(`mediaStream`: MediaStream): *MediaStreamAudioSourceNode*

**Parameters:**

Name | Type |
------ | ------ |
`mediaStream` | MediaStream |

**Returns:** *MediaStreamAudioSourceNode*

___

###  createMediaStreamTrackSource

▸ **createMediaStreamTrackSource**(`mediaStreamTrack`: MediaStreamTrack): *MediaStreamTrackAudioSourceNode*

**Parameters:**

Name | Type |
------ | ------ |
`mediaStreamTrack` | MediaStreamTrack |

**Returns:** *MediaStreamTrackAudioSourceNode*

___

###  createOscillator

▸ **createOscillator**(): *OscillatorNode*

**Returns:** *OscillatorNode*

___

###  createPanner

▸ **createPanner**(): *PannerNode*

**Returns:** *PannerNode*

___

###  createPeriodicWave

▸ **createPeriodicWave**(`real`: number[] | Float32Array, `imag`: number[] | Float32Array, `constraints?`: PeriodicWaveConstraints | undefined): *PeriodicWave*

**Parameters:**

Name | Type |
------ | ------ |
`real` | number[] &#124; Float32Array |
`imag` | number[] &#124; Float32Array |
`constraints?` | PeriodicWaveConstraints &#124; undefined |

**Returns:** *PeriodicWave*

___

###  createScriptProcessor

▸ **createScriptProcessor**(`bufferSize?`: number | undefined, `numberOfInputChannels?`: number | undefined, `numberOfOutputChannels?`: number | undefined): *ScriptProcessorNode*

**Parameters:**

Name | Type |
------ | ------ |
`bufferSize?` | number &#124; undefined |
`numberOfInputChannels?` | number &#124; undefined |
`numberOfOutputChannels?` | number &#124; undefined |

**Returns:** *ScriptProcessorNode*

___

###  createStereoPanner

▸ **createStereoPanner**(): *StereoPannerNode*

**Returns:** *StereoPannerNode*

___

###  createWaveShaper

▸ **createWaveShaper**(): *WaveShaperNode*

**Returns:** *WaveShaperNode*

___

###  decodeAudioData

▸ **decodeAudioData**(`audioData`: ArrayBuffer, `successCallback?`: DecodeSuccessCallback | null | undefined, `errorCallback?`: DecodeErrorCallback | null | undefined): *Promise‹AudioBuffer›*

**Parameters:**

Name | Type |
------ | ------ |
`audioData` | ArrayBuffer |
`successCallback?` | DecodeSuccessCallback &#124; null &#124; undefined |
`errorCallback?` | DecodeErrorCallback &#124; null &#124; undefined |

**Returns:** *Promise‹AudioBuffer›*

___

###  dispatchEvent

▸ **dispatchEvent**(`event`: Event): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *boolean*

___

###  getOutputTimestamp

▸ **getOutputTimestamp**(): *AudioTimestamp*

**Returns:** *AudioTimestamp*

___

###  removeEventListener

▸ **removeEventListener**<**K**>(`type`: K, `listener`: function, `options?`: boolean | EventListenerOptions | undefined): *void*

**Type parameters:**

▪ **K**: *"statechange"*

**Parameters:**

▪ **type**: *K*

▪ **listener**: *function*

▸ (`this`: AudioContext, `ev`: BaseAudioContextEventMap[K]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`this` | AudioContext |
`ev` | BaseAudioContextEventMap[K] |

▪`Optional`  **options**: *boolean | EventListenerOptions | undefined*

**Returns:** *void*

▸ **removeEventListener**(`type`: string, `listener`: EventListenerOrEventListenerObject, `options?`: boolean | EventListenerOptions | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string |
`listener` | EventListenerOrEventListenerObject |
`options?` | boolean &#124; EventListenerOptions &#124; undefined |

**Returns:** *void*

___

###  resume

▸ **resume**(): *Promise‹void›*

**Returns:** *Promise‹void›*

___

###  suspend

▸ **suspend**(): *Promise‹void›*

**Returns:** *Promise‹void›*
