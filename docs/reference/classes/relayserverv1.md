# Class: RelayServerV1

## Hierarchy

* [*System*](system.md)

  ↳ **RelayServerV1**

## Table of contents

### Constructors

- [constructor](relayserverv1.md#constructor)

### Properties

- [messageBus](relayserverv1.md#messagebus)
- [scene](relayserverv1.md#scene)
- [subscriberID](relayserverv1.md#subscriberid)
- [MESSAGE\_UPDATE](relayserverv1.md#message_update)
- [REQUEST\_ROOM](relayserverv1.md#request_room)
- [REQUEST\_ROOM\_FAILURE](relayserverv1.md#request_room_failure)
- [REQUEST\_ROOM\_SUCCESS](relayserverv1.md#request_room_success)
- [SET\_URL](relayserverv1.md#set_url)

### Methods

- [Destroy](relayserverv1.md#destroy)
- [OnDestroy](relayserverv1.md#ondestroy)
- [OnMessage](relayserverv1.md#onmessage)
- [Update](relayserverv1.md#update)
- [httpError](relayserverv1.md#httperror)

## Constructors

### constructor

\+ **new RelayServerV1**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `url?`: *string*, `requestOptions?`: RequestInit, `scene?`: [*IScene*](../interfaces/iscene.md), `subscriberID?`: *number*, `successResponses?`: [*RelayServerRoomResponseV1*](../interfaces/relayserverroomresponsev1.md)[], `errorResponses?`: Error[]): [*RelayServerV1*](relayserverv1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`url?` | *string* |
`requestOptions?` | RequestInit |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`subscriberID?` | *number* |
`successResponses` | [*RelayServerRoomResponseV1*](../interfaces/relayserverroomresponsev1.md)[] |
`errorResponses` | Error[] |

**Returns:** [*RelayServerV1*](relayserverv1.md)

Inherited from: [System](system.md)

## Properties

### messageBus

• `Protected` **messageBus**: [*IMessageBus*](../interfaces/imessagebus.md)

Reference to the message bus, the fundamental piece of JamJar
for communicating with other parts of the engine.

Inherited from: [System](system.md).[messageBus](system.md#messagebus)

___

### scene

• `Protected` `Optional` **scene**: *undefined* \| [*IScene*](../interfaces/iscene.md)

Any scene this system is part of, will change the lifecycle of the
system to be part of the scene's lifecycle - it will be destroyed
when the scene is destroyed.

Inherited from: [System](system.md).[scene](system.md#scene)

___

### subscriberID

• **subscriberID**: *number*

Inherited from: [System](system.md).[subscriberID](system.md#subscriberid)

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [System](system.md).[MESSAGE_UPDATE](system.md#message_update)

___

### REQUEST\_ROOM

▪ `Readonly` `Static` **REQUEST\_ROOM**: *jamjar_relay_server_request_room*= "jamjar\_relay\_server\_request\_room"

___

### REQUEST\_ROOM\_FAILURE

▪ `Readonly` `Static` **REQUEST\_ROOM\_FAILURE**: *jamjar_relay_server_request_room_failure*= "jamjar\_relay\_server\_request\_room\_failure"

___

### REQUEST\_ROOM\_SUCCESS

▪ `Readonly` `Static` **REQUEST\_ROOM\_SUCCESS**: *jamjar_relay_server_request_room_success*= "jamjar\_relay\_server\_request\_room\_success"

___

### SET\_URL

▪ `Readonly` `Static` **SET\_URL**: *jamjar_relay_server_set_url*= "jamjar\_relay\_server\_set\_url"

## Methods

### Destroy

▸ **Destroy**(): *void*

Destroy destroys the System and unsubscribes it from all messages.
The System should be garbage collected after this, unless a direct
reference to it exists somewhere. Therefore direct references to
systems are discouraged; communication should all be through the
message bus.

**Returns:** *void*

Inherited from: [System](system.md)

___

### OnDestroy

▸ `Protected`**OnDestroy**(): *void*

Custom Destroy logic should go here to facilitate garbage collection, for example
removing listeners.

**Returns:** *void*

Inherited from: [System](system.md)

___

### OnMessage

▸ **OnMessage**(`message`: [*IMessage*](../interfaces/imessage.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`message` | [*IMessage*](../interfaces/imessage.md) |

**Returns:** *void*

Overrides: [System](system.md)

___

### Update

▸ **Update**(): *void*

**Returns:** *void*

Overrides: [System](system.md)

___

### httpError

▸ `Protected`**httpError**(`error`: Error): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`error` | Error |

**Returns:** *void*
