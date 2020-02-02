
# Class: Scene

Scene is a way to categorise entities, components and systems together, allowing them to be loaded/deleted
together.

## Hierarchy

* [Subscriber](_message_subscriber_.subscriber.md)

  ↳ **Scene**

  ↳ [TestScene](_scene_scene_test_.testscene.md)

## Implements

* [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md)
* [IScene](../interfaces/_scene_iscene_.iscene.md)

## Index

### Constructors

* [constructor](_scene_scene_.scene.md#constructor)

### Properties

* [entities](_scene_scene_.scene.md#private-entities)
* [id](_scene_scene_.scene.md#id)
* [messageBus](_scene_scene_.scene.md#protected-messagebus)
* [subscriberID](_scene_scene_.scene.md#subscriberid)
* [ID](_scene_scene_.scene.md#static-private-id)
* [MESSAGE_DESTROY](_scene_scene_.scene.md#static-message_destroy)
* [MESSAGE_ON_START](_scene_scene_.scene.md#static-message_on_start)

### Methods

* [AddEntity](_scene_scene_.scene.md#addentity)
* [Destroy](_scene_scene_.scene.md#destroy)
* [OnMessage](_scene_scene_.scene.md#onmessage)
* [OnStart](_scene_scene_.scene.md#protected-onstart)
* [Start](_scene_scene_.scene.md#start)

## Constructors

###  constructor

\+ **new Scene**(`messageBus`: [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md), `entities`: [IEntity](../interfaces/_entity_ientity_.ientity.md)[]): *[Scene](_scene_scene_.scene.md)*

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[constructor](_message_subscriber_.subscriber.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`messageBus` | [IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md) | - |
`entities` | [IEntity](../interfaces/_entity_ientity_.ientity.md)[] | [] |

**Returns:** *[Scene](_scene_scene_.scene.md)*

## Properties

### `Private` entities

• **entities**: *[IEntity](../interfaces/_entity_ientity_.ientity.md)[]*

___

###  id

• **id**: *number*

*Implementation of [IScene](../interfaces/_scene_iscene_.iscene.md).[id](../interfaces/_scene_iscene_.iscene.md#id)*

___

### `Protected` messageBus

• **messageBus**: *[IMessageBus](../interfaces/_message_imessage_bus_.imessagebus.md)*

___

###  subscriberID

• **subscriberID**: *number*

*Implementation of [ISubscriber](../interfaces/_message_isubscriber_.isubscriber.md).[subscriberID](../interfaces/_message_isubscriber_.isubscriber.md#subscriberid)*

*Inherited from [Subscriber](_message_subscriber_.subscriber.md).[subscriberID](_message_subscriber_.subscriber.md#subscriberid)*

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

▸ **AddEntity**(`entity`: [IEntity](../interfaces/_entity_ientity_.ientity.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`entity` | [IEntity](../interfaces/_entity_ientity_.ientity.md) |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

Destroy destroys the scene, alongside all linked entities, components and systems.

**Returns:** *void*

___

###  OnMessage

▸ **OnMessage**(`message`: [IMessage](../interfaces/_message_imessage_.imessage.md)): *void*

*Overrides [Subscriber](_message_subscriber_.subscriber.md).[OnMessage](_message_subscriber_.subscriber.md#abstract-onmessage)*

**Parameters:**

Name | Type |
------ | ------ |
`message` | [IMessage](../interfaces/_message_imessage_.imessage.md) |

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
