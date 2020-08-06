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

import SystemEntity from "../../system/system_entity";
import IMessage from "../../message/imessage";

/**
 * ScriptingReference is a reference that ties together a script and the game
 * engine, with functions for the script to retrieve information/send messages
 * to the game engine.
 */
class ScriptingReference {
    private getScriptEntity: () => SystemEntity | undefined;
    private getEntityByID: (id: number) => SystemEntity | undefined;
    private getEntitiesByTag: (tag: string) => SystemEntity[];
    private getEntitiesByLayer: (layer: string) => SystemEntity[];
    private sendMessage: (message: IMessage) => void;

    constructor(getScriptEntity: () => SystemEntity | undefined,
        getEntityByID: (id: number) => SystemEntity | undefined,
        getEntitiesByTag: (tag: string) => SystemEntity[],
        getEntitiesByLayer: (layer: string) => SystemEntity[],
        sendMessage: (message: IMessage) => void
    ) {
        this.getScriptEntity = getScriptEntity;
        this.getEntityByID = getEntityByID;
        this.getEntitiesByTag = getEntitiesByTag;
        this.getEntitiesByLayer = getEntitiesByLayer;
        this.sendMessage = sendMessage;
    }

    /**
     * GetScriptEntity returns any entity associated with the script being
     * executed. This can be undefined if no entity is associated.
     */
    public GetScriptEntity(): SystemEntity | undefined {
        return this.getScriptEntity();
    }

    /**
     * GetEntityByID returns any entity with a matching ID, otherwise it
     * returns undefined.
     * @param id ID of the entity to search for.
     */
    public GetEntityByID(id: number): SystemEntity | undefined {
        return this.getEntityByID(id);
    }

    /**
     * GetEntitiesByTag returns a list of any entities with the tag provided.
     * @param tag Tag to search for
     */
    public GetEntitiesByTag(tag: string): SystemEntity[] {
        return this.getEntitiesByTag(tag);
    }

    /**
     * GetEntitiesByLayer returns a list of any entities with the layer
     * provided.
     * @param layer Layer to search for
     */
    public GetEntitiesByLayer(layer: string): SystemEntity[] {
        return this.getEntitiesByLayer(layer);
    }

    /**
     * SendMessage sends a message to the JamJar engine message bus.
     * @param message
     */
    public SendMessage(message: IMessage): void {
        return this.sendMessage(message);
    }
}

export default ScriptingReference;
