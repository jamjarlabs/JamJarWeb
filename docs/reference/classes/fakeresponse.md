
# Class: FakeResponse

## Hierarchy

* [Fake](fake.md)

  ↳ **FakeResponse**

## Implements

* Response

## Index

### Constructors

* [constructor](fakeresponse.md#constructor)

### Properties

* [body](fakeresponse.md#body)
* [bodyUsed](fakeresponse.md#bodyused)
* [headers](fakeresponse.md#headers)
* [ok](fakeresponse.md#ok)
* [redirected](fakeresponse.md#redirected)
* [status](fakeresponse.md#status)
* [statusText](fakeresponse.md#statustext)
* [trailer](fakeresponse.md#trailer)
* [type](fakeresponse.md#type)
* [url](fakeresponse.md#url)

### Methods

* [arrayBuffer](fakeresponse.md#arraybuffer)
* [blob](fakeresponse.md#blob)
* [clone](fakeresponse.md#clone)
* [formData](fakeresponse.md#formdata)
* [json](fakeresponse.md#json)
* [text](fakeresponse.md#text)

## Constructors

###  constructor

\+ **new FakeResponse**(`reactors`: [Reactor](reactor.md)[]): *[FakeResponse](fakeresponse.md)*

*Inherited from [Fake](fake.md).[constructor](fake.md#constructor)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`reactors` | [Reactor](reactor.md)[] | [] |

**Returns:** *[FakeResponse](fakeresponse.md)*

## Properties

###  body

• **body**: *ReadableStream‹Uint8Array› | null*

___

###  bodyUsed

• **bodyUsed**: *boolean*

___

###  headers

• **headers**: *Headers*

___

###  ok

• **ok**: *boolean*

___

###  redirected

• **redirected**: *boolean*

___

###  status

• **status**: *number*

___

###  statusText

• **statusText**: *string*

___

###  trailer

• **trailer**: *Promise‹Headers›*

___

###  type

• **type**: *ResponseType*

___

###  url

• **url**: *string*

## Methods

###  arrayBuffer

▸ **arrayBuffer**(): *Promise‹ArrayBuffer›*

**Returns:** *Promise‹ArrayBuffer›*

___

###  blob

▸ **blob**(): *Promise‹Blob›*

**Returns:** *Promise‹Blob›*

___

###  clone

▸ **clone**(): *Response*

**Returns:** *Response*

___

###  formData

▸ **formData**(): *Promise‹FormData›*

**Returns:** *Promise‹FormData›*

___

###  json

▸ **json**(): *Promise‹any›*

**Returns:** *Promise‹any›*

___

###  text

▸ **text**(): *Promise‹string›*

**Returns:** *Promise‹string›*
