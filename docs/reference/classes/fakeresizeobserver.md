# Class: FakeResizeObserver

## Hierarchy

* [*Fake*](fake.md)

  ↳ **FakeResizeObserver**

## Implements

* *ResizeObserver*

## Table of contents

### Constructors

- [constructor](fakeresizeobserver.md#constructor)

### Methods

- [disconnect](fakeresizeobserver.md#disconnect)
- [observe](fakeresizeobserver.md#observe)
- [unobserve](fakeresizeobserver.md#unobserve)

## Constructors

### constructor

\+ **new FakeResizeObserver**(`reactors?`: [*Reactor*](reactor.md)[]): [*FakeResizeObserver*](fakeresizeobserver.md)

#### Parameters:

Name | Type |
:------ | :------ |
`reactors` | [*Reactor*](reactor.md)[] |

**Returns:** [*FakeResizeObserver*](fakeresizeobserver.md)

Inherited from: [Fake](fake.md)

## Methods

### disconnect

▸ **disconnect**(): *void*

**Returns:** *void*

___

### observe

▸ **observe**(`target`: Element, `options?`: ResizeObserverOptions): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | Element |
`options?` | ResizeObserverOptions |

**Returns:** *void*

___

### unobserve

▸ **unobserve**(`target`: Element): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`target` | Element |

**Returns:** *void*
