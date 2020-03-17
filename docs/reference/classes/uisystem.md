
# Class: UISystem

UISystem handles sprites that are designated as part of the UI, handling their coordinates and scale
relative to a camera, rather than as part of the world coordinates.

## Hierarchy

  ↳ [System](system.md)

  ↳ **UISystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](uisystem.md#constructor)

### Properties

* [entities](uisystem.md#protected-entities)
* [messageBus](uisystem.md#protected-messagebus)
* [scene](uisystem.md#protected-optional-scene)
* [subscriberID](uisystem.md#subscriberid)
* [MESSAGE_DEREGISTER](uisystem.md#static-message_deregister)
* [MESSAGE_REGISTER](uisystem.md#static-message_register)
* [MESSAGE_UPDATE](uisystem.md#static-message_update)

### Methods

* [Destroy](uisystem.md#destroy)
* [OnDestroy](uisystem.md#protected-ondestroy)
* [OnMessage](uisystem.md#onmessage)
* [Update](uisystem.md#protected-update)
* [prepareUI](uisystem.md#private-prepareui)
* [EVALUATOR](uisystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new UISystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `__namedParameters`: object): *[UISystem](uisystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

▪ **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

▪`Default value`  **__namedParameters**: *object*= { scene: undefined, entities: new Map(), subscriberID: undefined }

Name | Type |
------ | ------ |
`entities` | Map‹number, [SystemEntity](systementity.md)‹›› |
`scene` | undefined &#124; [IScene](../interfaces/iscene.md) |
`subscriberID` | undefined &#124; number |

**Returns:** *[UISystem](uisystem.md)*

## Properties

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

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

### `Protected` OnDestroy

▸ **OnDestroy**(): *void*

*Inherited from [System](system.md).[OnDestroy](system.md#protected-ondestroy)*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/imessage.md)): *void*

*Overrides [System](system.md).[OnMessage](system.md#onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/imessage.md) |

**Returns:** *void*

___

### `Protected` Update

▸ **Update**(`dt`: number): *void*

*Inherited from [System](system.md).[Update](system.md#protected-update)*

General update method, default empty. Override with custom logic.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dt` | number | DeltaTime  |

**Returns:** *void*

___

### `Private` prepareUI

▸ **prepareUI**(`alpha`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`alpha` | number |

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
