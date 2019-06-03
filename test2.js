var http = require("http");
var colors = require('colors');
http.createServer((req,res)=>{
    res.writeHead(200, {'Cotent-Type': 'calibri'});
    res.end('hellwo!!');
}).listen(8080);
var express = require('express');
console.log('Server running at http://127.0.0.1:8080/');

console.log('First some yellow text'.yellow);