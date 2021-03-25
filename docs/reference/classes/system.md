# Class: System

System is one of the key elements of the Entity-Component-System architecture.
A system is for implementing logic, manipulating entities and their components.

## Hierarchy

* [*Subscriber*](subscriber.md)

  ↳ **System**

  ↳↳ [*StatefulSystem*](statefulsystem.md)

  ↳↳ [*CanvasResizeSystem*](canvasresizesystem.md)

## Table of contents

### Constructors

- [constructor](system.md#constructor)

### Properties

- [messageBus](system.md#messagebus)
- [scene](system.md#scene)
- [subscriberID](system.md#subscriberid)
- [MESSAGE\_UPDATE](system.md#message_update)

### Methods

- [Destroy](system.md#destroy)
- [OnDestroy](system.md#ondestroy)
- [OnMessage](system.md#onmessage)
- [Update](system.md#update)

## Constructors

### constructor

\+ **new System**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `scene?`: [*IScene*](../interfaces/iscene.md), `subscriberID?`: *number*): [*System*](system.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`subscriberID?` | *number* |

**Returns:** [*System*](system.md)

Inherited from: [Subscriber](subscriber.md)

## Properties

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [Subscriber](subscriber.md)

___

### Update

▸ `Protected`**Update**(`dt`: *number*): *void*

General update method, default empty. Override with custom logic.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dt` | *number* | DeltaTime    |

**Returns:** *void*
