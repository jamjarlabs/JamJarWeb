# Namespace: RoomV1

## Table of contents

### Interfaces

- [FinishHostMigrationResponse](../interfaces/roomv1.finishhostmigrationresponse.md)
- [GrantHostRequest](../interfaces/roomv1.granthostrequest.md)
- [JoinRoomRequest](../interfaces/roomv1.joinroomrequest.md)
- [KickRequest](../interfaces/roomv1.kickrequest.md)
- [KickResponse](../interfaces/roomv1.kickresponse.md)
- [RejoinRoomRequest](../interfaces/roomv1.rejoinroomrequest.md)

### Type aliases

- [DeepPartial](roomv1.md#deeppartial)

### Variables

- [FinishHostMigrationResponse](roomv1.md#finishhostmigrationresponse)
- [GrantHostRequest](roomv1.md#granthostrequest)
- [JoinRoomRequest](roomv1.md#joinroomrequest)
- [KickRequest](roomv1.md#kickrequest)
- [KickResponse](roomv1.md#kickresponse)
- [RejoinRoomRequest](roomv1.md#rejoinroomrequest)
- [protobufPackage](roomv1.md#protobufpackage)

## Type aliases

### DeepPartial

Ƭ **DeepPartial**<T\>: T *extends* Builtin ? T : T *extends* *infer* U[] ? [*DeepPartial*](roomv1.md#deeppartial)<U\>[] : T *extends* *ReadonlyArray*<*infer* U\> ? *ReadonlyArray*<[*DeepPartial*](roomv1.md#deeppartial)<U\>\> : T *extends* {} ? { [K in keyof T]?: DeepPartial<T[K]\>} : *Partial*<T\>

#### Type parameters:

Name |
:------ |
`T` |

## Variables

### FinishHostMigrationResponse

• **FinishHostMigrationResponse**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*FinishHostMigrationResponse*](roomv1.md#finishhostmigrationresponse) |
`encode` | (`message`: [*FinishHostMigrationResponse*](roomv1.md#finishhostmigrationresponse), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*FinishHostMigrationResponse*](roomv1.md#finishhostmigrationresponse) |
`fromPartial` | (`object`: { `HostID`: *undefined* \| *number*  }) => [*FinishHostMigrationResponse*](roomv1.md#finishhostmigrationresponse) |
`toJSON` | (`message`: [*FinishHostMigrationResponse*](roomv1.md#finishhostmigrationresponse)) => *unknown* |

___

### GrantHostRequest

• **GrantHostRequest**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*GrantHostRequest*](roomv1.md#granthostrequest) |
`encode` | (`message`: [*GrantHostRequest*](roomv1.md#granthostrequest), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*GrantHostRequest*](roomv1.md#granthostrequest) |
`fromPartial` | (`object`: { `HostID`: *undefined* \| *number*  }) => [*GrantHostRequest*](roomv1.md#granthostrequest) |
`toJSON` | (`message`: [*GrantHostRequest*](roomv1.md#granthostrequest)) => *unknown* |

___

### JoinRoomRequest

• **JoinRoomRequest**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*JoinRoomRequest*](roomv1.md#joinroomrequest) |
`encode` | (`message`: [*JoinRoomRequest*](roomv1.md#joinroomrequest), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*JoinRoomRequest*](roomv1.md#joinroomrequest) |
`fromPartial` | (`object`: { `RoomID`: *undefined* \| *number* ; `RoomSecret`: *undefined* \| *number*  }) => [*JoinRoomRequest*](roomv1.md#joinroomrequest) |
`toJSON` | (`message`: [*JoinRoomRequest*](roomv1.md#joinroomrequest)) => *unknown* |

___

### KickRequest

• **KickRequest**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*KickRequest*](roomv1.md#kickrequest) |
`encode` | (`message`: [*KickRequest*](roomv1.md#kickrequest), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*KickRequest*](roomv1.md#kickrequest) |
`fromPartial` | (`object`: { `ClientID`: *undefined* \| *number*  }) => [*KickRequest*](roomv1.md#kickrequest) |
`toJSON` | (`message`: [*KickRequest*](roomv1.md#kickrequest)) => *unknown* |

___

### KickResponse

• **KickResponse**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*KickResponse*](roomv1.md#kickresponse) |
`encode` | (`message`: [*KickResponse*](roomv1.md#kickresponse), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*KickResponse*](roomv1.md#kickresponse) |
`fromPartial` | (`object`: { `ClientID`: *undefined* \| *number*  }) => [*KickResponse*](roomv1.md#kickresponse) |
`toJSON` | (`message`: [*KickResponse*](roomv1.md#kickresponse)) => *unknown* |

___

### RejoinRoomRequest

• **RejoinRoomRequest**: *object*

#### Type declaration:

Name | Type |
:------ | :------ |
`decode` | (`input`: *Uint8Array* \| *Reader*, `length?`: *number*) => [*RejoinRoomRequest*](roomv1.md#rejoinroomrequest) |
`encode` | (`message`: [*RejoinRoomRequest*](roomv1.md#rejoinroomrequest), `writer`: *Writer*) => *Writer* |
`fromJSON` | (`object`: *any*) => [*RejoinRoomRequest*](roomv1.md#rejoinroomrequest) |
`fromPartial` | (`object`: { `ClientID`: *undefined* \| *number* ; `ClientSecret`: *undefined* \| *number* ; `RoomID`: *undefined* \| *number* ; `RoomSecret`: *undefined* \| *number*  }) => [*RejoinRoomRequest*](roomv1.md#rejoinroomrequest) |
`toJSON` | (`message`: [*RejoinRoomRequest*](roomv1.md#rejoinroomrequest)) => *unknown* |

___

### protobufPackage

• `Const` **protobufPackage**: *v1_room*= "v1\_room"
