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

class WebSocketNetworkSystem extends System {
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

    public static readonly CONNECTION_ESTABLISHED = "jamjar_websocket_connection_established";
    public static readonly DISCONNECTED = "jamjar_websocket_disconnected";

    private socket: WebSocket;
    private lastTickTime: number;
    private currentTickTime: number;
    private tickRate: number;
    private outboundPayloads: transportV1.Payload[];
    private inboundPayloads: transportV1.Payload[];
    private isConnected: boolean;

    constructor(
        messageBus: IMessageBus,
        url: string,
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
        this.isConnected = false;
        this.outboundPayloads = [];
        this.inboundPayloads = [];
        pageWindow.onbeforeunload = this.onPageClose.bind(this);
        this.socket = new WebSocket(url, protocols);
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onNetworkMessage.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.messageBus.Subscribe(this, [
            WebSocketNetworkSystem.REQUEST_RELAY_MESSAGE,
            WebSocketNetworkSystem.REQUEST_CONNECT,
            WebSocketNetworkSystem.REQUEST_LIST,
        ]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case WebSocketNetworkSystem.REQUEST_RELAY_MESSAGE: {
                const outboundMessage = message as Message<[Message<ISerializable>, relayv1.Relay_RelayType, number?]>;
                if (outboundMessage.payload === undefined) {
                    return;
                }
                const outbound = outboundMessage.payload;
                this.outboundPayloads.push({
                    Data: relayv1.Relay.encode({
                        Data: Serialization.Serialize(outbound[0]),
                        Type: outbound[1],
                        Target: outbound[2],
                    }).finish(),
                    Flag: transportV1.Payload_FlagType.REQUEST_RELAY_MESSAGE,
                });
                break;
            }
        }
    }

    public Update(deltaTime: number): void {
        this.currentTickTime += deltaTime;
        if (this.currentTickTime - this.lastTickTime > this.tickRate) {
            this.lastTickTime = this.currentTickTime;
            if (this.isConnected) {
                this.publishOutbound();
            }
        }
        this.handleInbound();
    }

    private publishOutbound() {
        if (this.outboundPayloads.length === 0) {
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
            const payload = this.inboundPayloads.shift()!;
            switch (payload.Flag) {
                case transportV1.Payload_FlagType.RESPONSE_CONNECT: {
                    const client = clientv1.Client.decode(payload.Data);
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_CONNECT, client));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_ASSIGN_HOST: {
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_ASSIGN_HOST));
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_RELAY_MESSAGE: {
                    const relay = relayv1.Relay.decode(payload.Data);
                    this.messageBus.Publish(Serialization.Deserialize(relay.Data) as IMessage);
                    break;
                }
                case transportV1.Payload_FlagType.RESPONSE_ERROR: {
                    const error = transportV1.Error.decode(payload.Data);
                    console.error(`[${error.Code}] ${error.message}`);
                    this.messageBus.Publish(new Message(WebSocketNetworkSystem.RESPONSE_ERROR, error));
                    break;
                }
            }
        }
    }

    protected onOpen(event: Event): void {
        this.isConnected = true;
        this.messageBus.Publish(new Message(WebSocketNetworkSystem.CONNECTION_ESTABLISHED));
    }

    protected onClose(event: CloseEvent): void {
        this.isConnected = false;
        this.messageBus.Publish(new Message(WebSocketNetworkSystem.DISCONNECTED));
    }

    protected onNetworkMessage(event: MessageEvent): void {
        const payload = transportV1.Payload.decode(event.data);
        this.inboundPayloads.push(payload);
    }

    protected onPageClose(): void {
        this.socket.close();
    }
}

export default WebSocketNetworkSystem;
