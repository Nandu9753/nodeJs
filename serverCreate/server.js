const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.end('This is a Home page');
    }else if(req.url == "/about"){
        res.end('This is a About page');
    }else if(req.url == "/contact"){
        res.end('This is a Contact page');
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end("404 Page Not Found");
    }
});
server.listen(3000,'127.0.0.1',() =>{
    console.log("server start on 3000");
});