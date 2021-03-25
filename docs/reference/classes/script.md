# Class: Script

Script allows to add a script to be executed on a trigger. This is attached
to an entity that will be available to the script at runtime.

## Hierarchy

* [*Component*](component.md)

  ↳ **Script**

## Table of contents

### Constructors

- [constructor](script.md#constructor)

### Properties

- [key](script.md#key)
- [script](script.md#script)
- [trigger](script.md#trigger)
- [KEY](script.md#key)
- [MESSAGE\_ADD](script.md#message_add)
- [MESSAGE\_REMOVE](script.md#message_remove)

### Methods

- [Free](script.md#free)

## Constructors

### constructor

\+ **new Script**(`script`: *string*, `trigger`: [*UPDATE*](../enums/scripttrigger.md#update)): [*Script*](script.md)

#### Parameters:

Name | Type |
:------ | :------ |
`script` | *string* |
`trigger` | [*UPDATE*](../enums/scripttrigger.md#update) |

**Returns:** [*Script*](script.md)

Inherited from: [Component](component.md)

## Properties

### key

• **key**: *string*

Inherited from: [Component](component.md).[key](component.md#key)

___

### script

• **script**: *string*

script is the name of the script to execute.

___

### trigger

• **trigger**: [*UPDATE*](../enums/scripttrigger.md#update)

trigger is the script trigger to cause the script to execute.

___

### KEY

▪ `Readonly` `Static` **KEY**: *script*= "script"

___

### MESSAGE\_ADD

▪ `Readonly` `Static` **MESSAGE\_ADD**: *component_add*= "component\_add"

Inherited from: [Component](component.md).[MESSAGE_ADD](component.md#message_add)

___

### MESSAGE\_REMOVE

▪ `Readonly` `Static` **MESSAGE\_REMOVE**: *component_remove*= "component\_remove"

Inherited from: [Component](component.md).[MESSAGE_REMOVE](component.md#message_remove)

## Methods

### Free

▸ **Free**(): *void*

**Returns:** *void*

Inherited from: [Component](component.md)
