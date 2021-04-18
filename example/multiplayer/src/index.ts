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

import {
    Game,
    IMessageBus,
    EntityManager,
    MessageBus,
    Message,
    WebGLSystem,
    Entity,
    Transform,
    Camera,
    Vector,
    Renderable,
    Matrix4D,
    Matrix3D,
    CanvasResizeSystem,
    WebSocketNetworkSystemV1,
    RoomV1,
    System,
    IMessage,
    TransportV1,
    ClientV1,
    RelayV1,
    OutboundMessageV1,
    Pointer,
    PointerSystem,
    Sprite,
    Material,
    Color,
    SpriteSystem,
    InboundMessageV1,
    RelayServerV1,
    RelayServerRoomRequestV1,
    RelayServerRoomResponseV1,
    IEntity,
    Component,
    ArraySystem,
} from "jamjar";

const ROOM_ID_LOCAL_STORAGE_KEY = "multiplayer-example-room-id";
const ROOM_SECRET_LOCAL_STORAGE_KEY = "multiplayer-example-room-secret";
const CLIENT_ID_LOCAL_STORAGE_KEY = "multiplayer-example-client-id";
const CLIENT_SECRET_LOCAL_STORAGE_KEY = "multiplayer-example-client-secret";

class MultiplayerMessageDebugger extends System {
    constructor(messageBus: IMessageBus) {
        super(messageBus);
        this.messageBus.Subscribe(this, [
            WebSocketNetworkSystemV1.CONNECTION_ESTABLISHED,
            WebSocketNetworkSystemV1.DISCONNECTED,
            WebSocketNetworkSystemV1.RESPONSE_ASSIGN_HOST,
            WebSocketNetworkSystemV1.RESPONSE_BEGIN_HOST_MIGRATE,
            WebSocketNetworkSystemV1.RESPONSE_CONNECT,
            WebSocketNetworkSystemV1.RESPONSE_ERROR,
            WebSocketNetworkSystemV1.RESPONSE_FINISH_HOST_MIGRATE,
            WebSocketNetworkSystemV1.RESPONSE_KICK,
            WebSocketNetworkSystemV1.RESPONSE_LIST,
            WebSocketNetworkSystemV1.RESPONSE_CLIENT_CONNECT,
            WebSocketNetworkSystemV1.RESPONSE_CLIENT_DISCONNECT,
        ]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case WebSocketNetworkSystemV1.CONNECTION_ESTABLISHED: {
                console.log("connection established");
                break;
            }
            case WebSocketNetworkSystemV1.DISCONNECTED: {
                console.log("disconnected");
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_ASSIGN_HOST: {
                console.log("assigned host");
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_BEGIN_HOST_MIGRATE: {
                console.log("host migration begin");
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_CONNECT: {
                console.log("connected, client assigned");
                const msg = message as Message<ClientV1.Client>;
                if (msg.payload === undefined) {
                    return;
                }
                const client = msg.payload;
                console.log(`ID: ${client.ID}`);
                console.log(`Secret: ${client.Secret}`);
                localStorage.setItem(CLIENT_ID_LOCAL_STORAGE_KEY, client.ID.toString());
                localStorage.setItem(CLIENT_SECRET_LOCAL_STORAGE_KEY, client.Secret.toString());
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_ERROR: {
                const msg = message as Message<TransportV1.Error>;
                if (msg.payload === undefined) {
                    return;
                }
                const error = msg.payload;
                console.error(`[${error.Code}] ${error.message}`);
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_FINISH_HOST_MIGRATE: {
                const msg = message as Message<RoomV1.FinishHostMigrationResponse>;
                if (msg.payload === undefined) {
                    return;
                }
                const finishMigration = msg.payload;
                console.log(`host migration finished, new host ID: ${finishMigration.HostID}`);
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_KICK: {
                console.log("client kicked");
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_LIST: {
                const msg = message as Message<ClientV1.ClientList>;
                if (msg.payload === undefined) {
                    return;
                }
                const clientList = msg.payload;
                console.log("client list");
                for (let i = 0; i < clientList.List.length; i++) {
                    const client = clientList.List[i];
                    console.log(`[${i}] ${client.ID} ${client.Host ? "- Host" : ""}`);
                }
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_CLIENT_CONNECT: {
                const msg = message as Message<ClientV1.SanitisedClient>;
                if (msg.payload === undefined) {
                    return;
                }
                const client = msg.payload;
                console.log(`client connect ${client.ID}`);
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_CLIENT_DISCONNECT: {
                const msg = message as Message<ClientV1.SanitisedClient>;
                if (msg.payload === undefined) {
                    return;
                }
                const client = msg.payload;
                console.log(`client disconnect ${client.ID}`);
                break;
            }
        }
    }
}

class NetworkFilter extends System {
    constructor(messageBus: IMessageBus) {
        super(messageBus);
        this.messageBus.Subscribe(this, ["pointerdown", WebSocketNetworkSystemV1.RESPONSE_RELAY_MESSAGE]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case WebSocketNetworkSystemV1.RESPONSE_RELAY_MESSAGE: {
                const relayMessage = message as Message<InboundMessageV1>;
                if (relayMessage.payload === undefined) {
                    return;
                }
                const relay = relayMessage.payload;
                const msg = relay.Message;
                this.messageBus.Publish(msg);
            }
        }
    }
}

class SquareSystem extends ArraySystem {
    public static readonly PLACE_SQUARE = "place_square";
    public static readonly DELETE_SQUARE = "delete_square";
    public static readonly SQUARE_DOWN = "square_down";
    public static readonly SQUARE_UP = "square_up";
    public static readonly SYNC = "sync";

    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return (
            components.some((component) => component.key === Transform.KEY) &&
            !components.some((component) => component.key === Camera.KEY)
        );
    };

    private isHost: boolean;

    private squares: Vector[];

    constructor(messageBus: IMessageBus) {
        super(messageBus, undefined, SquareSystem.EVALUATOR);
        this.isHost = false;
        this.squares = [];
        this.messageBus.Subscribe(this, [
            "pointerdown",
            WebSocketNetworkSystemV1.RESPONSE_ASSIGN_HOST,
            WebSocketNetworkSystemV1.RESPONSE_RELAY_MESSAGE,
            WebSocketNetworkSystemV1.RESPONSE_CLIENT_CONNECT,
            SquareSystem.PLACE_SQUARE,
            SquareSystem.DELETE_SQUARE,
            SquareSystem.SQUARE_DOWN,
            SquareSystem.SQUARE_UP,
            SquareSystem.SYNC,
        ]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case "pointerdown": {
                const pointerMessage = message as Message<Pointer>;
                if (pointerMessage.payload === undefined) {
                    return;
                }
                const pointer = pointerMessage.payload;
                const squarePos = pointer.cameraInfos[0].worldPosition.Copy();
                if (this.isHost) {
                    this.messageBus.Publish(Message.New(SquareSystem.PLACE_SQUARE, squarePos));
                } else {
                    this.messageBus.Publish(
                        Message.New<OutboundMessageV1>(WebSocketNetworkSystemV1.REQUEST_RELAY_MESSAGE, {
                            Message: Message.New<Vector>(SquareSystem.PLACE_SQUARE, squarePos),
                            RelayType: RelayV1.Relay_RelayType.HOST,
                        })
                    );
                }
                break;
            }
            case SquareSystem.PLACE_SQUARE: {
                const placeMessage = message as Message<Vector>;
                if (placeMessage.payload === undefined) {
                    return;
                }
                const place = placeMessage.payload;
                if (this.isHost) {
                    this.messageBus.Publish(
                        Message.New<OutboundMessageV1>(WebSocketNetworkSystemV1.REQUEST_RELAY_MESSAGE, {
                            Message: Message.New<Vector>(SquareSystem.PLACE_SQUARE, place),
                            RelayType: RelayV1.Relay_RelayType.BROADCAST,
                        })
                    );
                }

                const entity = new Entity(this.messageBus);
                entity.Add(new Transform(place.Copy(), Vector.New(2, 2)));
                entity.Add(
                    new Sprite(
                        new Material({
                            color: new Color(1, 0, 0),
                        })
                    )
                );
                if (this.scene !== undefined) {
                    this.scene.AddEntity(entity);
                }

                this.squares.push(place.Copy());
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_ASSIGN_HOST: {
                this.isHost = true;
                this.messageBus.Publish(
                    Message.New<OutboundMessageV1>(WebSocketNetworkSystemV1.REQUEST_RELAY_MESSAGE, {
                        Message: Message.New<Vector[]>(SquareSystem.SYNC, this.squares),
                        RelayType: RelayV1.Relay_RelayType.BROADCAST,
                    })
                );
                break;
            }
            case SquareSystem.SYNC: {
                const syncMessage = message as Message<Vector[]>;
                if (syncMessage.payload === undefined) {
                    return;
                }
                const sync = syncMessage.payload;
                for (const entity of this.entities) {
                    entity.Destroy();
                }
                for (const position of sync) {
                    const entity = new Entity(this.messageBus);
                    entity.Add(new Transform(position.Copy(), Vector.New(2, 2)));
                    entity.Add(
                        new Sprite(
                            new Material({
                                color: new Color(1, 0, 0),
                            })
                        )
                    );
                    if (this.scene !== undefined) {
                        this.scene.AddEntity(entity);
                    }
                }
                this.squares = sync;
                break;
            }
            case WebSocketNetworkSystemV1.RESPONSE_CLIENT_CONNECT: {
                if (!this.isHost) {
                    return;
                }
                const clientMessage = message as Message<ClientV1.SanitisedClient>;
                if (clientMessage.payload === undefined) {
                    return;
                }
                const client = clientMessage.payload;
                this.messageBus.Publish(
                    Message.New<OutboundMessageV1>(WebSocketNetworkSystemV1.REQUEST_RELAY_MESSAGE, {
                        Message: Message.New<Vector[]>(SquareSystem.SYNC, this.squares),
                        RelayType: RelayV1.Relay_RelayType.TARGET,
                        TargetID: client.ID,
                    })
                );
                break;
            }
        }
    }
}

class RelayConnectSystem extends System {
    public static readonly JOIN_ROOM = "join_room";

    constructor(messageBus: IMessageBus) {
        super(messageBus);
        this.messageBus.Subscribe(this, [RelayServerV1.REQUEST_ROOM_SUCCESS, RelayConnectSystem.JOIN_ROOM]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case RelayConnectSystem.JOIN_ROOM: {
                const joinMessage = message as Message<[number, number]>;
                if (joinMessage.payload === undefined) {
                    return;
                }
                const join = joinMessage.payload;

                this.messageBus.Publish(
                    Message.New(WebSocketNetworkSystemV1.SET_URL, "ws://localhost:5000/v1/websocket")
                );

                const roomID = localStorage.getItem(ROOM_ID_LOCAL_STORAGE_KEY);
                const roomSecret = localStorage.getItem(ROOM_SECRET_LOCAL_STORAGE_KEY);
                const clientID = localStorage.getItem(CLIENT_ID_LOCAL_STORAGE_KEY);
                const clientSecret = localStorage.getItem(CLIENT_SECRET_LOCAL_STORAGE_KEY);

                if (
                    roomID !== join[0].toString() ||
                    roomSecret !== join[1].toString() ||
                    clientID === null ||
                    clientSecret === null
                ) {
                    console.log("new connection, no saved client details or room mismatch");
                    localStorage.setItem(ROOM_ID_LOCAL_STORAGE_KEY, join[0].toString());
                    localStorage.setItem(ROOM_SECRET_LOCAL_STORAGE_KEY, join[1].toString());
                    this.messageBus.Publish(
                        Message.New<RoomV1.JoinRoomRequest>(WebSocketNetworkSystemV1.REQUEST_CONNECT, {
                            RoomID: join[0],
                            RoomSecret: join[1],
                        })
                    );
                } else {
                    console.log(
                        `attempting reconnect to room ${roomID} with secret ${roomSecret} as client ${clientID} with secret ${clientSecret}`
                    );
                    this.messageBus.Publish(
                        Message.New<RoomV1.RejoinRoomRequest>(WebSocketNetworkSystemV1.REQUEST_RECONNECT, {
                            RoomID: join[0],
                            RoomSecret: join[1],
                            ClientID: parseInt(clientID),
                            ClientSecret: parseInt(clientSecret),
                        })
                    );
                }
                break;
            }
            case RelayServerV1.REQUEST_ROOM_SUCCESS: {
                const roomSuccessMessage = message as Message<RelayServerRoomResponseV1>;
                if (roomSuccessMessage.payload === undefined) {
                    return;
                }
                const roomSuccess = roomSuccessMessage.payload;
                this.messageBus.Publish(
                    Message.New(RelayConnectSystem.JOIN_ROOM, [roomSuccess.id, roomSuccess.secret])
                );
                console.log([roomSuccess.id, roomSuccess.secret]);
                break;
            }
        }
    }
}

class MultiplayerGame extends Game {
    constructor(messageBus: IMessageBus) {
        super(messageBus, "multiplayer-example");
    }

    OnStart(): void {
        // Create camera
        const cameraEntity = new Entity(this.messageBus);
        cameraEntity.Add(new Camera());
        cameraEntity.Add(new Transform());

        const urlParams = new URLSearchParams(window.location.search);
        const roomID = urlParams.get("room_id");
        const roomSecret = urlParams.get("room_secret");

        if (roomID !== null && roomSecret !== null) {
            this.messageBus.Publish(
                Message.New(RelayConnectSystem.JOIN_ROOM, [parseInt(roomID), parseInt(roomSecret)])
            );
        } else {
            this.messageBus.Publish(Message.New(RelayServerV1.SET_URL, "http://46.101.17.243:5000"));
            this.messageBus.Publish(
                Message.New<RelayServerRoomRequestV1>(RelayServerV1.REQUEST_ROOM, {
                    max_clients: 10,
                })
            );
        }
    }
}

if (window.JamJar === undefined) {
    throw "Missing required JamJar configuration options";
}

if (window.JamJar.CanvasID === undefined) {
    throw "Missing required CanvasID";
}

if (window.JamJar.CanvasWrapperID === undefined) {
    throw "Missing required CanvasWrapperID";
}

// Get canvas
const canvas = document.getElementById(window.JamJar.CanvasID) as HTMLCanvasElement;

const wrapper = document.getElementById(window.JamJar.CanvasWrapperID);

if (wrapper === null) {
    throw `Invalid CanvasWrapperID provided, no wrapper found with ID ${window.JamJar.CanvasWrapperID}`;
}

// Get WebGL2 context
const gl = canvas.getContext("webgl2", { alpha: false });
if (!gl) {
    throw "WebGL2 not supported in this browser";
}

// Set up vector and renderable pooling
Vector.Init(200);
Renderable.Init(100);
Message.Init(500);
Matrix4D.Init(30);
Matrix3D.Init(30);

// Create message bus and entity manager
const messageBus = new MessageBus();
new EntityManager(messageBus);

// Create game systems
new WebGLSystem(messageBus, gl);

new CanvasResizeSystem(messageBus, canvas, wrapper);

new WebSocketNetworkSystemV1(messageBus);

new RelayServerV1(messageBus);

new MultiplayerMessageDebugger(messageBus);

new SquareSystem(messageBus);

new PointerSystem(messageBus, canvas);

new SpriteSystem(messageBus);

new RelayConnectSystem(messageBus);

new NetworkFilter(messageBus);

// Create and start game
new MultiplayerGame(messageBus).Start();
