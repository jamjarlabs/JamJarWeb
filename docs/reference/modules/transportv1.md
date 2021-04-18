# Namespace: TransportV1

## Table of contents

### Enumerations

- [Payload\_FlagType](../enums/transportv1.payload_flagtype.md)

### Interfaces

- [Error](../interfaces/transportv1.error.md)
- [Payload](../interfaces/transportv1.payload.md)

### Type aliases

- [DeepPartial](transportv1.md#deeppartial)

### Variables

- [Error](transportv1.md#error)
- [Payload](transportv1.md#payload)
- [protobufPackage](transportv1.md#protobufpackage)

### Functions

- [payload\_FlagTypeFromJSON](transportv1.md#payload_flagtypefromjson)
- [payload\_FlagTypeToJSON](transportv1.md#payload_flagtypetojson)

## Type aliases

### DeepPartial

Ƭ **DeepPartial**<T\>: T *extends* Builtin ? T : T *extends* *infer* U[] ? [*DeepPartial*](transportv1.md#deeppartial)<U\>[] : T *extends* *ReadonlyArray*<*infer* U\> ? *ReadonlyArray*<[*DeepPartial*](transportv1.md#deeppartial)<U\>\> : T *extends* {} ? { [K in keyof T]?: DeepPartial<T[K]\>} : *Partial*<T\>

#### Type parameters:

Name |
:------ |
`T` |

## Variables

### Error

• **Error**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*Error*](transportv1.md#error) |
`encode` | (`message`: [*Error*](transportv1.md#error), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*Error*](transportv1.md#error) |
`fromPartial` | (`object`: { `Code`: *undefined* \| *number* ; `message`: *undefined* \| *string*  }) => [*Error*](transportv1.md#error) |
`toJSON` | (`message`: [*Error*](transportv1.md#error)) => *unknown* |

___

### Payload

• **Payload**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*Payload*](transportv1.md#payload) |
`encode` | (`message`: [*Payload*](transportv1.md#payload), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*Payload*](transportv1.md#payload) |
`fromPartial` | (`object`: { `Data`: *undefined* \| *Uint8Array* ; `Flag`: *undefined* \| [*REQUEST\_RELAY\_MESSAGE*](../enums/transportv1.payload_flagtype.md#request_relay_message) \| [*REQUEST\_CONNECT*](../enums/transportv1.payload_flagtype.md#request_connect) \| [*REQUEST\_RECONNECT*](../enums/transportv1.payload_flagtype.md#request_reconnect) \| [*REQUEST\_LIST*](../enums/transportv1.payload_flagtype.md#request_list) \| [*REQUEST\_KICK*](../enums/transportv1.payload_flagtype.md#request_kick) \| [*REQUEST\_GRANT\_HOST*](../enums/transportv1.payload_flagtype.md#request_grant_host) \| [*RESPONSE\_RELAY\_MESSAGE*](../enums/transportv1.payload_flagtype.md#response_relay_message) \| [*RESPONSE\_CONNECT*](../enums/transportv1.payload_flagtype.md#response_connect) \| [*RESPONSE\_ASSIGN\_HOST*](../enums/transportv1.payload_flagtype.md#response_assign_host) \| [*RESPONSE\_BEGIN\_HOST\_MIGRATE*](../enums/transportv1.payload_flagtype.md#response_begin_host_migrate) \| [*RESPONSE\_FINISH\_HOST\_MIGRATE*](../enums/transportv1.payload_flagtype.md#response_finish_host_migrate) \| [*RESPONSE\_LIST*](../enums/transportv1.payload_flagtype.md#response_list) \| [*RESPONSE\_KICK*](../enums/transportv1.payload_flagtype.md#response_kick) \| [*RESPONSE\_ERROR*](../enums/transportv1.payload_flagtype.md#response_error) \| [*RESPONSE\_CLIENT\_CONNECT*](../enums/transportv1.payload_flagtype.md#response_client_connect) \| [*RESPONSE\_CLIENT\_DISCONNECT*](../enums/transportv1.payload_flagtype.md#response_client_disconnect) \| [*UNRECOGNIZED*](../enums/transportv1.payload_flagtype.md#unrecognized)  }) => [*Payload*](transportv1.md#payload) |
`toJSON` | (`message`: [*Payload*](transportv1.md#payload)) => *unknown* |

___

### protobufPackage

• `Const` **protobufPackage**: *v1_transport*= "v1\_transport"

## Functions

### payload\_FlagTypeFromJSON

▸ **payload_FlagTypeFromJSON**(`object`: *any*): [*Payload\_FlagType*](../enums/transportv1.payload_flagtype.md)

#### Parameters:

Name | Type |
:------ | :------ |
`object` | *any* |

**Returns:** [*Payload\_FlagType*](../enums/transportv1.payload_flagtype.md)

___

### payload\_FlagTypeToJSON

▸ **payload_FlagTypeToJSON**(`object`: [*Payload\_FlagType*](../enums/transportv1.payload_flagtype.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`object` | [*Payload\_FlagType*](../enums/transportv1.payload_flagtype.md) |

**Returns:** *string*
