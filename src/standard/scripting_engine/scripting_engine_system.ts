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

import Component from "../../component/component";
import IMessageBus from "../../message/imessage_bus";
import IEntity from "../../entity/ientity";
import IScene from "../../scene/iscene";
import SystemEntity from "../../system/system_entity";
import IMessage from "../../message/imessage";
import Message from "../../message/message";
import ScriptAsset from "../../scripting/script_asset";
import ScriptingReference from "./scripting_reference";
import ScriptTriggerRequest from "../script_trigger/script_trigger_request";
import MapSystem from "../../system/map_system";

/**
 * ScriptingEngineSystem handles executing scripts, listening out for trigger
 * events. The ScriptingEngineSystem also provides an interface for
 * communicating between the game engine and the scripts
 * (entities/messages/components) through the global window namespace.
 */
class ScriptingEngineSystem extends MapSystem {
    /**
     * Track all entities
     */
    private static readonly EVALUATOR = (entity: IEntity, components: Component[]): boolean => true;

    private assets: Map<string, ScriptAsset>;
    private scriptEntity: SystemEntity | undefined;

    /**
     * reference provides the functions interface for scripts to interact with
     * the game engine
     */
    private reference: ScriptingReference;

    constructor(
        messageBus: IMessageBus,
        ref: string,
        scene?: IScene,
        scripts: Map<string, ScriptAsset> = new Map(),
        scriptEntity: SystemEntity | undefined = undefined,
        reference: ScriptingReference | undefined = undefined,
        entities?: Map<number, SystemEntity>,
        subscriberID?: number
    ) {
        super(messageBus, scene, ScriptingEngineSystem.EVALUATOR, entities, subscriberID);

        this.assets = scripts;
        this.scriptEntity = scriptEntity;

        if (reference === undefined) {
            // No provided reference, create a new one binded to this instance
            this.reference = new ScriptingReference(
                this.getScriptEntity.bind(this),
                this.getEntityByID.bind(this),
                this.getEntitiesByTag.bind(this),
                this.getEntitiesByLayer.bind(this),
                this.sendMessage.bind(this)
            );

            if (window.JamJar === undefined) {
                window.JamJar = {};
            }

            // Add a global window reference to reference
            if (window.JamJar.Refs === undefined) {
                window.JamJar.Refs = new Map<string, ScriptingReference>([[ref, this.reference]]);
            } else {
                window.JamJar.Refs.set(ref, this.reference);
            }
        } else {
            this.reference = reference;
        }

        this.messageBus.Subscribe(this, [ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT, ScriptAsset.MESSAGE_FINISH_LOAD]);
    }

    public OnMessage(message: IMessage): void {
        super.OnMessage(message);
        switch (message.type) {
            case ScriptTriggerRequest.MESSAGE_TRIGGER_SCRIPT: {
                // ScriptTriggerRequest should allow any object to be provided
                // to a script as additional data
                /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
                const triggerMessage = message as Message<ScriptTriggerRequest<any>>;
                if (triggerMessage.payload === undefined) {
                    return;
                }
                const request = triggerMessage.payload;

                const script = this.assets.get(request.name);
                if (script === undefined) {
                    console.warn(`Failed to load script asset '${request.name}'`);
                    return;
                }

                // If script has an entity, update the current script entity
                if (request.entity !== undefined) {
                    const entity = this.entities.get(request.entity.id);
                    this.scriptEntity = entity;
                } else {
                    this.scriptEntity = undefined;
                }

                // Execute script
                new Function("request", script.code)(request);
                break;
            }
            case ScriptAsset.MESSAGE_FINISH_LOAD: {
                const loadAssetMessage = message as Message<ScriptAsset>;
                if (loadAssetMessage.payload === undefined) {
                    return;
                }
                const asset = loadAssetMessage.payload;
                if (asset.error !== undefined) {
                    console.warn(`Failed to load Script asset '${asset.name}': ${asset.error.message}`);
                    return;
                }
                this.assets.set(asset.name, asset);
                break;
            }
        }
    }

    private getScriptEntity(): SystemEntity | undefined {
        return this.scriptEntity;
    }

    private getEntityByID(id: number): SystemEntity | undefined {
        return this.entities.get(id);
    }

    private getEntitiesByTag(tag: string): SystemEntity[] {
        return [...this.entities.values()].filter((entity) => {
            return entity.entity.tags.includes(tag);
        });
    }

    private getEntitiesByLayer(layer: string): SystemEntity[] {
        return [...this.entities.values()].filter((entity) => {
            return entity.entity.layers.includes(layer);
        });
    }

    private sendMessage(message: IMessage): void {
        this.messageBus.Publish(message);
    }
}

export default ScriptingEngineSystem;
