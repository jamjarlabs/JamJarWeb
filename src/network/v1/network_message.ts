import Message from "../../message/message";
import ISerializable from "../../serialization/iserializable";
import Serialization from "../../serialization/serialization";
import Serialize from "../../serialization/serialize";

@Serialize(Message.CLASS_SERIALIZATION_KEY, Message.Deserialize)
class NetworkMessage implements ISerializable {

    public static readonly CLASS_SERIALIZATION_KEY = "com.jamjarlabs.NetworkMessage";

    public static Deserialize(json: any): Message<unknown> {
        if (json.payload !== undefined) {
            return Message.New(json.type, Serialization.Deserialize(json.payload))
        }
        return Message.New(json.name);
    }

    public message: Message<unknown>
    public targetClient?: number;

    constructor(message: Message<unknown>, targetClient?: number) {
        this.message = message;
        this.targetClient = targetClient;
    }

    public Serialize(): string {
        if (this.targetClient !== undefined) {
            return `{
                "className": "${NetworkMessage.CLASS_SERIALIZATION_KEY}",
                "targetClient": "${this.targetClient}",
                "message": ${this.message.Serialize()}
            }`;
        }
        return `{
            "className": "${NetworkMessage.CLASS_SERIALIZATION_KEY}",
            "message": ${this.message.Serialize()}
        }`;
    }
}

export default NetworkMessage;
