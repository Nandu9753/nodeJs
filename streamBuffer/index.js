const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res)=>{
    const rstream = fs.createReadStream('file.txt');
    rstream.on('data',(data)=>{
        res.write(data);
    });
    rstream.on('end',()=>{
        res.end()
    });
    rstream.on('error',(data)=>{
        res.writeHead(403,{'Content-Type': 'text/html'})
        res.end("File Not Found")
    })
   //  rstream.pipe(res);  // this is one line use for read a data
});
server.listen(3000,'127.0.0.1',() =>{
    console.log("server start on 3000");
});