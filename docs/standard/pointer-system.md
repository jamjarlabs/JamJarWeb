# Pointer System

The Pointer System sets up event listeners on an HTML element supplied to it (normally the canvas of the game) and converts any events it recieves into JamJar ECS messages; whilst adding additional relevant information - such as world position and camera positions.

## Events

The Pointer System listens for three events:

* `pointermove` - When the pointer moves.
* `pointerdown` - When a pointer presses down (mouse click down, touch down).
* `pointerup` - When a pointer is released (mouse click up, release touch).

## Using Pointer System Messages

### Pointer System Setup

To set up a pointer system, you need the game canvas HTML and a message bus:

```typescript
const canvas = document.getElementById("game-canvas") as HTMLCanvasElement;
const messageBus = new MessageBus();
new PointerSystem(messageBus, canvas);
```

### Subscribing

A system can subscribe to pointer events through the message bus:

```typescript
messageBus.Subscribe(this, "pointermove");
messageBus.Subscribe(this, "pointerdown");
```

### Handling Messages

A system can handle pointer events once it is subscribed through the OnMessage function:

```typescript
public OnMessage(message: IMessage): void {
    super.OnMessage(message);
    switch (message.type) {
        case "pointermove": {
            // pointer moved
            break;
        }
        case "pointerdown": {
            // pointer down
            break;
        }
    }
}
```

### Pointer Messages

Pointer messages contain a [`Pointer`](../../reference/classes/pointer) as a payload - this contains all the information about a pointer event. It contains a JavaScript [`PointerEvent`](https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent), the position of the pointer event relative to the game canvas as [`elementPosition`](../../reference/classes/pointer#elementposition) and a list of [`PointerCameraInfo`](../../reference/classes/pointercamerainfo) containing pointer information relevant to each camera.  
The [`PointerCameraInfo`](../../reference/classes/pointercamerainfo) contains information such as the position of the pointer in the world according to the camera, the position of the pointer relative to the camera's viewport, and if the pointer is within a cameras bounds.  

To retrieve this example, see the `OnMessage` implementation below:
```typescript
public OnMessage(message: IMessage): void {
    super.OnMessage(message);
    switch (message.type) {
        case "pointermove": {
            // Get pointer
            const pointerMessage = message as Message<Pointer>;
            if (pointerMessage.payload === undefined) {
                return;
            }
            const pointer = pointerMessage.payload;
            // Iterate through each camera associated and print the world position according to each camera
            for (let i = 0; i < pointer.cameraInfos.length; i++) {
                const cameraInfo = pointer.cameraInfos[i];
                console.log(cameraInfo.worldPosition);
            }
            break;
        }
    }
}
```

