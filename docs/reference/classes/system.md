
# Class: System

System is one of the key elements of the Entity-Component-System architecture.
A system is for implementing logic, manipulating entities and their components.

## Hierarchy

* [Subscriber](subscriber.md)

  ↳ **System**

  ↳ [StatefulSystem](statefulsystem.md)

  ↳ [TestSystem](testsystem.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](system.md#constructor)

### Properties

* [messageBus](system.md#protected-messagebus)
* [scene](system.md#protected-optional-scene)
* [subscriberID](system.md#subscriberid)
* [MESSAGE_UPDATE](system.md#static-message_update)

### Methods

* [Destroy](system.md#destroy)
* [OnDestroy](system.md#protected-ondestroy)
* [OnMessage](system.md#onmessage)
* [Update](system.md#protected-update)

## Constructors

###  constructor

\+ **new System**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `subscriberID?`: undefined | number): *[System](system.md)*

*Overrides [Subscriber](subscriber.md).[constructor](subscriber.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) |
`scene?` | [IScene](../interfaces/iscene.md) |
`subscriberID?` | undefined &#124; number |

**Returns:** *[System](system.md)*

## Properties

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/iscene.md)*

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

## Methods

###  Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

___

### `Protected` OnDestroy

▸ **OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Overrides [Subscriber](subscriber.md).[OnMessage](subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

General update method, default empty. Override with custom logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | number | DeltaTime  |

**Returns:** *void*
