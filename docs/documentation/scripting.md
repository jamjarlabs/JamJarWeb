# Scripting

JamJar has a number of systems to allow JavaScript scripts to be loaded in at
runtime and executed - while providing a series of hooks and callbacks to allow
scripts to have useful control over the core game engine.

Scripts can:

- Get entities + components they are associated with.
- Look up entities by ID.
- Look up entities by tag and layer.
- Send messages into the JamJar engine.
- Modify components.
- Remove components.
- Destroy entities.

Scripts can be attached to run on:

- Updates.
- Collisions.
- Manually triggered.

## Loading Scripts

Scripts can be loaded using the [HTTPScriptSystem], which allows scripts to be
loaded at runtime over HTTP(S).

```typescript
new HTTPScriptSystem(messageBus);
```

Once this system has been set up, scripts can be loaded in by sending a message
with a [ScriptRequest] as the payload.

```typescript
this.messageBus.Publish(Message.New<ScriptRequest>(ScriptRequest.MESSAGE_REQUEST_LOAD,
    new ScriptRequest(
        "test-script",
        "assets/script.js"
    ))
);
```

This will attempt to load the `assets/script.js` file, storing it and
referencing it with the `test-script` name. This script can now be triggered
by referencing this name.

## Executing Scripts

Scripts can be executed in a number of ways, through a [Script] component, on
Collision, or with manual execution.

Executing scripts requires a [ScriptingEngineSystem] running.

```typescript
new ScriptingEngineSystem(messageBus, "script-test");
```

The second parameter, in this instance `script-test`, provides a reference for
scripts to use when interacting with a game instance. For more details, see
writing scripts below.

### Executing Scripts using the Script component

The [Script] component simply allows a script to be attached to an entity, with
a configurable trigger on when the referenced script should be executed.

To use the [Script] component, you must set up a [ScriptTriggerSystem] to
handle parsing [Script] components and queuing script executions.

```typescript
new ScriptTriggerSystem(messageBus);
```

Once this system is set up, you can then use the [Script] component.

```typescript
const scriptable = new Entity(this.messageBus);
scriptable.Add(new Script("test-script", ScriptTrigger.UPDATE));
```

This entity will be set up to execute the script called `test-script` on every
update.

### Executing Scripts on Collision

Scripts can be configured to be executed when an entity with a [Collider]
collides with another.

This requires a [CollisionSystem] to be running.

```typescript
new CollisionSystem(messageBus);
```

The [Collider] component takes a parameter which allows the script to be
referenced.

```typescript
const collidable = new Entity(this.messageBus);
collidable.Add(new Transform(Vector.New(0, 0), Vector.New(1, 1)));
collidable.Add(new Collider(Polygon.RectangleByDimensions(1, 1), "test-script"));
```

### Executing Scripts Manually

Scripts can be manually executed by sending a message with a
[ScriptTriggerRequest].

```typescript
this.messageBus.Publish(Message.New<ScriptTriggerRequest<string>>(ScriptRequest.MESSAGE_REQUEST_LOAD,
    new ScriptTriggerRequest(
        "test-script",
        "custom-execution",
        undefined,
        "this data will be sent to the script"
    ))
);
```

This message will trigger the `test-script`, with a descriptor of the
conditions it is being executed under as `custom-execution`. This descriptor
is just to give the script some context of why it is being executed, for
example if it is executed under an update event, it will be `update`.

There is additional string data provided to the script too, in this instance
it is `this data will be sent to the script`, but this can be any arbitrary
data.

## Writing Scripts

Scripts are designed to be simple, imperative code chunks that can be loaded
and executed at runtime. There are some hooks and functions available to
scripts to allow them to determine context, while also having the ability to
affect the game.

### Contextual Script Data

Contextual data is provided to the script by a variable `request` which all
scripts have access to, this is a [ScriptTriggerRequest] and as such contains
useful information, such as the descriptor of why the script was executed, the
entity associated with the script execution, the name of the script and
additional contextual information.

The additional contextual information differs depending on how the script is
called, if it was part of an update event, this is the update deltatime, if
it is on collision, it is the collision information.

```javascript
console.log(request.descriptor); // e.g. update/collision
console.log(request.data); // e.g. delta time/collision info
```

### Interacting with the Game

Scripts have access to a [ScriptReference] for the game, allowing interaction
with the game and its entities, this can be retrieved by referencing the
reference key that the [ScriptingEngineSystem] was set up with, allowing
access to a number of useful functions.

```javascript
const gameRef = window.JamJar.Refs.get("script-test");
console.log(gameRef.GetScriptEntity());
console.log(gameRef.GetEntityByID(0));
console.log(gameRef.GetEntitiesByTag("test"));
console.log(gameRef.GetEntitiesByLayer("test"));
gameRef.SendMessage({ type: "test"});
```

This grabs the reference to a [ScriptingEngineSystem] set up with the reference
`script-test` and calls a number of functions.

[HTTPScriptSystem]:../../reference/classes/httpscriptsystem
[ScriptRequest]:../../reference/classes/scriptrequest
[Script]:../../reference/classes/script
[ScriptingEngineSystem]:../../reference/classes/scriptingenginesystem
[ScriptTriggerSystem]:../../reference/classes/scripttriggersystem
[Collider]:../../reference/classes/collider
[CollisionSystem]:../../reference/classes/collisionsystem
[ScriptTriggerRequest]:../../reference/classes/scripttriggerrequest
