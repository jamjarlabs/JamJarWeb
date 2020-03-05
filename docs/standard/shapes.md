# Shapes

Shapes are fundamental to the game engine, used in rendering sprites, determining collisions, and more. All shapes implement the `IShape` interface, which provides some useful functions:

## IShape

```typescript
Transform(transform: Transform): IShape;
FarthestPointInDirection(direction: Vector): Vector;
PointInside(point: Vector): boolean;
```

- `Transform` takes a transform and applies it to shape; translating, rotating and scaling a shape.
- `FarthestPointInDirection` returns the point that is farthest in the direction provided. Used in the GJK algorithm for collision detection.
- `PointInside` determines if a point provided is within the shape or not.

See the [API reference for more details](../../reference/interfaces/ishape).

## Polygon

The `Polygon` is a series of arbitrary points that make up a shape. It can be declared by passing an array of points to the constructor. For example:
```typescript
const triangle = new Polygon([
    new Vector(-1, -1),
    new Vector(1, -1),
    new Vector(0, 1)
]);
```
See the [API reference for more details](../../reference/classes/polygon).

## Ellipse

The `Ellipse` is an elliptical representation of a shape, for example an oval or a circle. It is represented by a center position, dimensions, and a rotation. For example:
```typescript
const oval = new Ellipse(new Vector(4, 2), Math.PI / 4, new Vector(2, 2));
```
See the [API reference for more details](../../reference/classes/ellipse).
