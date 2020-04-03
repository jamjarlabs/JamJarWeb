
# Class: TextSystem

## Hierarchy

  ↳ [System](system.md)

  ↳ **TextSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](textsystem.md#constructor)

### Properties

* [entities](textsystem.md#protected-entities)
* [mappings](textsystem.md#private-mappings)
* [messageBus](textsystem.md#protected-messagebus)
* [scene](textsystem.md#protected-optional-scene)
* [subscriberID](textsystem.md#subscriberid)
* [MESSAGE_DEREGISTER](textsystem.md#static-message_deregister)
* [MESSAGE_REGISTER](textsystem.md#static-message_register)
* [MESSAGE_REQUEST_CLEAR](textsystem.md#static-message_request_clear)
* [MESSAGE_REQUEST_FLUSH](textsystem.md#static-message_request_flush)
* [MESSAGE_UPDATE](textsystem.md#static-message_update)

### Methods

* [Destroy](textsystem.md#destroy)
* [OnDestroy](textsystem.md#protected-ondestroy)
* [OnMessage](textsystem.md#onmessage)
* [Update](textsystem.md#protected-update)
* [loadFont](textsystem.md#private-loadfont)
* [prepareText](textsystem.md#private-preparetext)
* [EVALUATOR](textsystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new TextSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `entities?`: Map‹number, [SystemEntity](systementity.md)›, `mappings`: Map‹string, [FontMapping](fontmapping.md)›, `subscriberID?`: undefined | number): *[TextSystem](textsystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`mappings` | Map‹string, [FontMapping](fontmapping.md)› | new Map() |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[TextSystem](textsystem.md)*

## Properties

### `Protected` entities

• **entities**: *Map‹number, [SystemEntity](systementity.md)›*

*Inherited from [System](system.md).[entities](system.md#protected-entities)*

A map of entities, mapped by their entity ID.
ID: Entity
0: PlayerEntity
1: ObstacleEntity
etc.

___

### `Private` mappings

• **mappings**: *Map‹string, [FontMapping](fontmapping.md)›*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Protected` `Optional` scene

• **scene**? : *[IScene](../interfaces/iscene.md)*

*Inherited from [System](system.md).[scene](system.md#protected-optional-scene)*

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

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

### `Static` MESSAGE_REQUEST_CLEAR

▪ **MESSAGE_REQUEST_CLEAR**: *"request_font_clear"* = "request_font_clear"

___

### `Static` MESSAGE_REQUEST_FLUSH

▪ **MESSAGE_REQUEST_FLUSH**: *"request_font_flush"* = "request_font_flush"

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

### `Private` loadFont

▸ **loadFont**(`asset`: [FontAsset](fontasset.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`asset` | [FontAsset](fontasset.md) |

**Returns:** *void*

___

### `Private` prepareText

▸ **prepareText**(`alpha`: number): *void*

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
