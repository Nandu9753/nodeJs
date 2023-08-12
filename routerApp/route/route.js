const express = require('express'); 
const router = new express.Router();
const {userAdd} = require('../controller/User');
const {userMidd} = require('../middleware/User');


router.get('/user',(req,res)=>{
    res.send("this is users list");
});
router.post('/user',userMidd,userAdd);


module.exports = router;