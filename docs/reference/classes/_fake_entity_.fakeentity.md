
# Class: FakeEntity

## Hierarchy

* [Fake](_fake_fake_.fake.md)

  ↳ **FakeEntity**

## Implements

* [IEntity](../interfaces/_entity_ientity_.ientity.md)

## Index

### Constructors

* [constructor](_fake_entity_.fakeentity.md#constructor)

### Properties

* [id](_fake_entity_.fakeentity.md#id)
* [scene](_fake_entity_.fakeentity.md#optional-scene)

### Methods

* [Add](_fake_entity_.fakeentity.md#add)
* [Destroy](_fake_entity_.fakeentity.md#destroy)
* [Remove](_fake_entity_.fakeentity.md#remove)

## Constructors

###  constructor

\+ **new FakeEntity**(`id`: number, `scene?`: [Scene](_scene_scene_.scene.md), `reactors`: [Reactor](_fake_reactor_.reactor.md)[]): *[FakeEntity](_fake_entity_.fakeentity.md)*

*Overrides [Fake](_fake_fake_.fake.md).[constructor](_fake_fake_.fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`id` | number | - |
`scene?` | [Scene](_scene_scene_.scene.md) | - |
`reactors` | [Reactor](_fake_reactor_.reactor.md)[] | [] |

**Returns:** *[FakeEntity](_fake_entity_.fakeentity.md)*

## Properties

###  id

• **id**: *number*

*Implementation of [IEntity](../interfaces/_entity_ientity_.ientity.md).[id](../interfaces/_entity_ientity_.ientity.md#id)*

___

### `Optional` scene

• **scene**? : *[Scene](_scene_scene_.scene.md)*

*Implementation of [IEntity](../interfaces/_entity_ientity_.ientity.md).[scene](../interfaces/_entity_ientity_.ientity.md#optional-scene)*

## Methods

###  Add

▸ **Add**(`component`: [Component](_component_component_.component.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`component` | [Component](_component_component_.component.md) |

**Returns:** *void*

___

###  Destroy

▸ **Destroy**(): *void*

**Returns:** *void*

___

###  Remove

▸ **Remove**(`key`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *void*
