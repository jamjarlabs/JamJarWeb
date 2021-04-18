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

import * as relayv1 from "../../../network/v1/relay";
import Message from "../../../message/message";
import ISerializable from "../../../serialization/iserializable";
import SerializationPrimitive from "../../../serialization/serialization_primitive";

interface OutboundMessage {
    Message: Message<ISerializable | ISerializable[] | SerializationPrimitive>;
    RelayType: relayv1.Relay_RelayType;
    TargetID?: number;
}

export default OutboundMessage;
