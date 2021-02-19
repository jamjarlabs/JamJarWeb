# Class: FakeGainNode

## Hierarchy

* [*Fake*](fake.md)

  ↳ **FakeGainNode**

## Implements

* *GainNode*

## Table of contents

### Constructors

- [constructor](fakegainnode.md#constructor)

### Properties

- [channelCount](fakegainnode.md#channelcount)
- [channelCountMode](fakegainnode.md#channelcountmode)
- [channelInterpretation](fakegainnode.md#channelinterpretation)
- [context](fakegainnode.md#context)
- [gain](fakegainnode.md#gain)
- [numberOfInputs](fakegainnode.md#numberofinputs)
- [numberOfOutputs](fakegainnode.md#numberofoutputs)

### Methods

- [addEventListener](fakegainnode.md#addeventlistener)
- [connect](fakegainnode.md#connect)
- [disconnect](fakegainnode.md#disconnect)
- [dispatchEvent](fakegainnode.md#dispatchevent)
- [removeEventListener](fakegainnode.md#removeeventlistener)

## Constructors

### constructor

\+ **new FakeGainNode**(`reactors?`: [*Reactor*](reactor.md)[]): [*FakeGainNode*](fakegainnode.md)

#### Parameters:

Name | Type |
:------ | :------ |
`reactors` | [*Reactor*](reactor.md)[] |

**Returns:** [*FakeGainNode*](fakegainnode.md)

Inherited from: [Fake](fake.md)

## Properties

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

### gain

• **gain**: AudioParam

___

### numberOfInputs

• **numberOfInputs**: *number*

___

### numberOfOutputs

• **numberOfOutputs**: *number*

## Methods

### addEventListener

▸ **addEventListener**(`type`: *string*, `listener`: *null* \| EventListener \| EventListenerObject, `options?`: *boolean* \| AddEventListenerOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`listener` | *null* \| EventListener \| EventListenerObject |
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

▸ **removeEventListener**(`type`: *string*, `callback`: *null* \| EventListener \| EventListenerObject, `options?`: *boolean* \| EventListenerOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`type` | *string* |
`callback` | *null* \| EventListener \| EventListenerObject |
`options?` | *boolean* \| EventListenerOptions |

**Returns:** *void*
