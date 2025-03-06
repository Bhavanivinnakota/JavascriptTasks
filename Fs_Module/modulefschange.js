const fs = require("fs");
fs.open("../../../products.tsx","w",(error)=>{
    if(error){
        console.log("Failed to Load the file");
        console.log(error);
    }
    else{
        console.log("Created file successfully!");
    }
})