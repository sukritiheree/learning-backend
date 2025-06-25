# BACKEND DEVELOPMENT

## WHAT IS NODE.JS

Asynchronous, event driven, runtime(brings js out of browser-land) javascript designed to build scalable network applications.
It is

- not a peogramming lang
- not a library

```
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);
```

The **createServer()** method of http creates a new HTTP server and returns it.
Whenever a new request is received, the request event is called, providing two objects: a **request** (an http.IncomingMessage object) and a **response** (an http.ServerResponse object).

### importing and exporting

First, write **"type":"modules"** in package.json
two methods to import

- Named
  In main.js:
  export const a = 3;
  In server.js:
  import {a} from ./main.js
- Default
  In main.js:
  export let _obj_ = {
  x:5,
  y:7
  }
  In server.js:
  import _blabla_ from ./main.js

_we can give it any name_

OTHERWISE WITHOUT CHANGING TYPE
to import write:
const a = require("jsfilename");
to export write:
module.exports = {
a:1,
b:2
}

TO EXPORT INTO HTML FILE
use script tag and give type as module

### FILE SYSTEM MODULE
nested readfile and writefile functions can lead to call back hell, therefore we use promises

### URL CLASS
**URL Constructor**
new URL(input, [base])
-input → the full URL string or a relative path
-base → (optional) base URL to resolve relative input
*The URL class only works with absolute URLs — if you're using relative paths, you must pass a base.*

**Query Parameters with searchParams**
const url = new URL('https://example.com/search?q=dogs&type=funny');

console.log(url.searchParams.get('q'));     // 'dogs'
console.log(url.searchParams.get('type'));  // 'funny'

url.searchParams.append('limit', '10');
console.log(url.href);  // https://example.com/search?q=dogs&type=funny&limit=10

### Event Emitter
Node.js is event-driven, which means it can listen to and emit named events.
The EventEmitter class is at the core of this system. It allows you to:
-Create custom events
-Listen for those events
-Trigger actions when they occur

const EventEmitter = require('events'); // CommonJS
const myEmitter = new EventEmitter(); //creating instance
myEmitter.on('eventName', (callback) => {
  console.log('Hello there!');
});
myEmitter.emit('greet'); //triggering the event

**.once() vs .on()**
myEmitter.once('launch', () => {
  console.log('Launching... only once');
});

myEmitter.emit('launch');
myEmitter.emit('launch'); // Ignored

*You can even create custom classes that extend EventEmitter:*
