/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "v1_client";

export interface ClientList {
    List: SanitisedClient[];
}

export interface Client {
    ID: number;
    Secret: number;
}

export interface SanitisedClient {
    ID: number;
    Host: boolean;
}

const baseClientList: object = {};

export const ClientList = {
    encode(message: ClientList, writer: Writer = Writer.create()): Writer {
        for (const v of message.List) {
            SanitisedClient.encode(v!, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): ClientList {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClientList } as ClientList;
        message.List = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.List.push(SanitisedClient.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): ClientList {
        const message = { ...baseClientList } as ClientList;
        message.List = [];
        if (object.List !== undefined && object.List !== null) {
            for (const e of object.List) {
                message.List.push(SanitisedClient.fromJSON(e));
            }
        }
        return message;
    },

    toJSON(message: ClientList): unknown {
        const obj: any = {};
        if (message.List) {
            obj.List = message.List.map((e) => (e ? SanitisedClient.toJSON(e) : undefined));
        } else {
            obj.List = [];
        }
        return obj;
    },

    fromPartial(object: DeepPartial<ClientList>): ClientList {
        const message = { ...baseClientList } as ClientList;
        message.List = [];
        if (object.List !== undefined && object.List !== null) {
            for (const e of object.List) {
                message.List.push(SanitisedClient.fromPartial(e));
            }
        }
        return message;
    },
};

const baseClient: object = { ID: 0, Secret: 0 };

export const Client = {
    encode(message: Client, writer: Writer = Writer.create()): Writer {
        if (message.ID !== 0) {
            writer.uint32(8).int32(message.ID);
        }
        if (message.Secret !== 0) {
            writer.uint32(16).int32(message.Secret);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): Client {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseClient } as Client;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.Secret = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): Client {
        const message = { ...baseClient } as Client;
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = Number(object.ID);
        } else {
            message.ID = 0;
        }
        if (object.Secret !== undefined && object.Secret !== null) {
            message.Secret = Number(object.Secret);
        } else {
            message.Secret = 0;
        }
        return message;
    },

    toJSON(message: Client): unknown {
        const obj: any = {};
        message.ID !== undefined && (obj.ID = message.ID);
        message.Secret !== undefined && (obj.Secret = message.Secret);
        return obj;
    },

    fromPartial(object: DeepPartial<Client>): Client {
        const message = { ...baseClient } as Client;
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        } else {
            message.ID = 0;
        }
        if (object.Secret !== undefined && object.Secret !== null) {
            message.Secret = object.Secret;
        } else {
            message.Secret = 0;
        }
        return message;
    },
};

const baseSanitisedClient: object = { ID: 0, Host: false };

export const SanitisedClient = {
    encode(message: SanitisedClient, writer: Writer = Writer.create()): Writer {
        if (message.ID !== 0) {
            writer.uint32(8).int32(message.ID);
        }
        if (message.Host === true) {
            writer.uint32(16).bool(message.Host);
        }
        return writer;
    },

    decode(input: Reader | Uint8Array, length?: number): SanitisedClient {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseSanitisedClient } as SanitisedClient;
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.Host = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },

    fromJSON(object: any): SanitisedClient {
        const message = { ...baseSanitisedClient } as SanitisedClient;
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = Number(object.ID);
        } else {
            message.ID = 0;
        }
        if (object.Host !== undefined && object.Host !== null) {
            message.Host = Boolean(object.Host);
        } else {
            message.Host = false;
        }
        return message;
    },

    toJSON(message: SanitisedClient): unknown {
        const obj: any = {};
        message.ID !== undefined && (obj.ID = message.ID);
        message.Host !== undefined && (obj.Host = message.Host);
        return obj;
    },

    fromPartial(object: DeepPartial<SanitisedClient>): SanitisedClient {
        const message = { ...baseSanitisedClient } as SanitisedClient;
        if (object.ID !== undefined && object.ID !== null) {
            message.ID = object.ID;
        } else {
            message.ID = 0;
        }
        if (object.Host !== undefined && object.Host !== null) {
            message.Host = object.Host;
        } else {
            message.Host = false;
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
