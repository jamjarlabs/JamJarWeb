# Tags

Tags exist as a property of entities, as defined in [Entity]. Tags are
designed to provide a simple mechanism for filtering/discriminating between
entities - without having to define an entirely new component just to
discriminate.

## Creating an Entity with a Tag

```typescript
const entityWithLayer = new Entity(messageBus, [ "test_tag" ]);
```

This creates an entity with a single tag called `test_tag`.

[Entity]:../../reference/classes/entity
[CollisionSystem]:../../reference/classes/collisionsystem