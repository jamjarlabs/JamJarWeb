
# Class: Scene

Scene is a way to categorise entities, components and systems together, allowing them to be loaded/deleted
together.

## Hierarchy

* [Subscriber](subscriber.md)

  ↳ **Scene**

  ↳ [TestScene](testscene.md)

## Implements

* [ISubscriber](../interfaces/isubscriber.md)
* [IScene](../interfaces/iscene.md)

## Index

### Constructors

* [constructor](scene.md#constructor)

### Properties

* [entities](scene.md#private-entities)
* [id](scene.md#id)
* [messageBus](scene.md#protected-messagebus)
* [subscriberID](scene.md#subscriberid)
* [ID](scene.md#static-private-id)
* [MESSAGE_DESTROY](scene.md#static-message_destroy)
* [MESSAGE_ON_START](scene.md#static-message_on_start)

### Methods

* [AddEntity](scene.md#addentity)
* [Destroy](scene.md#destroy)
* [OnMessage](scene.md#onmessage)
* [OnStart](scene.md#protected-onstart)
* [Start](scene.md#start)

## Constructors

###  constructor

\+ **new Scene**(`messageBus`: [IMessageBus](../interfaces/imessagebus.md), `entities`: [IEntity](../interfaces/ientity.md)[]): *[Scene](scene.md)*

*Overrides [Subscriber](subscriber.md).[constructor](subscriber.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/imessagebus.md) | - |
`entities` | [IEntity](../interfaces/ientity.md)[] | [] |

**Returns:** *[Scene](scene.md)*

## Properties

### `Private` entities

• **entities**: *[IEntity](../interfaces/ientity.md)[]*

___

###  id

• **id**: *number*

*Implementation of [IScene](../interfaces/iscene.md).[id](../interfaces/iscene.md#id)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/imessagebus.md)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/isubscriber.md).[subscriberID](../interfaces/isubscriber.md#subscriberid)*

*Inherited from [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)*

___

### `Static` `Private` ID

▪ **ID**: *number* = 0

___

### `Static` MESSAGE_DESTROY

▪ **MESSAGE_DESTROY**: *"scene_destroy"* = "scene_destroy"

___

### `Static` MESSAGE_ON_START

▪ **MESSAGE_ON_START**: *"scene_on_start"* = "scene_on_start"

## Methods

###  AddEntity

▸ **AddEntity**(`entity`: [IEntity](../interfaces/ientity.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/ientity.md) |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

Destroy destroys the scene, alongside all linked entities, components and systems.

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

### `Protected` OnStart

▸ **OnStart**(): *void*

OnStart is triggered on scene start.

**Returns:** *void*

___

###  Start

▸ **Start**(): *void*

Start starts this scene

**Returns:** *void*
