// update a file name
const fs = require('fs');
const updateFileName = () => {
    fs.rename('temp/newFile.txt',"temp/renameFile.txt",(err) =>{
        if(err != null){
            return err;
        }else{
            console.log("Rename File Success");
            return true; 
        }
    })
}
const  displayRenameFileData = async () => {
    const re = await updateFileName();
    return re;
}
let y = displayRenameFileData();
y.then(data => {
    fs.readFile('temp/updateFile.txt','utf-8',(err,data) => {
        if(err != null){
            console.log(err);
        }else{
            console.log("Rename File Data:",data); 
        }                  
    });
}).catch((err) => {
    console.log(err);
})