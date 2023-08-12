const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./route/route');
const port =  3000;
app.use(bodyParser.json());
app.use(router);
app.listen(port,()=>{
    console.log("Server run on:",port);
});