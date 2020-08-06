
# Class: ScriptTriggerRequest <**T**>

ScriptTriggerRequest contains all information for triggering a script to
execute. This includes the name of the script, a descriptor of how it was
triggered, any entity associated with the script, and any arbitrary data to
expose to the script.

## Type parameters

▪ **T**

## Hierarchy

* **ScriptTriggerRequest**

## Index

### Constructors

* [constructor](scripttriggerrequest.md#constructor)

### Properties

* [data](scripttriggerrequest.md#optional-data)
* [descriptor](scripttriggerrequest.md#descriptor)
* [entity](scripttriggerrequest.md#optional-entity)
* [name](scripttriggerrequest.md#name)
* [MESSAGE_TRIGGER_SCRIPT](scripttriggerrequest.md#static-message_trigger_script)

## Constructors

###  constructor

\+ **new ScriptTriggerRequest**(`name`: string, `descriptor`: string, `entity?`: [IEntity](../interfaces/ientity.md), `data?`: T): *[ScriptTriggerRequest](scripttriggerrequest.md)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`descriptor` | string |
`entity?` | [IEntity](../interfaces/ientity.md) |
`data?` | T |

**Returns:** *[ScriptTriggerRequest](scripttriggerrequest.md)*

## Properties

### `Optional` data

• **data**? : *T*

Any arbitrary data to expose to the script.

___

###  descriptor

• **descriptor**: *string*

Descriptor of the conditions the script was executed under, e.g.
"update"/"collision"

___

### `Optional` entity

• **entity**? : *[IEntity](../interfaces/ientity.md)*

Any entity associated with the execution of the script.

___

###  name

• **name**: *string*

Name of the script to execute.

___

### `Static` MESSAGE_TRIGGER_SCRIPT

▪ **MESSAGE_TRIGGER_SCRIPT**: *"trigger_script"* = "trigger_script"
