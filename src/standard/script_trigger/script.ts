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

import Component from "../../component/component";
import ScriptTrigger from "./script_trigger";

/**
 * Script allows to add a script to be executed on a trigger. This is attached
 * to an entity that will be available to the script at runtime.
 */
class Script extends Component {
    public static readonly KEY = "script";
    /**
     * script is the name of the script to execute.
     */
    public script: string;
    /**
     * trigger is the script trigger to cause the script to execute.
     */
    public trigger: ScriptTrigger;

    constructor(script: string, trigger: ScriptTrigger) {
        super(Script.KEY);
        this.script = script;
        this.trigger = trigger;
    }
}

export default Script;
