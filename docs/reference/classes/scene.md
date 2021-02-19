# Class: Scene

Scene is a way to categorise entities, components and systems together, allowing them to be loaded/deleted
together.

## Hierarchy

* [*Subscriber*](subscriber.md)

  ↳ **Scene**

## Implements

* [*IScene*](../interfaces/iscene.md)

## Table of contents

### Constructors

- [constructor](scene.md#constructor)

### Properties

- [id](scene.md#id)
- [messageBus](scene.md#messagebus)
- [subscriberID](scene.md#subscriberid)
- [MESSAGE\_DESTROY](scene.md#message_destroy)
- [MESSAGE\_ON\_START](scene.md#message_on_start)

### Methods

- [AddEntity](scene.md#addentity)
- [Destroy](scene.md#destroy)
- [OnMessage](scene.md#onmessage)
- [OnStart](scene.md#onstart)
- [Start](scene.md#start)

## Constructors

### constructor

\+ **new Scene**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `entities?`: [*IEntity*](../interfaces/ientity.md)[]): [*Scene*](scene.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`entities` | [*IEntity*](../interfaces/ientity.md)[] |

**Returns:** [*Scene*](scene.md)

Inherited from: [Subscriber](subscriber.md)

## Properties

### id

• **id**: *number*

Implementation of: [IScene](../interfaces/iscene.md).[id](../interfaces/iscene.md#id)

___

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [Subscriber](subscriber.md).[subscriberID](subscriber.md#subscriberid)

___

### MESSAGE\_DESTROY

▪ `Readonly` `Static` **MESSAGE\_DESTROY**: *scene_destroy*= "scene\_destroy"

___

### MESSAGE\_ON\_START

▪ `Readonly` `Static` **MESSAGE\_ON\_START**: *scene_on_start*= "scene\_on\_start"

## Methods

### AddEntity

▸ **AddEntity**(`entity`: [*IEntity*](../interfaces/ientity.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`entity` | [*IEntity*](../interfaces/ientity.md) |

**Returns:** *void*

___

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the scene, alongside all linked entities, components and systems.

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

### OnStart

▸ `Protected`**OnStart**(): *void*

OnStart is triggered on scene start.

**Returns:** *void*

___

### Start

▸ **Start**(): *void*

Start starts this scene

**Returns:** *void*
