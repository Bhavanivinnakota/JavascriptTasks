const fs = require("fs");
fs.readFile("htmlcode.html","utf-8",(data)=>{
    if(data){
        console.log("successfully read  the File ");
        console.log(data);
    }
    else{
        console.log("Failed to read the data")
    }
})