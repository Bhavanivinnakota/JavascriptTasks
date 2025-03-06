const fs = require("fs");
fs.open("demo.txt","w",(error)=>{
    if(error){
        console.log("Failed to create the File!!!");
    }
    else{
        console.log("File created Successfully");
    }
});