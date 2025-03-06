const fs = require("fs");
fs.appendFile("info.txt","\nThis is second line.",(error)=>{
    if(error){
        console.log("Failed to add the content");
    }
    else{
        console.log("Added the content successfully....")
    }
})