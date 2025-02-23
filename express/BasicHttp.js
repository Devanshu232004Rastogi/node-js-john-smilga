const http = require('http');

const server = http.createServer((req, res)=>{
res.end("holaa")
console.log("hit server")
})

server.listen(5000,()=>{
// console.log("hit server")
})