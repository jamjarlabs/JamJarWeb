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
import System from "../../../system/system";
import RelayServerRoomRequest from "./relay_server_room_request";
import RelayServerRoomResponse from "./relay_server_room_response";
import RelayServerSuccess from "./relay_server_success";

class RelayServerSystem extends System {
    public static readonly SET_URL = "jamjar_relay_server_set_url";
    public static readonly REQUEST_ROOM = "jamjar_relay_server_request_room";
    public static readonly REQUEST_ROOM_SUCCESS = "jamjar_relay_server_request_room_success";
    public static readonly REQUEST_ROOM_FAILURE = "jamjar_relay_server_request_room_failure";

    private url?: string;
    private requestOptions?: RequestInit;

    private successResponses: RelayServerRoomResponse[];
    private errorResponses: Error[];

    constructor(
        messageBus: IMessageBus,
        url?: string,
        requestOptions?: RequestInit,
        scene?: IScene | undefined,
        subscriberID?: number | undefined,
        successResponses: RelayServerRoomResponse[] = [],
        errorResponses: Error[] = []
    ) {
        super(messageBus, scene, subscriberID);
        this.url = url;
        this.requestOptions = requestOptions;
        this.successResponses = successResponses;
        this.errorResponses = errorResponses;
        this.messageBus.Subscribe(this, [RelayServerSystem.SET_URL, RelayServerSystem.REQUEST_ROOM]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case RelayServerSystem.SET_URL: {
                const setURLMessage = message as Message<string>;
                if (setURLMessage.payload === undefined) {
                    return;
                }
                this.url = setURLMessage.payload;
                break;
            }
            case RelayServerSystem.REQUEST_ROOM: {
                const roomRequestMessage = message as Message<RelayServerRoomRequest>;
                if (roomRequestMessage.payload === undefined) {
                    return;
                }
                const roomRequest = roomRequestMessage.payload;

                let requestOptions = this.requestOptions;

                if (requestOptions === undefined) {
                    requestOptions = {
                        method: "POST",
                        body: JSON.stringify(roomRequest),
                    };
                } else {
                    requestOptions.method = "POST";
                    requestOptions.body = JSON.stringify(roomRequest);
                }

                fetch(`${this.url}/v1/api/rooms`, requestOptions)
                    .then(this.handleFetch)
                    .then((response) => this.successResponses.push(response.data))
                    .catch(this.httpError.bind(this));
                break;
            }
        }
    }

    private handleFetch(response: Response): Promise<RelayServerSuccess> {
        if (!response.ok) {
            // Non 200 response code
            throw Error(response.statusText);
        }
        return response.json();
    }

    protected httpError(error: Error): void {
        console.error(error);
        this.errorResponses.push(error);
    }

    public Update(): void {
        for (const success of this.successResponses) {
            this.messageBus.Publish(Message.New(RelayServerSystem.REQUEST_ROOM_SUCCESS, success));
        }
        this.successResponses.length = 0;
        for (const error of this.errorResponses) {
            this.messageBus.Publish(Message.New(RelayServerSystem.REQUEST_ROOM_FAILURE, error));
        }
        this.errorResponses.length = 0;
    }
}

export default RelayServerSystem;
