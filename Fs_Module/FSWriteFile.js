const fs = require("fs");
    fs.writeFile("products.jsx","Hello Bhavani",(error)=>{
        if(error){
            console.log("Failed to create the file");
        }
        else{
            console.log("Created File Succesfully....");
        }
    });