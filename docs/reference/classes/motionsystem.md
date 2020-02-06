
# Class: MotionSystem

MotionSystem handles basic physics calculations for entities with a motion component.
This system handles velocity, acceleration, angular velocity and angular acceleration.

## Hierarchy

  ↳ [System](system.md)

  ↳ **MotionSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](motionsystem.md#constructor)

### Properties

* [entities](motionsystem.md#protected-entities)
* [messageBus](motionsystem.md#protected-messagebus)
* [scene](motionsystem.md#protected-optional-scene)
* [subscriberID](motionsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](motionsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](motionsystem.md#static-message_register)
* [MESSAGE_UPDATE](motionsystem.md#static-message_update)

### Methods

* [Destroy](motionsystem.md#destroy)
* [GetSystemEntity](motionsystem.md#protected-getsystementity)
* [OnDestroy](motionsystem.md#protected-ondestroy)
* [OnMessage](motionsystem.md#onmessage)
* [Update](motionsystem.md#protected-update)
* [EVALUATOR](motionsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new MotionSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `__namedParameters`: object): *[MotionSystem](motionsystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪`Default value`  **__namedParameters**: *object*= { scene: undefined, entities: [], subscriberID: undefined }

Name | Type |
------ | ------ |
`entities` | [SystemEntity](systementity.md)‹›[] |
`scene` | undefined &#124; [IScene](../interfaces/iscene.md) |
`subscriberID` | undefined &#124; number |

**Returns:** *[MotionSystem](motionsystem.md)*

## Properties

### `Protected` entities

• **entities**: *[SystemEntity](systementity.md)[]*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/iscene.md)*

*Inherited from [System](system.md).[scene](system.md#protected-optional-scene)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

___

### `Static` MESSAGE_DEREGISTER

▪ **MESSAGE_DEREGISTER**: *"system_deregister"* = "system_deregister"

*Inherited from [System](system.md).[MESSAGE_DEREGISTER](system.md#static-message_deregister)*

___

### `Static` MESSAGE_REGISTER

▪ **MESSAGE_REGISTER**: *"system_register"* = "system_register"

*Inherited from [System](system.md).[MESSAGE_REGISTER](system.md#static-message_register)*

___

### `Static` MESSAGE_UPDATE

▪ **MESSAGE_UPDATE**: *"system_update"* = "system_update"

*Inherited from [System](system.md).[MESSAGE_UPDATE](system.md#static-message_update)*

## Methods

###  Destroy

▸ **Destroy**(): *void*

*Inherited from [System](system.md).[Destroy](system.md#destroy)*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

___

### `Protected` GetSystemEntity

▸ **GetSystemEntity**(`entity`: [IEntity](../interfaces/ientity.md)): *[SystemEntity](systementity.md) | undefined*

*Inherited from [System](system.md).[GetSystemEntity](system.md#protected-getsystementity)*

Helper function to retrieve the SystemEntity equivalent of an
Entity if it exists in this system, otherwise returns undefined.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) | The entity to get the SystemEntity of |

**Returns:** *[SystemEntity](systementity.md) | undefined*

The system entity if it exists, otherwise undefined

___

### `Protected` OnDestroy

▸ **OnDestroy**(): *void*

*Inherited from [System](system.md).[OnDestroy](system.md#protected-ondestroy)*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Inherited from [System](system.md).[OnMessage](system.md#onmessage)*

*Overrides [Subscriber](subscriber.md).[OnMessage](subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

*Overrides [System](system.md).[Update](system.md#protected-update)*

**Parameters:**

Name | Type |
------ | ------ |
`dt` | number |

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
