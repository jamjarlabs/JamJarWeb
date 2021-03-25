# Class: FakeAudioBufferSourceNode

## Hierarchy

* [*Fake*](fake.md)

  ↳ **FakeAudioBufferSourceNode**

## Implements

* *AudioBufferSourceNode*

## Table of contents

### Constructors

- [constructor](fakeaudiobuffersourcenode.md#constructor)

### Properties

- [buffer](fakeaudiobuffersourcenode.md#buffer)
- [channelCount](fakeaudiobuffersourcenode.md#channelcount)
- [channelCountMode](fakeaudiobuffersourcenode.md#channelcountmode)
- [channelInterpretation](fakeaudiobuffersourcenode.md#channelinterpretation)
- [context](fakeaudiobuffersourcenode.md#context)
- [detune](fakeaudiobuffersourcenode.md#detune)
- [loop](fakeaudiobuffersourcenode.md#loop)
- [loopEnd](fakeaudiobuffersourcenode.md#loopend)
- [loopStart](fakeaudiobuffersourcenode.md#loopstart)
- [numberOfInputs](fakeaudiobuffersourcenode.md#numberofinputs)
- [numberOfOutputs](fakeaudiobuffersourcenode.md#numberofoutputs)
- [onended](fakeaudiobuffersourcenode.md#onended)
- [playbackRate](fakeaudiobuffersourcenode.md#playbackrate)

### Methods

- [addEventListener](fakeaudiobuffersourcenode.md#addeventlistener)
- [connect](fakeaudiobuffersourcenode.md#connect)
- [disconnect](fakeaudiobuffersourcenode.md#disconnect)
- [dispatchEvent](fakeaudiobuffersourcenode.md#dispatchevent)
- [removeEventListener](fakeaudiobuffersourcenode.md#removeeventlistener)
- [start](fakeaudiobuffersourcenode.md#start)
- [stop](fakeaudiobuffersourcenode.md#stop)

## Constructors

### constructor

\+ **new FakeAudioBufferSourceNode**(`reactors?`: [*Reactor*](reactor.md)[]): [*FakeAudioBufferSourceNode*](fakeaudiobuffersourcenode.md)

#### Parameters:

Name | Type |
:------ | :------ |
`reactors` | [*Reactor*](reactor.md)[] |

**Returns:** [*FakeAudioBufferSourceNode*](fakeaudiobuffersourcenode.md)

Inherited from: [Fake](fake.md)

## Properties

### buffer

• **buffer**: *null* \| AudioBuffer

___

### channelCount

• **channelCount**: *number*

___

### channelCountMode

• **channelCountMode**: ChannelCountMode

___

### channelInterpretation

• **channelInterpretation**: ChannelInterpretation

___

### context

• **context**: BaseAudioContext

___

### detune

• **detune**: AudioParam

___

### loop

• **loop**: *boolean*

___

### loopEnd

• **loopEnd**: *number*

___

### loopStart

• **loopStart**: *number*

___

### numberOfInputs

• **numberOfInputs**: *number*

___

### numberOfOutputs

• **numberOfOutputs**: *number*

___

### onended

• **onended**: *null* \| (`ev`: Event) => *any*

___

### playbackRate

• **playbackRate**: AudioParam

## Methods

### addEventListener

▸ **addEventListener**<K\>(`type`: K, `listener`: (`ev`: AudioScheduledSourceNodeEventMap[K]) => *any*, `options?`: *boolean* \| AddEventListenerOptions): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *ended* |

#### Parameters:

Name | Type |
:------ | :------ |
`type` | K |
`listener` | (`ev`: AudioScheduledSourceNodeEventMap[K]) => *any* |
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

### connect

▸ **connect**(`destinationNode`: AudioNode, `output?`: *number*, `input?`: *number*): AudioNode

#### Parameters:

Name | Type |
:------ | :------ |
`destinationNode` | AudioNode |
`output?` | *number* |
`input?` | *number* |

**Returns:** AudioNode

▸ **connect**(`destinationParam`: AudioParam, `output?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`destinationParam` | AudioParam |
`output?` | *number* |

**Returns:** *void*

___

### disconnect

▸ **disconnect**(): *void*

**Returns:** *void*

▸ **disconnect**(`output`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`output` | *number* |

**Returns:** *void*

▸ **disconnect**(`destinationNode`: AudioNode): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`destinationNode` | AudioNode |

**Returns:** *void*

▸ **disconnect**(`destinationNode`: AudioNode, `output`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`destinationNode` | AudioNode |
`output` | *number* |

**Returns:** *void*

▸ **disconnect**(`destinationNode`: AudioNode, `output`: *number*, `input`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`destinationNode` | AudioNode |
`output` | *number* |
`input` | *number* |

**Returns:** *void*

▸ **disconnect**(`destinationParam`: AudioParam): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`destinationParam` | AudioParam |

**Returns:** *void*

▸ **disconnect**(`destinationParam`: AudioParam, `output`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`destinationParam` | AudioParam |
`output` | *number* |

**Returns:** *void*

___

### dispatchEvent

▸ **dispatchEvent**(`event`: Event): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | Event |

**Returns:** *boolean*

___

### removeEventListener

▸ **removeEventListener**<K\>(`type`: K, `listener`: (`ev`: AudioScheduledSourceNodeEventMap[K]) => *any*, `options?`: *boolean* \| EventListenerOptions): *void*

#### Type parameters:

Name | Type |
:------ | :------ |
`K` | *ended* |

#### Parameters:

Name | Type |
:------ | :------ |
`type` | K |
`listener` | (`ev`: AudioScheduledSourceNodeEventMap[K]) => *any* |
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

### start

▸ **start**(`when?`: *number*, `offset?`: *number*, `duration?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`when?` | *number* |
`offset?` | *number* |
`duration?` | *number* |

**Returns:** *void*

___

### stop

▸ **stop**(`when?`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`when?` | *number* |

**Returns:** *void*
