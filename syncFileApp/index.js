// import fs core module
const fs = require('fs');

// create a new folder
//fs.mkdirSync('temp');

// Create a New file and store a data
fs.writeFileSync('temp/newFile.txt',"New file created");

// created time read data
let data = fs.readFileSync('temp/newFile.txt','utf-8')
console.log('New Read data:', data);

// update a file data
fs.appendFileSync('temp/newFile.txt'," and Updated Data");

// update data
data = fs.readFileSync('temp/newFile.txt','utf-8');
console.log("Updated Data:",data);

// rename file 
fs.renameSync('temp/newFile.txt','temp/renameFile.txt');

// rename file data
data = fs.readFileSync('temp/renameFile.txt','utf-8');
console.log("Rename File Data:",data);

// Delete the file
//fs.unlinkSync('temp/renameFile.txt');

// Remove the 'temp' folder
//fs.rmdirSync('temp');