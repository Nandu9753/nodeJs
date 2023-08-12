const userAddModel = require('../model/User');
const userAdd = (req,res) =>{
    const result = userAddModel(req.body);
    res.send("succcess");
}

module.exports = {  userAdd }