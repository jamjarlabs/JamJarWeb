import IMessage from "../../../message/imessage";
import IMessageBus from "../../../message/imessage_bus";
import Message from "../../../message/message";
import NetworkMessage from "../../../network/v1/network_message";
import IScene from "../../../scene/iscene";
import Serialization from "../../../serialization/serialization";
import System from "../../../system/system";

class WebSocketNetworkSystem extends System {

    public static readonly SEND_MESSAGE = "jamjar_websocket_send_message";
    public static readonly CLIENT_LIST = "jamjar_websocket_client_list";
    public static readonly CLIENT_CONNECT = "jamjar_websocket_client_connect";
    public static readonly CLIENT_DISCONNECT = "jamjar_websocket_client_disconnect";
    public static readonly ASSIGNED_HOST = "jamjar_websocket_assigned_host";
    public static readonly CONNECTED = "jamjar_websocket_connected";
    public static readonly DISCONNECTED = "jamjar_websocket_disconnected";

    private socket: WebSocket;
    private lastTickTime: number;
    private currentTickTime: number;
    private tickRate: number;
    private outboundMessages: NetworkMessage[];
    private inboundMessages: Message<unknown>[];
    private isConnected: boolean;

    constructor(messageBus: IMessageBus, url: string, protocols?: string | string[], scene?: IScene | undefined,
        tickRate: number = 1/30, subscriberID?: number | undefined, pageWindow: Window = window) {
        super(messageBus, scene, subscriberID);
        this.lastTickTime = 0;
        this.currentTickTime = 0;
        this.tickRate = tickRate;
        this.isConnected = false;
        this.outboundMessages = [];
        this.inboundMessages = [];
        pageWindow.onbeforeunload = this.onPageClose.bind(this);
        this.socket = new WebSocket(url, protocols);
        this.socket.onopen = this.onOpen.bind(this);
        this.socket.onmessage = this.onNetworkMessage.bind(this);
        this.socket.onclose = this.onClose.bind(this);
        this.messageBus.Subscribe(this, WebSocketNetworkSystem.SEND_MESSAGE);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch(message.type) {
            case WebSocketNetworkSystem.SEND_MESSAGE: {
                const networkMessage = message as Message<NetworkMessage>;
                if (networkMessage.payload === undefined) {
                    return;
                }
                this.outboundMessages.push(networkMessage.payload);
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
        this.publishInbound();
    }

    private publishOutbound() {
        if (this.outboundMessages.length === 0) {
            return;
        }
        this.socket.send(Serialization.Serialize(this.outboundMessages));
        this.outboundMessages.length = 0;
    }

    private publishInbound() {
        const queueLength = this.inboundMessages.length;
        for (let i = 0; i < queueLength; i++) {
            const message = this.inboundMessages.shift()!;
            this.messageBus.Publish(message);
        }
    }

    protected onOpen(event: Event): void {
        this.isConnected = true;
        this.messageBus.Publish(new Message(WebSocketNetworkSystem.CONNECTED));
    }

    protected onClose(event: CloseEvent): void {
        this.isConnected = false;
        this.messageBus.Publish(new Message(WebSocketNetworkSystem.DISCONNECTED));
    }

    protected onNetworkMessage(event: MessageEvent): void {
        const messages = Serialization.Deserialize(JSON.parse(event.data)) as Message<unknown>[];
        this.inboundMessages.push(...messages);
    }

    protected onPageClose(): void {
        this.socket.close();
    }
}

export default WebSocketNetworkSystem;
