
# Class: SpriteSystem

SpriteSystem handles converting sprites into renderable objects that are fed into
a rendering system.

## Hierarchy

  ↳ [System](system.md)

  ↳ **SpriteSystem**

## Implements

* [ISubscriber](../interfaces/isubscriber.md)

## Index

### Constructors

* [constructor](spritesystem.md#constructor)

### Properties

* [entities](spritesystem.md#protected-entities)
* [frustumCuller](spritesystem.md#private-frustumculler)
* [messageBus](spritesystem.md#protected-messagebus)
* [renderables](spritesystem.md#private-renderables)
* [scene](spritesystem.md#protected-optional-scene)
* [subscriberID](spritesystem.md#subscriberid)
* [MESSAGE_DEREGISTER](spritesystem.md#static-message_deregister)
* [MESSAGE_REGISTER](spritesystem.md#static-message_register)
* [MESSAGE_UPDATE](spritesystem.md#static-message_update)

### Methods

* [Destroy](spritesystem.md#destroy)
* [OnDestroy](spritesystem.md#protected-ondestroy)
* [OnMessage](spritesystem.md#onmessage)
* [Update](spritesystem.md#protected-update)
* [freeRenderables](spritesystem.md#private-freerenderables)
* [prepareSprites](spritesystem.md#private-preparesprites)
* [EVALUATOR](spritesystem.md#static-private-evaluator)

## Constructors

###  constructor

\+ **new SpriteSystem**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `scene?`: [IScene](../interfaces/iscene.md), `frustumCuller`: [IFrustumCuller](../interfaces/ifrustumculler.md), `renderables`: Map‹number, [IRenderable](../interfaces/irenderable.md)[]›, `entities?`: Map‹number, [SystemEntity](systementity.md)›, `subscriberID?`: undefined | number): *[SpriteSystem](spritesystem.md)*

*Overrides [System](system.md).[constructor](system.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`scene?` | [IScene](../interfaces/iscene.md) | - |
`frustumCuller` | [IFrustumCuller](../interfaces/ifrustumculler.md) | new FrustumCuller() |
`renderables` | Map‹number, [IRenderable](../interfaces/irenderable.md)[]› | new Map() |
`entities?` | Map‹number, [SystemEntity](systementity.md)› | - |
`subscriberID?` | undefined &#124; number | - |

**Returns:** *[SpriteSystem](spritesystem.md)*

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

### `Private` frustumCuller

• **frustumCuller**: *[IFrustumCuller](../interfaces/ifrustumculler.md)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

*Inherited from [System](system.md).[messageBus](system.md#protected-messagebus)*

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

___

### `Private` renderables

• **renderables**: *Map‹number, [IRenderable](../interfaces/irenderable.md)[]›*

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

### `Private` freeRenderables

▸ **freeRenderables**(): *void*

**Returns:** *void*

___

### `Private` prepareSprites

▸ **prepareSprites**(`alpha`: number): *void*

**Parameters:**

Name | Type |
------ | ------ |
`alpha` | number |

**Returns:** *void*

___

### `Static` `Private` EVALUATOR

▸ **EVALUATOR**(`entity`: [IEntity](../interfaces/ientity.md), `components`: [Component](component.md)[]): *boolean*

Ensure is Sprite entity with Transform and Sprite, or Camera entity with
Transform and Camera

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |
`components` | [Component](component.md)[] |

**Returns:** *boolean*
