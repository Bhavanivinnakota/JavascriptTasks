const fs = require("fs");
fs.readFile("htmlcode.html","utf-8",(error,data)=>{
    if(error){
        console.log("Failed to load the data");
    }
    else{
        console.log(data);
    }
})