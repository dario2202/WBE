/**
 *  WBE-Demo
 * 
 */
 const http = require('http');

 const hostname = '127.0.0.1';
 const port = 3000;
 
 const server = http.createServer((req, res) => {
     res.statusCode = 200
     res.setHeader('Content-Type', 'text/plain')
     console.log(isPrime(6),isPrime(7),isPrime(1001))
     res.end('Hello, World!\n')
 })
 
 const isPrime = function(x){
     if(x>1000) throw "to big"
     for(i in (x-1)) x%i == 0 ? false : true
 }
 
 server.listen(port, hostname, () => {
     console.log(`Server running at http://${hostname}:${port}/`)
 })