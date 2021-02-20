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

import IMessageBus from "./message/imessage_bus";
import ScriptingReference from "./standard/scripting_engine/scripting_reference";

/**
 * IJamJarGlobals represents any global variables and functions exposed by JamJar, these are used to allow two way
 * interaction between a hosting site and the game, e.g. providing a canvas, stopping games, loading assets from
 * certain paths etc.
 */
interface IJamJarGlobals {
    /**
     * Refs is a mapping between a key to a JamJar scripting reference, allows multiple games to exist in the
     * same scope, and scripting will continue to work.
     */
    Refs?: Map<string, ScriptingReference>;
    /**
     * CanvasID is the ID of the canvas to render to.
     */
    CanvasID?: string;
    /**
     * CanvasWrapperID is the wrapper around the canvas, used to handle automatic resizing.
     */
    CanvasWrapperID?: string;
    /**
     * RootPath is where the game is loaded from, for example if the site is example.com the game could be
     * loaded in from assets.example.com so the assets should be loaded from assets.example.com instead. This root
     * path variable should always be used to allow flexiblity in hosting environments.
     */
    RootPath?: string;
    /**
     * StopGames is a function that will stop any running JamJar game.
     */
    StopGames?: (browserWindow?: Window) => void;
    /**
     * __runningGameBuses is a list of all running JamJar game message buses, when games start they register
     * with this. This is a private and 'internal' variable, it should not be manually modified.
     */
    __runningGameBuses?: IMessageBus[];
}

export default IJamJarGlobals;
