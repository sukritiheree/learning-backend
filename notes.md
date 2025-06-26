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
```
const url = new URL('https://example.com/search?q=dogs&type=funny');

console.log(url.searchParams.get('q'));     // 'dogs'
console.log(url.searchParams.get('type'));  // 'funny'

url.searchParams.append('limit', '10');
console.log(url.href);  // https://example.com/search?q=dogs&type=funny&limit=10
```

### Event Emitter
Node.js is event-driven, which means it can listen to and emit named events.
The EventEmitter class is at the core of this system. It allows you to:
-Create custom events
-Listen for those events
-Trigger actions when they occur
```
const EventEmitter = require('events'); // CommonJS
const myEmitter = new EventEmitter(); //creating instance
myEmitter.on('eventName', (callback) => {
  console.log('Hello there!');
});
myEmitter.emit('greet'); //triggering the event
```

**.once() vs .on()**
```
myEmitter.once('launch', () => {
  console.log('Launching... only once');
});

myEmitter.emit('launch');
myEmitter.emit('launch'); // Ignored
```

*You can even create custom classes that extend EventEmitter:*

## EXPRESS JS
### INTRODUCTION TO FRAMEWORK
A framework is a pre-written, reusable structure of code that helps you build software faster and more efficiently.
**Example**
If you’re building a website:
Library (e.g. React):
-You say, “I want a button here,” so you write ```<Button />.```
-You decide how routing, data fetching, styling all work.

Framework (e.g. Next.js):
-It says: “Put your pages in the pages/ folder, I’ll handle routing.”
-It decides folder structure, SSR/SSG rules, build system.

You still use React, but it controls the bigger picture.

### INTRODUCTION TO EXPRESS
Express is a minimal and flexible backend framework for Node.js that makes it easier to handle routing, server setup, middleware, and more.

```
const PORT = process.env.PORT || 3000;
```
**Why not hardcode?**
-some hosted environments (like Heroku, Vercel) force you to use a specific port.
-process.env.PORT allows flexibility, fallback to 3000 locally.

```
app.get('/blog/:slug', (req,res))=>{
  res.send("hello ${req.params.slug})
}
```
:slug allows us to give any value to url parameters without having to change it repeatedly 
just open the folder and in the url add /intro-to-hhii or anything this value after "/" will beecome the value of slug
this slug object can be named anything and can be used multiple times

**STATIC FILE**
```
app.use(express.static('public'))
```
it is a middleware used to make a file public

**ROUTES**
BASIC ROUTE STRUCTURE: app.METHOD(PATH, HANDLER)
*Express matches routes in order — it stops at the first match.*
The '*' route catches everything that didn’t match earlier routes.
Think of it like a fallback or 404 route.

**Sending Files Instead of Text**
```
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

```

get request has a limit therefore only queries with less characters can be sent using get request as that limit gets finished quickly, for detailed queries and sensitive data we use **post** request