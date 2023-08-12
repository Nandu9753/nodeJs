const express = require('express');
const app = express();
const bodyParser  = require('body-parser');
const port  = 3000;
const productRoute =  require('./routes/Product');

app.use(bodyParser.json());
app.use(productRoute);

// server start
app.listen(port,()=>{
    console.log("Server run on:",port);
});