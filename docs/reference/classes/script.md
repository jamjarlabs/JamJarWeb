
# Class: Script

Script allows to add a script to be executed on a trigger. This is attached
to an entity that will be available to the script at runtime.

## Hierarchy

* [Component](component.md)

  ↳ **Script**

## Index

### Constructors

* [constructor](script.md#constructor)

### Properties

* [key](script.md#key)
* [script](script.md#script)
* [trigger](script.md#trigger)
* [KEY](script.md#static-key)
* [MESSAGE_ADD](script.md#static-message_add)
* [MESSAGE_REMOVE](script.md#static-message_remove)

## Constructors

###  constructor

\+ **new Script**(`script`: string, `trigger`: [ScriptTrigger](../enums/scripttrigger.md)): *[Script](script.md)*

*Overrides [Component](component.md).[constructor](component.md#constructor)*

**Parameters:**

Name | Type |
------ | ------ |
`script` | string |
`trigger` | [ScriptTrigger](../enums/scripttrigger.md) |

**Returns:** *[Script](script.md)*

## Properties

###  key

• **key**: *string*

*Inherited from [Component](component.md).[key](component.md#key)*

___

###  script

• **script**: *string*

script is the name of the script to execute.

___

###  trigger

• **trigger**: *[ScriptTrigger](../enums/scripttrigger.md)*

trigger is the script trigger to cause the script to execute.

___

### `Static` KEY

▪ **KEY**: *"script"* = "script"

___

### `Static` MESSAGE_ADD

▪ **MESSAGE_ADD**: *"component_add"* = "component_add"

*Inherited from [Component](component.md).[MESSAGE_ADD](component.md#static-message_add)*

___

### `Static` MESSAGE_REMOVE

▪ **MESSAGE_REMOVE**: *"component_remove"* = "component_remove"

*Inherited from [Component](component.md).[MESSAGE_REMOVE](component.md#static-message_remove)*
