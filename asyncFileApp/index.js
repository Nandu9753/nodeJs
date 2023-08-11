const fs = require('fs');

// create a new folder
fs.mkdir("temp",(err) => {
    console.log(err);
});

// create a new file and store a data
fs.writeFile('temp/newFile.txt',"New Data Store",(err) => {
    if(err != null){
        console.log(err);
    }else{
        console.log("New File Created");
    } 
});

// Read a  File Data
fs.readFile('temp/newFile.txt','utf-8',(err,data) => {
    if(err != null){
        console.log(err);
    }else{
        console.log("New Data:",data); 
    }                  
});

// update a file data
const updateFile =
    new Promise((resolve,reject) => {
         fs.appendFile("temp/newFile.txt","Update File Data",(err) =>{    
            if(err != null){
                reject(err);
            }else{
                resolve("Successfull Update"); 
            }
});
});

// Read a  File Updated Data

updateFile.then(data =>{
console.log(data)    
fs.readFile('temp/newFile.txt','utf-8',(err,data) => {
    if(err != null){
        console.log(err);
    }else{
        console.log("Update Data:",data); 
    }                  
});
}).catch(err => {
    console.log(err);
}).then({

});




