/*
Copyright 2020 JamJar Authors

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

import ISerializable from "./iserializable";

abstract class Serialization {
    public static types: Map<string, { (json: any): ISerializable }> = new Map();

    public static Serialize(input: ISerializable | ISerializable[]): string {
        let serializedString = "";
        if (Array.isArray(input)) {
            // Handle arrays
            serializedString = "[";
            for (let i = 0; i < input.length; i++) {
                serializedString += input[i].Serialize();
                if (i !== input.length - 1) {
                    serializedString += ",";
                }
            }
            serializedString += "]";
        } else {
            // Handle serializable objects
            serializedString = input.Serialize();
        }
        return serializedString;
    }

    public static Deserialize(input: any): any {
        if (Array.isArray(input)) {
            const deserializedArray: any = [];
            if (input.length === 0) {
                return deserializedArray;
            }
            for (let i = 0; i < input.length; i++) {
                deserializedArray.push(Serialization.deserializeObject(input[i]));
            }
            return deserializedArray;
        }
        return Serialization.deserializeObject(input);
    }

    private static deserializeObject(input: any): any {
        const type = Serialization.types.get(input.className);
        if (type === undefined) {
            throw new Error(`Unknown deserializable: ${input.className}`);
        }
        return type(input);
    }
}

export default Serialization;
