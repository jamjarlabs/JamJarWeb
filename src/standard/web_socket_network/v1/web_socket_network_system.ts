/*
Copyright 2021 JamJar Authors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import IMessage from "../../../message/imessage";
import IMessageBus from "../../../message/imessage_bus";
import Message from "../../../message/message";
import IScene from "../../../scene/iscene";
import Serialization from "../../../serialization/serialization";
import System from "../../../system/system";
import ISerializable from "../../../serialization/iserializable";
import * as transportV1 from "../../../network/v1/transport";
import * as relayv1 from "../../../network/v1/relay";
import * as clientv1 from "../../../network/v1/client";
import * as roomv1 from "../../../network/v1/room";
import InboundMessage from "./inbound_message";
import SerializationPrimitive from "../../../serialization/serialization_primitive";
import OutboundMessage from "./outbound_message";

class WebSocketNetworkSystem extends System {
    public static readonly SET_URL = "jamjar_websocket_set_url";
    public static readonly SET_PROTOCOLS = "jamjar_websocket_set_protocols";

    public static readonly REQUEST_RELAY_MESSAGE = "jamjar_websocket_request_relay_message";
    public static readonly REQUEST_CONNECT = "jamjar_websocket_request_connect";
    public static readonly REQUEST_RECONNECT = "jamjar_websocket_request_reconnect";
    public static readonly REQUEST_LIST = "jamjar_websocket_request_list";
    public static readonly REQUEST_KICK = "jamjar_websocket_request_kick";
    public static readonly REQUEST_GRANT_HOST = "jamjar_websocket_request_grant_host";

    public static readonly RESPONSE_RELAY_MESSAGE = "jamjar_websocket_response_relay_message";
    public static readonly RESPONSE_CONNECT = "jamjar_websocket_response_connect";
    public static readonly RESPONSE_LIST = "jamjar_websocket_response_list";
    public static readonly RESPONSE_ASSIGN_HOST = "jamjar_websocket_response_assign_host";
    public static readonly RESPONSE_BEGIN_HOST_MIGRATE = "jamjar_websocket_response_begin_host_migrate";
    public static readonly RESPONSE_FINISH_HOST_MIGRATE = "jamjar_websocket_response_finish_host_migrate";
    public static readonly RESPONSE_KICK = "jamjar_websocket_response_kick";
    public static readonly RESPONSE_ERROR = "jamjar_websocket_response_error";
    public static readonly RESPONSE_CLIENT_CONNECT = "jamjar_websocket_response_client_connect";
    public static readonly RESPONSE_CLIENT_DISCONNECT = "jamjar_websocket_response_client_disconnect";

    public static readonly CONNECTION_ESTABLISHED = "jamjar_websocket_connection_established";
    public static readonly DISCONNECTED = "jamjar_websocket_disconnected";

    private enc: TextEncoder;
    private dec: TextDecoder;

    private url: string | undefined;
    private protocols: string | string[] | undefined;
    private socket: WebSocket | undefined;
    private lastTickTime: number;
    private currentTickTime: number;
    private tickRate: number;
    private outboundPayloads: transportV1.Payload[];
    private inboundPayloads: transportV1.Payload[];
    private connected: boolean;

    constructor(
        messageBus: IMessageBus,
        url?: string,
        protocols?: string | string[],
        scene?: IScene | undefined,
        tickRate: number = 1 / 30,
        subscriberID?: number | undefined,
        pageWindow: Window = window
    ) {
        super(messageBus, scene, subscriberID);
        this.lastTickTime = 0;
        this.currentTickTime = 0;
        this.tickRate = tickRate;
        this.connected = false;
        this.outboundPayloads = [];
        this.inboundPayloads = [];
        this.url = url;
        this.protocols = protocols;
        this.enc = new TextEncoder();
        this.dec = new TextDecoder();
        this.socket = undefined;
        pageWindow.onbeforeunload = this.onPageClose.bind(this);
        this.messageBus.Subscribe(this, [
            WebSocketNetworkSystem.SET_URL,
            WebSocketNetworkSystem.SET_PROTOCOLS,
            WebSocketNetworkSystem.REQUEST_RELAY_MESSAGE,
            WebSocketNetworkSystem.REQUEST_CONNECT,
            WebSocketNetworkSystem.REQUEST_RECONNECT,
            WebSocketNetworkSystem.REQUEST_KICK,
            WebSocketNetworkSystem.REQUEST_LIST,
            WebSocketNetworkSystem.REQUEST_GRANT_HOST,
        ]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case WebSocketNetworkSystem.SET_URL: {
                const setURLMessage = message as Message<string>;
                if (setURLMessage.payload === undefined) {
                    return;
                }
                this.url = setURLMessage.payload;
                break;
            }
            case WebSocketNetworkSystem.SET_PROTOCOLS: {
                const setProtocolsMessage = message as Message<string | string[] | undefined>;
                if (setProtocolsMessage.payload === undefined) {
                    return;
                }
                this.protocols = setProtocolsMessage.payload;
                break;
            }
            case WebSocketNetworkSystem.REQUEST_RELAY_MESSAGE: {
                const outboundMessage = message as Message<OutboundMessage>;
                if (outboundMessage.payload === undefined) {
                    return;
                }
                const outbound = outboundMessage.payload;
                this.outboundPayloads.push({
                    Data: relayv1.Relay.encode({
                        Data: this.enc.encode(Serialization.Serialize(outbound.Message)),
                        Type: outbound.RelayType,
                        Target: outbound.TargetID,
                    }).finish(),
                    Flag: transportV1.Payload_FlagType.REQUEST_RELAY_MESSAGE,
                });
                break;
            }
            case WebSocketNetworkSystem.REQUEST_CONNECT: {
                const connectMessage = message as Message<roomv1.JoinRoomRequest>;
                if (connectMessage.payload === undefined) {
                    return;
                }
                if (this.socket !== undefined) {
                    console.error(
                        "Failed attempt to connect to relay server; already connected/connecting to another server"
                    );
                    return;
                }
                this.setUpSocket();
                const connect = connectMessage.payload;
                this.outboundPayloads.push({
                    Data: roomv1.JoinRoomRequest.encode(connect).finish(),
                    Flag: transportV1.Payload_FlagType.REQUEST_CONNECT,
                });
                break;
            }
            case WebSocketNetworkSystem.REQUEST_RECONNECT: {
                const rejoinMessage = message as Message<roomv1.RejoinRoomRequest>;
                if (rejoinMessage.payload === undefined) {
                    return;
                }
                if (this.socket !== undefined) {
                    console.error(
                        "Failed attempt to reconnect to relay server; already connected/connecting to another server"
                    );
                    return;
                }
                this.setUpSocket();
                const reconnect = rejoinMessage.payload;
                this.outboundPayloads.push({
                    Data: roomv1.RejoinRoomRequest.encode(reconnect).finish(),
                    Flag: transportV1.Payload_FlagType.REQUEST_RECONNECT,
                });
                break;
            }
            case WebSocketNetworkSystem.REQUEST_KICK: {
                const kickMessage = message as Message<roomv1.KickRequest>;
                if (kickMessage.payload === undefined) {
                    return;
                }
                const kick = kickMessage.payload;
                this.outboundPayloads.push({
                    Data: roomv1.KickRequest.encode(kick).finish(),
                    Flag: transportV1.Payload_FlagType.REQUEST_KICK,
                });
                break;
            }
            case WebSocketNetworkSystem.REQUEST_LIST: {
                this.outboundPayloads.push({
                    Data: new Uint8Array(0),
                    Flag: transportV1.Payload_FlagType.REQUEST_LIST,
                });
                break;
            }
            case WebSocketNetworkSystem.REQUEST_GRANT_HOST: {
                const kickMessage = message as Message<roomv1.GrantHostRequest>;
                if (kickMessage.payload === undefined) {
                    return;
                }
                const grantHost = kickMessage.payload;
                this.outboundPayloads.push({
                    Data: roomv1.GrantHostRequest.encode(grantHost).finish(),
                    Flag: transportV1.Payload_FlagType.REQUEST_GRANT_HOST,
                });
                break;
            }
        }
    }

    private setUpSocket() {
        if (this.url === undefined) {
            console.error("Failed attempt to connect to the relay server; no URL provided to connect to");
            return;
        }
        this.socket = new WebSocket(this.url, this.protocols);
        this.socket.binaryType = "arraybuffer";
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onNetworkMessage.bind(this);
        this.socket.onclose = this.onClose.bind(this);
    }

    public Update(deltaTime: number): void {
        this.currentTickTime += deltaTime;
        if (this.currentTickTime - this.lastTickTime > this.tickRate) {
            this.lastTickTime = this.currentTickTime;
            if (this.connected) {
                this.publishOutbound();
            }
        }
        this.handleInbound();
    }

    private publishOutbound() {
        if (this.outboundPayloads.length === 0) {
            return;
        }
        if (this.socket === undefined || !this.connected) {
            return;
        }
        for (const outbound of this.outboundPayloads) {
            this.socket.send(transportV1.Payload.encode(outbound).finish());
        }
        this.outboundPayloads.length = 0;
    }

    private handleInbound() {
        const queueLength = this.inboundPayloads.length;
        for (let i = 0; i < queueLength; i++) {
            // Will always be non null
            /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
            const payload = this.inboundPayloads.shift()!;
            switch (payload.Flag) {
                case transportV1.Payload_FlagType.RESPONSE_ASSIGN_HOST: {
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_ASSIGN_HOST));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_BEGIN_HOST_MIGRATE: {
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_BEGIN_HOST_MIGRATE));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_CLIENT_CONNECT: {
                    const client = clientv1.SanitisedClient.decode(new Uint8Array(payload.Data));
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_CLIENT_CONNECT, client));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_CLIENT_DISCONNECT: {
                    const client = clientv1.SanitisedClient.decode(new Uint8Array(payload.Data));
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_CLIENT_DISCONNECT, client));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_CONNECT: {
                    const client = clientv1.Client.decode(payload.Data);
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_CONNECT, client));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_ERROR: {
                    const error = transportV1.Error.decode(payload.Data);
                    console.error(`[${error.Code}] ${error.message}`);
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_ERROR, error));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_FINISH_HOST_MIGRATE: {
                    const finishMigration = roomv1.FinishHostMigrationResponse.decode(new Uint8Array(payload.Data));
                    this.messageBus.Publish(
                        new Message(WebSocketNetworkSystem.RESPONSE_FINISH_HOST_MIGRATE, finishMigration)
                    );
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_KICK: {
                    const kick = roomv1.KickResponse.decode(payload.Data);
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_KICK, kick));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_LIST: {
                    const clientList = clientv1.ClientList.decode(payload.Data);
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_LIST, clientList.List));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_RELAY_MESSAGE: {
                    const relay = relayv1.Relay.decode(payload.Data);
                    this.messageBus.Publish(
                        new Message<InboundMessage>(WebSocketNetworkSystem.RESPONSE_RELAY_MESSAGE, {
                            Message: Serialization.Deserialize(JSON.parse(this.dec.decode(relay.Data))) as Message<
                                ISerializable | ISerializable[] | SerializationPrimitive
                            >,
                            SourceClientID: 0,
                        })
                    );
                    break;
                }
            }
        }
    }

    protected onOpen(event: Event): void {
        this.connected = true;
        this.messageBus.Publish(new Message(WebSocketNetworkSystem.CONNECTION_ESTABLISHED));
    }

    protected onClose(event: CloseEvent): void {
        this.connected = false;
        this.socket = undefined;
        this.messageBus.Publish(new Message(WebSocketNetworkSystem.DISCONNECTED));
    }

    protected onNetworkMessage(event: MessageEvent): void {
        const payload = transportV1.Payload.decode(new Uint8Array(event.data as ArrayBuffer));
        this.inboundPayloads.push(payload);
    }

    protected onPageClose(): void {
        if (this.socket !== undefined) {
            this.socket.close();
        }
    }
}

export default WebSocketNetworkSystem;
