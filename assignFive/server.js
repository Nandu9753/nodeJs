const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,"{'Content-Type': 'text/html'}");
    res.write("Welcome To NodeJs Environment");
    res.end();
});
server.listen(3000,'127.0.0.1',() =>{
    console.log("server start on 3000");
});