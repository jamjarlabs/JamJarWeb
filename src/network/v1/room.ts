/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "v1_room";

export interface KickRequest {
    ClientID: number;
}

export interface GrantHostRequest {
    HostID: number;
}

export interface JoinRoomRequest {
    RoomID: number;
    RoomSecret: number;
}

export interface RejoinRoomRequest {
    RoomID: number;
    RoomSecret: number;
    ClientID: number;
    ClientSecret: number;
}

export interface FinishHostMigrationResponse {
    HostID: number;
}

export interface KickResponse {
    ClientID: number;
}

const baseKickRequest: object = { ClientID: 0 };

export const KickRequest = {
    encode(message: KickRequest, writer: Writer = Writer.create()): Writer {
        if (message.ClientID !== 0) {
            writer.uint32(8).int32(message.ClientID);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): KickRequest {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKickRequest } as KickRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ClientID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KickRequest {
        const message = { ...baseKickRequest } as KickRequest;
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = Number(object.ClientID);
        } else {
            message.ClientID = 0;
        }
        return message;
    },

    toJSON(message: KickRequest): unknown {
        const obj: any = {};
        message.ClientID !== undefined && (obj.ClientID = message.ClientID);
        return obj;
    },

    fromPartial(object: DeepPartial<KickRequest>): KickRequest {
        const message = { ...baseKickRequest } as KickRequest;
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = object.ClientID;
        } else {
            message.ClientID = 0;
        }
        return message;
    },
};

const baseGrantHostRequest: object = { HostID: 0 };

export const GrantHostRequest = {
    encode(message: GrantHostRequest, writer: Writer = Writer.create()): Writer {
        if (message.HostID !== 0) {
            writer.uint32(8).int32(message.HostID);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): GrantHostRequest {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGrantHostRequest } as GrantHostRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.HostID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): GrantHostRequest {
        const message = { ...baseGrantHostRequest } as GrantHostRequest;
        if (object.HostID !== undefined && object.HostID !== null) {
            message.HostID = Number(object.HostID);
        } else {
            message.HostID = 0;
        }
        return message;
    },

    toJSON(message: GrantHostRequest): unknown {
        const obj: any = {};
        message.HostID !== undefined && (obj.HostID = message.HostID);
        return obj;
    },

    fromPartial(object: DeepPartial<GrantHostRequest>): GrantHostRequest {
        const message = { ...baseGrantHostRequest } as GrantHostRequest;
        if (object.HostID !== undefined && object.HostID !== null) {
            message.HostID = object.HostID;
        } else {
            message.HostID = 0;
        }
        return message;
    },
};

const baseJoinRoomRequest: object = { RoomID: 0, RoomSecret: 0 };

export const JoinRoomRequest = {
    encode(message: JoinRoomRequest, writer: Writer = Writer.create()): Writer {
        if (message.RoomID !== 0) {
            writer.uint32(8).int32(message.RoomID);
        }
        if (message.RoomSecret !== 0) {
            writer.uint32(16).int32(message.RoomSecret);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): JoinRoomRequest {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseJoinRoomRequest } as JoinRoomRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.RoomID = reader.int32();
                    break;
                case 2:
                    message.RoomSecret = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): JoinRoomRequest {
        const message = { ...baseJoinRoomRequest } as JoinRoomRequest;
        if (object.RoomID !== undefined && object.RoomID !== null) {
            message.RoomID = Number(object.RoomID);
        } else {
            message.RoomID = 0;
        }
        if (object.RoomSecret !== undefined && object.RoomSecret !== null) {
            message.RoomSecret = Number(object.RoomSecret);
        } else {
            message.RoomSecret = 0;
        }
        return message;
    },

    toJSON(message: JoinRoomRequest): unknown {
        const obj: any = {};
        message.RoomID !== undefined && (obj.RoomID = message.RoomID);
        message.RoomSecret !== undefined && (obj.RoomSecret = message.RoomSecret);
        return obj;
    },

    fromPartial(object: DeepPartial<JoinRoomRequest>): JoinRoomRequest {
        const message = { ...baseJoinRoomRequest } as JoinRoomRequest;
        if (object.RoomID !== undefined && object.RoomID !== null) {
            message.RoomID = object.RoomID;
        } else {
            message.RoomID = 0;
        }
        if (object.RoomSecret !== undefined && object.RoomSecret !== null) {
            message.RoomSecret = object.RoomSecret;
        } else {
            message.RoomSecret = 0;
        }
        return message;
    },
};

const baseRejoinRoomRequest: object = { RoomID: 0, RoomSecret: 0, ClientID: 0, ClientSecret: 0 };

export const RejoinRoomRequest = {
    encode(message: RejoinRoomRequest, writer: Writer = Writer.create()): Writer {
        if (message.RoomID !== 0) {
            writer.uint32(8).int32(message.RoomID);
        }
        if (message.RoomSecret !== 0) {
            writer.uint32(16).int32(message.RoomSecret);
        }
        if (message.ClientID !== 0) {
            writer.uint32(24).int32(message.ClientID);
        }
        if (message.ClientSecret !== 0) {
            writer.uint32(32).int32(message.ClientSecret);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): RejoinRoomRequest {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRejoinRoomRequest } as RejoinRoomRequest;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.RoomID = reader.int32();
                    break;
                case 2:
                    message.RoomSecret = reader.int32();
                    break;
                case 3:
                    message.ClientID = reader.int32();
                    break;
                case 4:
                    message.ClientSecret = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): RejoinRoomRequest {
        const message = { ...baseRejoinRoomRequest } as RejoinRoomRequest;
        if (object.RoomID !== undefined && object.RoomID !== null) {
            message.RoomID = Number(object.RoomID);
        } else {
            message.RoomID = 0;
        }
        if (object.RoomSecret !== undefined && object.RoomSecret !== null) {
            message.RoomSecret = Number(object.RoomSecret);
        } else {
            message.RoomSecret = 0;
        }
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = Number(object.ClientID);
        } else {
            message.ClientID = 0;
        }
        if (object.ClientSecret !== undefined && object.ClientSecret !== null) {
            message.ClientSecret = Number(object.ClientSecret);
        } else {
            message.ClientSecret = 0;
        }
        return message;
    },

    toJSON(message: RejoinRoomRequest): unknown {
        const obj: any = {};
        message.RoomID !== undefined && (obj.RoomID = message.RoomID);
        message.RoomSecret !== undefined && (obj.RoomSecret = message.RoomSecret);
        message.ClientID !== undefined && (obj.ClientID = message.ClientID);
        message.ClientSecret !== undefined && (obj.ClientSecret = message.ClientSecret);
        return obj;
    },

    fromPartial(object: DeepPartial<RejoinRoomRequest>): RejoinRoomRequest {
        const message = { ...baseRejoinRoomRequest } as RejoinRoomRequest;
        if (object.RoomID !== undefined && object.RoomID !== null) {
            message.RoomID = object.RoomID;
        } else {
            message.RoomID = 0;
        }
        if (object.RoomSecret !== undefined && object.RoomSecret !== null) {
            message.RoomSecret = object.RoomSecret;
        } else {
            message.RoomSecret = 0;
        }
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = object.ClientID;
        } else {
            message.ClientID = 0;
        }
        if (object.ClientSecret !== undefined && object.ClientSecret !== null) {
            message.ClientSecret = object.ClientSecret;
        } else {
            message.ClientSecret = 0;
        }
        return message;
    },
};

const baseFinishHostMigrationResponse: object = { HostID: 0 };

export const FinishHostMigrationResponse = {
    encode(message: FinishHostMigrationResponse, writer: Writer = Writer.create()): Writer {
        if (message.HostID !== 0) {
            writer.uint32(8).int32(message.HostID);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): FinishHostMigrationResponse {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseFinishHostMigrationResponse } as FinishHostMigrationResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.HostID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): FinishHostMigrationResponse {
        const message = { ...baseFinishHostMigrationResponse } as FinishHostMigrationResponse;
        if (object.HostID !== undefined && object.HostID !== null) {
            message.HostID = Number(object.HostID);
        } else {
            message.HostID = 0;
        }
        return message;
    },

    toJSON(message: FinishHostMigrationResponse): unknown {
        const obj: any = {};
        message.HostID !== undefined && (obj.HostID = message.HostID);
        return obj;
    },

    fromPartial(object: DeepPartial<FinishHostMigrationResponse>): FinishHostMigrationResponse {
        const message = { ...baseFinishHostMigrationResponse } as FinishHostMigrationResponse;
        if (object.HostID !== undefined && object.HostID !== null) {
            message.HostID = object.HostID;
        } else {
            message.HostID = 0;
        }
        return message;
    },
};

const baseKickResponse: object = { ClientID: 0 };

export const KickResponse = {
    encode(message: KickResponse, writer: Writer = Writer.create()): Writer {
        if (message.ClientID !== 0) {
            writer.uint32(8).int32(message.ClientID);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): KickResponse {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseKickResponse } as KickResponse;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ClientID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): KickResponse {
        const message = { ...baseKickResponse } as KickResponse;
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = Number(object.ClientID);
        } else {
            message.ClientID = 0;
        }
        return message;
    },

    toJSON(message: KickResponse): unknown {
        const obj: any = {};
        message.ClientID !== undefined && (obj.ClientID = message.ClientID);
        return obj;
    },

    fromPartial(object: DeepPartial<KickResponse>): KickResponse {
        const message = { ...baseKickResponse } as KickResponse;
        if (object.ClientID !== undefined && object.ClientID !== null) {
            message.ClientID = object.ClientID;
        } else {
            message.ClientID = 0;
        }
        return message;
    },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>;
