# Namespace: RelayV1

## Table of contents

### Enumerations

- [Relay\_RelayType](../enums/relayv1.relay_relaytype.md)

### Interfaces

- [Relay](../interfaces/relayv1.relay.md)

### Type aliases

- [DeepPartial](relayv1.md#deeppartial)

### Variables

- [Relay](relayv1.md#relay)
- [protobufPackage](relayv1.md#protobufpackage)

### Functions

- [relay\_RelayTypeFromJSON](relayv1.md#relay_relaytypefromjson)
- [relay\_RelayTypeToJSON](relayv1.md#relay_relaytypetojson)

## Type aliases

### DeepPartial

Ƭ **DeepPartial**<T\>: T *extends* Builtin ? T : T *extends* *infer* U[] ? [*DeepPartial*](relayv1.md#deeppartial)<U\>[] : T *extends* *ReadonlyArray*<*infer* U\> ? *ReadonlyArray*<[*DeepPartial*](relayv1.md#deeppartial)<U\>\> : T *extends* {} ? { [K in keyof T]?: DeepPartial<T[K]\>} : *Partial*<T\>

#### Type parameters:

Name |
:------ |
`T` |

## Variables

### Relay

• **Relay**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*Relay*](relayv1.md#relay) |
`encode` | (`message`: [*Relay*](relayv1.md#relay), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*Relay*](relayv1.md#relay) |
`fromPartial` | (`object`: { `Data`: *undefined* \| *Uint8Array* ; `Target?`: *undefined* \| *number* ; `Type`: *undefined* \| [*BROADCAST*](../enums/relayv1.relay_relaytype.md#broadcast) \| [*TARGET*](../enums/relayv1.relay_relaytype.md#target) \| [*HOST*](../enums/relayv1.relay_relaytype.md#host) \| [*UNRECOGNIZED*](../enums/relayv1.relay_relaytype.md#unrecognized)  }) => [*Relay*](relayv1.md#relay) |
`toJSON` | (`message`: [*Relay*](relayv1.md#relay)) => *unknown* |

___

### protobufPackage

• `Const` **protobufPackage**: *v1_relay*= "v1\_relay"

## Functions

### relay\_RelayTypeFromJSON

▸ **relay_RelayTypeFromJSON**(`object`: *any*): [*Relay\_RelayType*](../enums/relayv1.relay_relaytype.md)

#### Parameters:

Name | Type |
:------ | :------ |
`object` | *any* |

**Returns:** [*Relay\_RelayType*](../enums/relayv1.relay_relaytype.md)

___

### relay\_RelayTypeToJSON

▸ **relay_RelayTypeToJSON**(`object`: [*Relay\_RelayType*](../enums/relayv1.relay_relaytype.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`object` | [*Relay\_RelayType*](../enums/relayv1.relay_relaytype.md) |

**Returns:** *string*
