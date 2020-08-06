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

import System from "../../system/system";
import Component from "../../component/component";
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";
import Message from "../../message/message";
import Script from "./script";
import ScriptTrigger from "./script_trigger";
import ScriptTriggerRequest from "./script_trigger_request";

/**
 * ScriptTriggerSystem handles triggering scripts to be executed based on the
 * Script component. Interprets Script components to trigger events at the
 * expected times.
 */
class ScriptTriggerSystem extends System {

    /**
     * Descriptor for a script triggered as part of an update event.
     */
    public static readonly DESCRIPTOR_UPDATE = "update";

    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => {
        return [Script.KEY].every((type) => components.some(
            component => component.key === type
        ));
    };

    constructor(messageBus: IMessageBus,
        scene?: IScene,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number) {
        super(messageBus, scene, ScriptTriggerSystem.EVALUATOR, entities, subscriberID);
    }

    public Update(dt: number): void {
        for (const entity of this.entities.values()) {
            const script = entity.Get(Script.KEY) as Script;
            if (script.trigger !== ScriptTrigger.UPDATE) {
                continue;
            }

            // Trigger script if update trigger, provide deltatime as the data
            this.messageBus.Publish(new Message<ScriptTriggerRequest<number>>(
                ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT,
                new ScriptTriggerRequest(
                    script.script,
                    ScriptTriggerSystem.DESCRIPTOR_UPDATE,
                    entity.entity,
                    dt
                )
            ));
        }
    }
}

export default ScriptTriggerSystem;
