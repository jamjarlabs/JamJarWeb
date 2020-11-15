
# Class: FrustumCuller

FrustumCuller is used to cull shapes that are outside of another shape (not
colliding) - used in rendering to avoid unneccesary rendering.

## Hierarchy

* **FrustumCuller**

## Implements

* [IFrustumCuller](../interfaces/ifrustumculler.md)

## Index

### Constructors

* [constructor](frustumculler.md#constructor)

### Properties

* [collisionAlgorithm](frustumculler.md#private-collisionalgorithm)

### Methods

* [Cull](frustumculler.md#cull)

## Constructors

###  constructor

\+ **new FrustumCuller**(`collisionAlgorithm`: [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)): *[FrustumCuller](frustumculler.md)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`collisionAlgorithm` | [ICollisionAlgorithm](../interfaces/icollisionalgorithm.md) | new AABBAlgorithm() |

**Returns:** *[FrustumCuller](frustumculler.md)*

## Properties

### `Private` collisionAlgorithm

• **collisionAlgorithm**: *[ICollisionAlgorithm](../interfaces/icollisionalgorithm.md)*

## Methods

###  Cull

▸ **Cull**(`frustumPlaneShape`: [IShape](../interfaces/ishape.md), `shape`: [IShape](../interfaces/ishape.md)): *boolean*

*Implementation of [IFrustumCuller](../interfaces/ifrustumculler.md)*

Cull determines if a shape is within a frustum (defined by another
shape). Returns false if the shape is within the frustum and it should
not be culled, returns true if the shape is outside of the frustum and
should be culled.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`frustumPlaneShape` | [IShape](../interfaces/ishape.md) | Shape of the frustum (view/camera) |
`shape` | [IShape](../interfaces/ishape.md) | Shape to check if it is within the frustum  |

**Returns:** *boolean*
