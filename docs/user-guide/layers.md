# Layers

Layers exist as a property of entities, as defined in [Entity]. Layers are
designed to help group entities together, to apply group level discrimination
between entities. 

Systems may provide functionality for layers, grouping entities based on them -
for example the [CollisionSystem] allows defining layers that should collide
with eachother, allowing filtering of entities and only allowing collisions
between defined layers.

## Creating an Entity with a Layer

```typescript
const entityWithLayer = new Entity(messageBus, undefined, [ "test_layer" ]);
```

This creates an entity with a single layer called `test_layer`.

[Entity]:../../reference/classes/entity
[CollisionSystem]:../../reference/classes/collisionsystem