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

/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types  */

import ISerializable from "./iserializable";
import SerializationJSON from "./serialization_json";
import SerializationPimitive from "./serialization_primitive";

function primitiveStringWrapper(type: string, value: string) {
    return `{
        "primitive": true,
        "type": "${type}",
        "value": "${value}"
    }`;
}

function arrayWrapper(value: string) {
    return `{
        "type": "js.array",
        "value": ${value}
    }`;
}

abstract class Serialization {
    public static types: Map<string, { (json: any): ISerializable }> = new Map();

    public static Serialize(input: ISerializable | ISerializable[] | SerializationPimitive): string {
        let serializedString = "";
        switch (typeof input) {
            case "string": {
                serializedString = primitiveStringWrapper("js.string", input);
                break;
            }
            case "boolean": {
                serializedString = primitiveStringWrapper("js.boolean", input ? "true" : "false");
                break;
            }
            case "number": {
                serializedString = primitiveStringWrapper("js.number", input.toString());
                break;
            }
            case "bigint": {
                serializedString = primitiveStringWrapper("js.bigint", input.toString());
                break;
            }
            default: {
                if (Array.isArray(input)) {
                    let arrayString = "";
                    // Handle arrays
                    arrayString = "[";
                    for (let i = 0; i < input.length; i++) {
                        arrayString += input[i].Serialize();
                        if (i !== input.length - 1) {
                            arrayString += ",";
                        }
                    }
                    arrayString += "]";
                    serializedString = arrayWrapper(arrayString);
                } else {
                    // Handle serializable objects
                    serializedString = input.Serialize();
                }
                break;
            }
        }
        return serializedString;
    }

    public static Deserialize(input: SerializationJSON): any {
        if (input.primitive === true) {
            switch (input.type) {
                case "js.string": {
                    return input.value;
                }
                case "js.boolean": {
                    return input.value === "true";
                }
                case "js.number": {
                    return Number(input.value);
                }
                case "js.bigint": {
                    return BigInt(input.value);
                }
                default: {
                    console.error(`Unknown primitive type provided: ${input.type}`);
                    return null;
                }
            }
        }
        if (input.type === "js.array") {
            const arr = input.value as any[];
            const deserializedArray: any = [];
            if (arr.length === 0) {
                return deserializedArray;
            }
            for (let i = 0; i < arr.length; i++) {
                deserializedArray.push(Serialization.Deserialize(arr[i]));
            }
            return deserializedArray;
        }
        return Serialization.deserializeObject(input);
    }

    private static deserializeObject(input: SerializationJSON): any {
        const type = Serialization.types.get(input.type);
        if (type === undefined) {
            console.log(input);
            throw new Error(`Unknown deserializable: ${input.type}`);
        }
        return type(input.value);
    }
}

export default Serialization;
