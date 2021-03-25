# Class: FrustumCuller

FrustumCuller is used to cull shapes that are outside of another shape (not
colliding) - used in rendering to avoid unneccesary rendering.

## Implements

* [*IFrustumCuller*](../interfaces/ifrustumculler.md)

## Table of contents

### Constructors

- [constructor](frustumculler.md#constructor)

### Methods

- [Cull](frustumculler.md#cull)

## Constructors

### constructor

\+ **new FrustumCuller**(`collisionAlgorithm?`: [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md)): [*FrustumCuller*](frustumculler.md)

#### Parameters:

Name | Type |
:------ | :------ |
`collisionAlgorithm` | [*ICollisionAlgorithm*](../interfaces/icollisionalgorithm.md) |

**Returns:** [*FrustumCuller*](frustumculler.md)

## Methods

### Cull

▸ **Cull**(`frustumPlaneShape`: [*IShape*](../interfaces/ishape.md), `shape`: [*IShape*](../interfaces/ishape.md)): *boolean*

Cull determines if a shape is within a frustum (defined by another
shape). Returns false if the shape is within the frustum and it should
not be culled, returns true if the shape is outside of the frustum and
should be culled.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`frustumPlaneShape` | [*IShape*](../interfaces/ishape.md) | Shape of the frustum (view/camera)   |
`shape` | [*IShape*](../interfaces/ishape.md) | Shape to check if it is within the frustum    |

**Returns:** *boolean*

Implementation of: [IFrustumCuller](../interfaces/ifrustumculler.md)
