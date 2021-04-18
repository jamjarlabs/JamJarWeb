/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "v1_transport";

export interface Payload {
    Flag: Payload_FlagType;
    Data: Uint8Array;
}

export enum Payload_FlagType {
    REQUEST_RELAY_MESSAGE = 0,
    REQUEST_CONNECT = 1,
    REQUEST_RECONNECT = 2,
    REQUEST_LIST = 3,
    REQUEST_KICK = 4,
    REQUEST_GRANT_HOST = 5,
    RESPONSE_RELAY_MESSAGE = 6,
    RESPONSE_CONNECT = 7,
    RESPONSE_ASSIGN_HOST = 8,
    RESPONSE_BEGIN_HOST_MIGRATE = 9,
    RESPONSE_FINISH_HOST_MIGRATE = 10,
    RESPONSE_LIST = 11,
    RESPONSE_KICK = 12,
    RESPONSE_ERROR = 13,
    RESPONSE_CLIENT_CONNECT = 14,
    RESPONSE_CLIENT_DISCONNECT = 15,
    UNRECOGNIZED = -1,
}

export function payload_FlagTypeFromJSON(object: any): Payload_FlagType {
    switch (object) {
        case 0:
        case "REQUEST_RELAY_MESSAGE":
            return Payload_FlagType.REQUEST_RELAY_MESSAGE;
        case 1:
        case "REQUEST_CONNECT":
            return Payload_FlagType.REQUEST_CONNECT;
        case 2:
        case "REQUEST_RECONNECT":
            return Payload_FlagType.REQUEST_RECONNECT;
        case 3:
        case "REQUEST_LIST":
            return Payload_FlagType.REQUEST_LIST;
        case 4:
        case "REQUEST_KICK":
            return Payload_FlagType.REQUEST_KICK;
        case 5:
        case "REQUEST_GRANT_HOST":
            return Payload_FlagType.REQUEST_GRANT_HOST;
        case 6:
        case "RESPONSE_RELAY_MESSAGE":
            return Payload_FlagType.RESPONSE_RELAY_MESSAGE;
        case 7:
        case "RESPONSE_CONNECT":
            return Payload_FlagType.RESPONSE_CONNECT;
        case 8:
        case "RESPONSE_ASSIGN_HOST":
            return Payload_FlagType.RESPONSE_ASSIGN_HOST;
        case 9:
        case "RESPONSE_BEGIN_HOST_MIGRATE":
            return Payload_FlagType.RESPONSE_BEGIN_HOST_MIGRATE;
        case 10:
        case "RESPONSE_FINISH_HOST_MIGRATE":
            return Payload_FlagType.RESPONSE_FINISH_HOST_MIGRATE;
        case 11:
        case "RESPONSE_LIST":
            return Payload_FlagType.RESPONSE_LIST;
        case 12:
        case "RESPONSE_KICK":
            return Payload_FlagType.RESPONSE_KICK;
        case 13:
        case "RESPONSE_ERROR":
            return Payload_FlagType.RESPONSE_ERROR;
        case 14:
        case "RESPONSE_CLIENT_CONNECT":
            return Payload_FlagType.RESPONSE_CLIENT_CONNECT;
        case 15:
        case "RESPONSE_CLIENT_DISCONNECT":
            return Payload_FlagType.RESPONSE_CLIENT_DISCONNECT;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Payload_FlagType.UNRECOGNIZED;
    }
}

export function payload_FlagTypeToJSON(object: Payload_FlagType): string {
    switch (object) {
        case Payload_FlagType.REQUEST_RELAY_MESSAGE:
            return "REQUEST_RELAY_MESSAGE";
        case Payload_FlagType.REQUEST_CONNECT:
            return "REQUEST_CONNECT";
        case Payload_FlagType.REQUEST_RECONNECT:
            return "REQUEST_RECONNECT";
        case Payload_FlagType.REQUEST_LIST:
            return "REQUEST_LIST";
        case Payload_FlagType.REQUEST_KICK:
            return "REQUEST_KICK";
        case Payload_FlagType.REQUEST_GRANT_HOST:
            return "REQUEST_GRANT_HOST";
        case Payload_FlagType.RESPONSE_RELAY_MESSAGE:
            return "RESPONSE_RELAY_MESSAGE";
        case Payload_FlagType.RESPONSE_CONNECT:
            return "RESPONSE_CONNECT";
        case Payload_FlagType.RESPONSE_ASSIGN_HOST:
            return "RESPONSE_ASSIGN_HOST";
        case Payload_FlagType.RESPONSE_BEGIN_HOST_MIGRATE:
            return "RESPONSE_BEGIN_HOST_MIGRATE";
        case Payload_FlagType.RESPONSE_FINISH_HOST_MIGRATE:
            return "RESPONSE_FINISH_HOST_MIGRATE";
        case Payload_FlagType.RESPONSE_LIST:
            return "RESPONSE_LIST";
        case Payload_FlagType.RESPONSE_KICK:
            return "RESPONSE_KICK";
        case Payload_FlagType.RESPONSE_ERROR:
            return "RESPONSE_ERROR";
        case Payload_FlagType.RESPONSE_CLIENT_CONNECT:
            return "RESPONSE_CLIENT_CONNECT";
        case Payload_FlagType.RESPONSE_CLIENT_DISCONNECT:
            return "RESPONSE_CLIENT_DISCONNECT";
        default:
            return "UNKNOWN";
    }
}

export interface Error {
    Code: number;
    message: string;
}

const basePayload: object = { Flag: 0 };

export const Payload = {
    encode(message: Payload, writer: Writer = Writer.create()): Writer {
        if (message.Flag !== 0) {
            writer.uint32(8).int32(message.Flag);
        }
        if (message.Data.length !== 0) {
            writer.uint32(18).bytes(message.Data);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Payload {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePayload } as Payload;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Flag = reader.int32() as any;
                    break;
                case 2:
                    message.Data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Payload {
        const message = { ...basePayload } as Payload;
        if (object.Flag !== undefined && object.Flag !== null) {
            message.Flag = payload_FlagTypeFromJSON(object.Flag);
        } else {
            message.Flag = 0;
        }
        if (object.Data !== undefined && object.Data !== null) {
            message.Data = bytesFromBase64(object.Data);
        }
        return message;
    },

    toJSON(message: Payload): unknown {
        const obj: any = {};
        message.Flag !== undefined && (obj.Flag = payload_FlagTypeToJSON(message.Flag));
        message.Data !== undefined &&
            (obj.Data = base64FromBytes(message.Data !== undefined ? message.Data : new Uint8Array()));
        return obj;
    },

    fromPartial(object: DeepPartial<Payload>): Payload {
        const message = { ...basePayload } as Payload;
        if (object.Flag !== undefined && object.Flag !== null) {
            message.Flag = object.Flag;
        } else {
            message.Flag = 0;
        }
        if (object.Data !== undefined && object.Data !== null) {
            message.Data = object.Data;
        } else {
            message.Data = new Uint8Array();
        }
        return message;
    },
};

const baseError: object = { Code: 0, message: "" };

export const Error = {
    encode(message: Error, writer: Writer = Writer.create()): Writer {
        if (message.Code !== 0) {
            writer.uint32(8).int32(message.Code);
        }
        if (message.message !== "") {
            writer.uint32(18).string(message.message);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Error {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseError } as Error;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Error {
        const message = { ...baseError } as Error;
        if (object.Code !== undefined && object.Code !== null) {
            message.Code = Number(object.Code);
        } else {
            message.Code = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = String(object.message);
        } else {
            message.message = "";
        }
        return message;
    },

    toJSON(message: Error): unknown {
        const obj: any = {};
        message.Code !== undefined && (obj.Code = message.Code);
        message.message !== undefined && (obj.message = message.message);
        return obj;
    },

    fromPartial(object: DeepPartial<Error>): Error {
        const message = { ...baseError } as Error;
        if (object.Code !== undefined && object.Code !== null) {
            message.Code = object.Code;
        } else {
            message.Code = 0;
        }
        if (object.message !== undefined && object.message !== null) {
            message.message = object.message;
        } else {
            message.message = "";
        }
        return message;
    },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
    if (typeof globalThis !== "undefined") return globalThis;
    if (typeof self !== "undefined") return self;
    if (typeof window !== "undefined") return window;
    if (typeof global !== "undefined") return global;
    throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
    globalThis.atob || ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}

const btoa: (bin: string) => string =
    globalThis.btoa || ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
    const bin: string[] = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}

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
