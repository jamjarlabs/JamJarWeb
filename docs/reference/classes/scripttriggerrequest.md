# Class: ScriptTriggerRequest<T\>

ScriptTriggerRequest contains all information for triggering a script to
execute. This includes the name of the script, a descriptor of how it was
triggered, any entity associated with the script, and any arbitrary data to
expose to the script.

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Constructors

- [constructor](scripttriggerrequest.md#constructor)

### Properties

- [data](scripttriggerrequest.md#data)
- [descriptor](scripttriggerrequest.md#descriptor)
- [entity](scripttriggerrequest.md#entity)
- [name](scripttriggerrequest.md#name)
- [MESSAGE\_TRIGGER\_SCRIPT](scripttriggerrequest.md#message_trigger_script)

## Constructors

### constructor

\+ **new ScriptTriggerRequest**<T\>(`name`: *string*, `descriptor`: *string*, `entity?`: [*IEntity*](../interfaces/ientity.md), `data?`: T): [*ScriptTriggerRequest*](scripttriggerrequest.md)<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`name` | *string* |
`descriptor` | *string* |
`entity?` | [*IEntity*](../interfaces/ientity.md) |
`data?` | T |

**Returns:** [*ScriptTriggerRequest*](scripttriggerrequest.md)<T\>

## Properties

### data

• `Optional` **data**: *undefined* \| T

Any arbitrary data to expose to the script.

___

### descriptor

• **descriptor**: *string*

Descriptor of the conditions the script was executed under, e.g.
"update"/"collision"

___

### entity

• `Optional` **entity**: *undefined* \| [*IEntity*](../interfaces/ientity.md)

Any entity associated with the execution of the script.

___

### name

• **name**: *string*

Name of the script to execute.

___

### MESSAGE\_TRIGGER\_SCRIPT

▪ `Readonly` `Static` **MESSAGE\_TRIGGER\_SCRIPT**: *trigger_script*= "trigger\_script"
