	<a name="SomeClass"></a>
## SomeClass : <code>AnotherClass</code>
AnotherClass does a very important job

**Kind**: global variable  

	<a name="channel-reply"></a>
## channel-reply(content)
open application modal

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>Object</code> | modal content definition |



###SomeClass.initialiseChannel
Initialise the application channel

**Kind**: static method of <code>[SomeClass](#SomeClass)</code>  
**Channel**:   
**Example**  
```js
Radio.channel('app').request('getRouter')
         Returns the app router
```
**Example**  
```js
Radio.channel('app').request('openModal', )
         Opens the modal @see SomeClass#openModal
```

	<a name="SomeClass"></a>
## SomeClass : <code>[SomeClass](#SomeClass)</code>
SomeClass very important

**Kind**: global variable  


###SomeClass.initialiseChannel
Initialise the application channel

**Kind**: static method of <code>[SomeClass](#SomeClass)</code>  
**Channel**: link  
**Example**  
```js
Radio.channel('app').request('getRouter')
         Returns the app router
```
**Example**  
```js
Radio.channel('app').request('openModal', )
         Opens the modal see [SomeClass#openModal](SomeClass#openModal)
```
###SomeClass.openModal
open application modal

**Kind**: static method of <code>[SomeClass](#SomeClass)</code>  
**Channel**: reply  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>Object</code> | modal content definition |

