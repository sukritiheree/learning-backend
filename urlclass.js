// const { URL } = require('url');//common js
// const myURL = new URL('https://example.com:8080/path/name?query=123#top');
// console.log(myURL.hostname); 
import http from 'http';
import { URL } from 'url';

http.createServer((req, res) => {
  const myURL = new URL(req.url, 'http://localhost:8080');
  const name = myURL.searchParams.get('name');

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name || 'guest'}!`);
}).listen(8080);