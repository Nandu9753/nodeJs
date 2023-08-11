const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("This is a Home Page of local server");
});
app.get('/about',(req,res)=>{
    res.send("<h1>about as </h1>");
})

// post method
app.post('/post', (req, res) => {
    res.send('POST request to the homepage')
  })

app.all('/secret', (req, res, next) => {
    console.log('Accessing the secret section ...');
    next() // pass control to the next handler
})  

// This route path will match acd and abcd.

app.get('/ab?cd', (req, res) => {
    res.send('ab?cd');
  })

// This route path will match abcd, abbcd, abbbcd, and so on.
app.get('/ab+cd',(req,res) =>{
    res.send("ab+cd");
})

// This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
// first ab and last cd required
app.get('/ab*cd',(req,res) => {
    res.send("ab*cd");
})

// This route path will match /abe and /abcde.
app.get('/ab(cd)?e', (req, res) => {
    res.send('ab(cd)?e')
  })

// This route path will match anything with an “a” in it.
app.get(/a/, (req, res) => {
    res.send('/a/')
  })

//This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, and so on.
// this is route in last fly required
app.get(/.*fly$/, (req, res) => {
    res.send('/.*fly$/')
  });
  
// To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.
app.get('/user/:userId',(req,res) => {
    res.send(req.params);   // {"userId":"88"}
})

// listen port
app.listen(3000,()=>{
    console.log("Server run on port 3000");
});