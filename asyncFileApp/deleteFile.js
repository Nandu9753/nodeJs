const fs = require('fs');

// delete a file 

fs.unlink('temp/renameFile.txt',(err) => {
    if(err != null){
        console.log(err);
    }else{
        console.log("File Delete Successfull"); 
    }
})

//delete a folder
fs.rmdir('temp',(err) => {
    if(err != null){
        console.log(err);
    }else{
        console.log("Folder Delete Successfull"); 
    }
});