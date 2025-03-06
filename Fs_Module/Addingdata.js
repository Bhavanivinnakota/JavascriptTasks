const fs = require("fs");
fs.readFile("htmlcode.html","utf-8",(error,data)=>{
    if(error){
        console.log("Failed to add the content in the file.....")
    }
    else{
        fs.appendFile("info.txt",data,(error)=>{
            if(error){
                console.log("Cant add the data");
            }
            else{
                console.log("Added data successfully..." )
            }
        });
        
    }
})