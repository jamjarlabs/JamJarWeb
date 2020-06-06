
# Class: FakeAudioBufferSourceNode

## Hierarchy

* [Fake](fake.md)

  ↳ **FakeAudioBufferSourceNode**

## Implements

* AudioBufferSourceNode

## Index

### Constructors

* [constructor](fakeaudiobuffersourcenode.md#constructor)

### Properties

* [buffer](fakeaudiobuffersourcenode.md#buffer)
* [channelCount](fakeaudiobuffersourcenode.md#channelcount)
* [channelCountMode](fakeaudiobuffersourcenode.md#channelcountmode)
* [channelInterpretation](fakeaudiobuffersourcenode.md#channelinterpretation)
* [context](fakeaudiobuffersourcenode.md#context)
* [detune](fakeaudiobuffersourcenode.md#detune)
* [loop](fakeaudiobuffersourcenode.md#loop)
* [loopEnd](fakeaudiobuffersourcenode.md#loopend)
* [loopStart](fakeaudiobuffersourcenode.md#loopstart)
* [numberOfInputs](fakeaudiobuffersourcenode.md#numberofinputs)
* [numberOfOutputs](fakeaudiobuffersourcenode.md#numberofoutputs)
* [onended](fakeaudiobuffersourcenode.md#onended)
* [playbackRate](fakeaudiobuffersourcenode.md#playbackrate)

### Methods

* [addEventListener](fakeaudiobuffersourcenode.md#addeventlistener)
* [connect](fakeaudiobuffersourcenode.md#connect)
* [disconnect](fakeaudiobuffersourcenode.md#disconnect)
* [dispatchEvent](fakeaudiobuffersourcenode.md#dispatchevent)
* [removeEventListener](fakeaudiobuffersourcenode.md#removeeventlistener)
* [start](fakeaudiobuffersourcenode.md#start)
* [stop](fakeaudiobuffersourcenode.md#stop)

## Constructors

###  constructor

\+ **new FakeAudioBufferSourceNode**(`reactors`: [Reactor](reactor.md)[]): *[FakeAudioBufferSourceNode](fakeaudiobuffersourcenode.md)*

*Inherited from [Fake](fake.md).[constructor](fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reactors` | [Reactor](reactor.md)[] | [] |

**Returns:** *[FakeAudioBufferSourceNode](fakeaudiobuffersourcenode.md)*

## Properties

###  buffer

• **buffer**: *AudioBuffer | null*

___

###  channelCount

• **channelCount**: *number*

___

###  channelCountMode

• **channelCountMode**: *ChannelCountMode*

___

###  channelInterpretation

• **channelInterpretation**: *ChannelInterpretation*

___

###  context

• **context**: *BaseAudioContext*

___

###  detune

• **detune**: *AudioParam*

___

###  loop

• **loop**: *boolean*

___

###  loopEnd

• **loopEnd**: *number*

___

###  loopStart

• **loopStart**: *number*

___

###  numberOfInputs

• **numberOfInputs**: *number*

___

###  numberOfOutputs

• **numberOfOutputs**: *number*

___

###  onended

• **onended**: *function | null*

___

###  playbackRate

• **playbackRate**: *AudioParam*

## Methods

###  addEventListener

▸ **addEventListener**<**K**>(`type`: K, `listener`: function, `options?`: boolean | AddEventListenerOptions | undefined): *void*

**Type parameters:**

▪ **K**: *"ended"*

**Parameters:**

▪ **type**: *K*

▪ **listener**: *function*

▸ (`this`: AudioBufferSourceNode, `ev`: AudioScheduledSourceNodeEventMap[K]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`this` | AudioBufferSourceNode |
`ev` | AudioScheduledSourceNodeEventMap[K] |

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

###  connect

▸ **connect**(`destinationNode`: AudioNode, `output?`: number | undefined, `input?`: number | undefined): *AudioNode*

**Parameters:**

Name | Type |
------ | ------ |
`destinationNode` | AudioNode |
`output?` | number &#124; undefined |
`input?` | number &#124; undefined |

**Returns:** *AudioNode*

▸ **connect**(`destinationParam`: AudioParam, `output?`: number | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`destinationParam` | AudioParam |
`output?` | number &#124; undefined |

**Returns:** *void*

___

###  disconnect

▸ **disconnect**(): *void*

**Returns:** *void*

▸ **disconnect**(`output`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`output` | number |

**Returns:** *void*

▸ **disconnect**(`destinationNode`: AudioNode): *void*

**Parameters:**

Name | Type |
------ | ------ |
`destinationNode` | AudioNode |

**Returns:** *void*

▸ **disconnect**(`destinationNode`: AudioNode, `output`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`destinationNode` | AudioNode |
`output` | number |

**Returns:** *void*

▸ **disconnect**(`destinationNode`: AudioNode, `output`: number, `input`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`destinationNode` | AudioNode |
`output` | number |
`input` | number |

**Returns:** *void*

▸ **disconnect**(`destinationParam`: AudioParam): *void*

**Parameters:**

Name | Type |
------ | ------ |
`destinationParam` | AudioParam |

**Returns:** *void*

▸ **disconnect**(`destinationParam`: AudioParam, `output`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`destinationParam` | AudioParam |
`output` | number |

**Returns:** *void*

___

###  dispatchEvent

▸ **dispatchEvent**(`event`: Event): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`event` | Event |

**Returns:** *boolean*

___

###  removeEventListener

▸ **removeEventListener**<**K**>(`type`: K, `listener`: function, `options?`: boolean | EventListenerOptions | undefined): *void*

**Type parameters:**

▪ **K**: *"ended"*

**Parameters:**

▪ **type**: *K*

▪ **listener**: *function*

▸ (`this`: AudioBufferSourceNode, `ev`: AudioScheduledSourceNodeEventMap[K]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`this` | AudioBufferSourceNode |
`ev` | AudioScheduledSourceNodeEventMap[K] |

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

###  start

▸ **start**(`when?`: number | undefined, `offset?`: number | undefined, `duration?`: number | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`when?` | number &#124; undefined |
`offset?` | number &#124; undefined |
`duration?` | number &#124; undefined |

**Returns:** *void*

___

###  stop

▸ **stop**(`when?`: number | undefined): *void*

**Parameters:**

Name | Type |
------ | ------ |
`when?` | number &#124; undefined |

**Returns:** *void*
