# Namespace: ClientV1

## Table of contents

### Interfaces

- [Client](../interfaces/clientv1.client.md)
- [ClientList](../interfaces/clientv1.clientlist.md)
- [SanitisedClient](../interfaces/clientv1.sanitisedclient.md)

### Type aliases

- [DeepPartial](clientv1.md#deeppartial)

### Variables

- [Client](clientv1.md#client)
- [ClientList](clientv1.md#clientlist)
- [SanitisedClient](clientv1.md#sanitisedclient)
- [protobufPackage](clientv1.md#protobufpackage)

## Type aliases

### DeepPartial

Ƭ **DeepPartial**<T\>: T *extends* Builtin ? T : T *extends* *infer* U[] ? [*DeepPartial*](clientv1.md#deeppartial)<U\>[] : T *extends* *ReadonlyArray*<*infer* U\> ? *ReadonlyArray*<[*DeepPartial*](clientv1.md#deeppartial)<U\>\> : T *extends* {} ? { [K in keyof T]?: DeepPartial<T[K]\>} : *Partial*<T\>

#### Type parameters:

Name |
:------ |
`T` |

## Variables

### Client

• **Client**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*Client*](clientv1.md#client) |
`encode` | (`message`: [*Client*](clientv1.md#client), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*Client*](clientv1.md#client) |
`fromPartial` | (`object`: { `ID`: *undefined* \| *number* ; `Secret`: *undefined* \| *number*  }) => [*Client*](clientv1.md#client) |
`toJSON` | (`message`: [*Client*](clientv1.md#client)) => *unknown* |

___

### ClientList

• **ClientList**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*ClientList*](clientv1.md#clientlist) |
`encode` | (`message`: [*ClientList*](clientv1.md#clientlist), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*ClientList*](clientv1.md#clientlist) |
`fromPartial` | (`object`: { `List`: *undefined* \| { ID?: number \| undefined; Host?: boolean \| undefined; }[]  }) => [*ClientList*](clientv1.md#clientlist) |
`toJSON` | (`message`: [*ClientList*](clientv1.md#clientlist)) => *unknown* |

___

### SanitisedClient

• **SanitisedClient**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*SanitisedClient*](clientv1.md#sanitisedclient) |
`encode` | (`message`: [*SanitisedClient*](clientv1.md#sanitisedclient), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*SanitisedClient*](clientv1.md#sanitisedclient) |
`fromPartial` | (`object`: { `Host`: *undefined* \| *boolean* ; `ID`: *undefined* \| *number*  }) => [*SanitisedClient*](clientv1.md#sanitisedclient) |
`toJSON` | (`message`: [*SanitisedClient*](clientv1.md#sanitisedclient)) => *unknown* |

___

### protobufPackage

• `Const` **protobufPackage**: *v1_client*= "v1\_client"
