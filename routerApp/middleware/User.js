const userMidd = (req,res,next) =>{
    if(req.body.name === "admin"){
        console.log("this is middelware");
    }else{
        next();
    }
}

module.exports = {userMidd};