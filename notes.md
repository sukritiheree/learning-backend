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