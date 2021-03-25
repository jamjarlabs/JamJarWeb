/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "v1_relay";

export interface Relay {
    Type: Relay_RelayType;
    Target?: number | undefined;
    Data: Uint8Array;
}

export enum Relay_RelayType {
    BROADCAST = 0,
    TARGET = 1,
    HOST = 2,
    UNRECOGNIZED = -1,
}

export function relay_RelayTypeFromJSON(object: any): Relay_RelayType {
    switch (object) {
        case 0:
        case "BROADCAST":
            return Relay_RelayType.BROADCAST;
        case 1:
        case "TARGET":
            return Relay_RelayType.TARGET;
        case 2:
        case "HOST":
            return Relay_RelayType.HOST;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Relay_RelayType.UNRECOGNIZED;
    }
}

export function relay_RelayTypeToJSON(object: Relay_RelayType): string {
    switch (object) {
        case Relay_RelayType.BROADCAST:
            return "BROADCAST";
        case Relay_RelayType.TARGET:
            return "TARGET";
        case Relay_RelayType.HOST:
            return "HOST";
        default:
            return "UNKNOWN";
    }
}

const baseRelay: object = { Type: 0 };

export const Relay = {
    encode(message: Relay, writer: Writer = Writer.create()): Writer {
        if (message.Type !== 0) {
            writer.uint32(8).int32(message.Type);
        }
        if (message.Target !== undefined) {
            writer.uint32(16).int32(message.Target);
        }
        if (message.Data.length !== 0) {
            writer.uint32(26).bytes(message.Data);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Relay {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseRelay } as Relay;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32() as any;
                    break;
                case 2:
                    message.Target = reader.int32();
                    break;
                case 3:
                    message.Data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Relay {
        const message = { ...baseRelay } as Relay;
        if (object.Type !== undefined && object.Type !== null) {
            message.Type = relay_RelayTypeFromJSON(object.Type);
        } else {
            message.Type = 0;
        }
        if (object.Target !== undefined && object.Target !== null) {
            message.Target = Number(object.Target);
        } else {
            message.Target = undefined;
        }
        if (object.Data !== undefined && object.Data !== null) {
            message.Data = bytesFromBase64(object.Data);
        }
        return message;
    },

    toJSON(message: Relay): unknown {
        const obj: any = {};
        message.Type !== undefined && (obj.Type = relay_RelayTypeToJSON(message.Type));
        message.Target !== undefined && (obj.Target = message.Target);
        message.Data !== undefined &&
            (obj.Data = base64FromBytes(message.Data !== undefined ? message.Data : new Uint8Array()));
        return obj;
    },

    fromPartial(object: DeepPartial<Relay>): Relay {
        const message = { ...baseRelay } as Relay;
        if (object.Type !== undefined && object.Type !== null) {
            message.Type = object.Type;
        } else {
            message.Type = 0;
        }
        if (object.Target !== undefined && object.Target !== null) {
            message.Target = object.Target;
        } else {
            message.Target = undefined;
        }
        if (object.Data !== undefined && object.Data !== null) {
            message.Data = object.Data;
        } else {
            message.Data = new Uint8Array();
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
