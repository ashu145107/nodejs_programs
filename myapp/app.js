const http = require('http')
const express = require('express')
const fs =require('fs')
http.createServer((req,res)=>{
    const filename=fs.readFileSync('./student.json',"utf-8")
    console.log(filename)
    console.log(JSON.parse(filename))
    res.end(filename)
}).listen(8080);
console.log("server is running pls check 'http://127.0.0.1:8080'")