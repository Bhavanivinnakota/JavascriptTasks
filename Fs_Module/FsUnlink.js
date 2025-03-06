const fs = require("fs");
fs.unlink("products.jsx",(error)=>{
        if(error){
            console.log("Failed to Delete the Fail!")
        }
        else{
            console.log("Successfully deleted the file...!")
        }
});