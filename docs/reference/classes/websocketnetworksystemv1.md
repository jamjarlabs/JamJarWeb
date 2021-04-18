# Class: WebSocketNetworkSystemV1

## Hierarchy

* [*System*](system.md)

  ↳ **WebSocketNetworkSystemV1**

## Table of contents

### Constructors

- [constructor](websocketnetworksystemv1.md#constructor)

### Properties

- [messageBus](websocketnetworksystemv1.md#messagebus)
- [scene](websocketnetworksystemv1.md#scene)
- [subscriberID](websocketnetworksystemv1.md#subscriberid)
- [CONNECTION\_ESTABLISHED](websocketnetworksystemv1.md#connection_established)
- [DISCONNECTED](websocketnetworksystemv1.md#disconnected)
- [MESSAGE\_UPDATE](websocketnetworksystemv1.md#message_update)
- [REQUEST\_CONNECT](websocketnetworksystemv1.md#request_connect)
- [REQUEST\_GRANT\_HOST](websocketnetworksystemv1.md#request_grant_host)
- [REQUEST\_KICK](websocketnetworksystemv1.md#request_kick)
- [REQUEST\_LIST](websocketnetworksystemv1.md#request_list)
- [REQUEST\_RECONNECT](websocketnetworksystemv1.md#request_reconnect)
- [REQUEST\_RELAY\_MESSAGE](websocketnetworksystemv1.md#request_relay_message)
- [RESPONSE\_ASSIGN\_HOST](websocketnetworksystemv1.md#response_assign_host)
- [RESPONSE\_BEGIN\_HOST\_MIGRATE](websocketnetworksystemv1.md#response_begin_host_migrate)
- [RESPONSE\_CLIENT\_CONNECT](websocketnetworksystemv1.md#response_client_connect)
- [RESPONSE\_CLIENT\_DISCONNECT](websocketnetworksystemv1.md#response_client_disconnect)
- [RESPONSE\_CONNECT](websocketnetworksystemv1.md#response_connect)
- [RESPONSE\_ERROR](websocketnetworksystemv1.md#response_error)
- [RESPONSE\_FINISH\_HOST\_MIGRATE](websocketnetworksystemv1.md#response_finish_host_migrate)
- [RESPONSE\_KICK](websocketnetworksystemv1.md#response_kick)
- [RESPONSE\_LIST](websocketnetworksystemv1.md#response_list)
- [RESPONSE\_RELAY\_MESSAGE](websocketnetworksystemv1.md#response_relay_message)
- [SET\_PROTOCOLS](websocketnetworksystemv1.md#set_protocols)
- [SET\_URL](websocketnetworksystemv1.md#set_url)

### Methods

- [Destroy](websocketnetworksystemv1.md#destroy)
- [OnDestroy](websocketnetworksystemv1.md#ondestroy)
- [OnMessage](websocketnetworksystemv1.md#onmessage)
- [Update](websocketnetworksystemv1.md#update)
- [onClose](websocketnetworksystemv1.md#onclose)
- [onNetworkMessage](websocketnetworksystemv1.md#onnetworkmessage)
- [onOpen](websocketnetworksystemv1.md#onopen)
- [onPageClose](websocketnetworksystemv1.md#onpageclose)

## Constructors

### constructor

\+ **new WebSocketNetworkSystemV1**(`messageBus`: [*IMessageBus*](../interfaces/imessagebus.md), `url?`: *string*, `protocols?`: *string* \| *string*[], `scene?`: [*IScene*](../interfaces/iscene.md), `tickRate?`: *number*, `subscriberID?`: *number*, `pageWindow?`: Window): [*WebSocketNetworkSystemV1*](websocketnetworksystemv1.md)

#### Parameters:

Name | Type |
:------ | :------ |
`messageBus` | [*IMessageBus*](../interfaces/imessagebus.md) |
`url?` | *string* |
`protocols?` | *string* \| *string*[] |
`scene?` | [*IScene*](../interfaces/iscene.md) |
`tickRate` | *number* |
`subscriberID?` | *number* |
`pageWindow` | Window |

**Returns:** [*WebSocketNetworkSystemV1*](websocketnetworksystemv1.md)

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

### CONNECTION\_ESTABLISHED

▪ `Readonly` `Static` **CONNECTION\_ESTABLISHED**: *jamjar_websocket_connection_established*= "jamjar\_websocket\_connection\_established"

___

### DISCONNECTED

▪ `Readonly` `Static` **DISCONNECTED**: *jamjar_websocket_disconnected*= "jamjar\_websocket\_disconnected"

___

### MESSAGE\_UPDATE

▪ `Readonly` `Static` **MESSAGE\_UPDATE**: *system_update*= "system\_update"

Inherited from: [System](system.md).[MESSAGE_UPDATE](system.md#message_update)

___

### REQUEST\_CONNECT

▪ `Readonly` `Static` **REQUEST\_CONNECT**: *jamjar_websocket_request_connect*= "jamjar\_websocket\_request\_connect"

___

### REQUEST\_GRANT\_HOST

▪ `Readonly` `Static` **REQUEST\_GRANT\_HOST**: *jamjar_websocket_request_grant_host*= "jamjar\_websocket\_request\_grant\_host"

___

### REQUEST\_KICK

▪ `Readonly` `Static` **REQUEST\_KICK**: *jamjar_websocket_request_kick*= "jamjar\_websocket\_request\_kick"

___

### REQUEST\_LIST

▪ `Readonly` `Static` **REQUEST\_LIST**: *jamjar_websocket_request_list*= "jamjar\_websocket\_request\_list"

___

### REQUEST\_RECONNECT

▪ `Readonly` `Static` **REQUEST\_RECONNECT**: *jamjar_websocket_request_reconnect*= "jamjar\_websocket\_request\_reconnect"

___

### REQUEST\_RELAY\_MESSAGE

▪ `Readonly` `Static` **REQUEST\_RELAY\_MESSAGE**: *jamjar_websocket_request_relay_message*= "jamjar\_websocket\_request\_relay\_message"

___

### RESPONSE\_ASSIGN\_HOST

▪ `Readonly` `Static` **RESPONSE\_ASSIGN\_HOST**: *jamjar_websocket_response_assign_host*= "jamjar\_websocket\_response\_assign\_host"

___

### RESPONSE\_BEGIN\_HOST\_MIGRATE

▪ `Readonly` `Static` **RESPONSE\_BEGIN\_HOST\_MIGRATE**: *jamjar_websocket_response_begin_host_migrate*= "jamjar\_websocket\_response\_begin\_host\_migrate"

___

### RESPONSE\_CLIENT\_CONNECT

▪ `Readonly` `Static` **RESPONSE\_CLIENT\_CONNECT**: *jamjar_websocket_response_client_connect*= "jamjar\_websocket\_response\_client\_connect"

___

### RESPONSE\_CLIENT\_DISCONNECT

▪ `Readonly` `Static` **RESPONSE\_CLIENT\_DISCONNECT**: *jamjar_websocket_response_client_disconnect*= "jamjar\_websocket\_response\_client\_disconnect"

___

### RESPONSE\_CONNECT

▪ `Readonly` `Static` **RESPONSE\_CONNECT**: *jamjar_websocket_response_connect*= "jamjar\_websocket\_response\_connect"

___

### RESPONSE\_ERROR

▪ `Readonly` `Static` **RESPONSE\_ERROR**: *jamjar_websocket_response_error*= "jamjar\_websocket\_response\_error"

___

### RESPONSE\_FINISH\_HOST\_MIGRATE

▪ `Readonly` `Static` **RESPONSE\_FINISH\_HOST\_MIGRATE**: *jamjar_websocket_response_finish_host_migrate*= "jamjar\_websocket\_response\_finish\_host\_migrate"

___

### RESPONSE\_KICK

▪ `Readonly` `Static` **RESPONSE\_KICK**: *jamjar_websocket_response_kick*= "jamjar\_websocket\_response\_kick"

___

### RESPONSE\_LIST

▪ `Readonly` `Static` **RESPONSE\_LIST**: *jamjar_websocket_response_list*= "jamjar\_websocket\_response\_list"

___

### RESPONSE\_RELAY\_MESSAGE

▪ `Readonly` `Static` **RESPONSE\_RELAY\_MESSAGE**: *jamjar_websocket_response_relay_message*= "jamjar\_websocket\_response\_relay\_message"

___

### SET\_PROTOCOLS

▪ `Readonly` `Static` **SET\_PROTOCOLS**: *jamjar_websocket_set_protocols*= "jamjar\_websocket\_set\_protocols"

___

### SET\_URL

▪ `Readonly` `Static` **SET\_URL**: *jamjar_websocket_set_url*= "jamjar\_websocket\_set\_url"

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

▸ **Update**(`deltaTime`: *number*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`deltaTime` | *number* |

**Returns:** *void*

Overrides: [System](system.md)

___

### onClose

▸ `Protected`**onClose**(`event`: CloseEvent): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | CloseEvent |

**Returns:** *void*

___

### onNetworkMessage

▸ `Protected`**onNetworkMessage**(`event`: *MessageEvent*<any\>): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | *MessageEvent*<any\> |

**Returns:** *void*

___

### onOpen

▸ `Protected`**onOpen**(`event`: Event): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`event` | Event |

**Returns:** *void*

___

### onPageClose

▸ `Protected`**onPageClose**(): *void*

**Returns:** *void*
