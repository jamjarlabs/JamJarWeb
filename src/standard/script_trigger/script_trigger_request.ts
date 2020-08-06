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

import IEntity from "../../entity/ientity";

/**
 * ScriptTriggerRequest contains all information for triggering a script to
 * execute. This includes the name of the script, a descriptor of how it was
 * triggered, any entity associated with the script, and any arbitrary data to
 * expose to the script.
 */
class ScriptTriggerRequest<T> {
    public static readonly MESSAGE_TRIGGER_SCRIPT = "trigger_script";

    /**
     * Name of the script to execute.
     */
    public name: string;
    /**
     * Descriptor of the conditions the script was executed under, e.g.
     * "update"/"collision"
     */
    public descriptor: string;
    /**
     * Any entity associated with the execution of the script.
     */
    public entity?: IEntity;
    /**
     * Any arbitrary data to expose to the script.
     */
    public data?: T;

    constructor(name: string, descriptor: string, entity?: IEntity, data?: T) {
        this.name = name;
        this.descriptor = descriptor;
        this.entity = entity;
        this.data = data;
    }
}

export default ScriptTriggerRequest;
