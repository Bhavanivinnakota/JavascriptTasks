const modules = require("fs");
modules.rename("fsmodule.js","modulefschange.js",(error)=>{
    if(error){
        console.log("Failed to rename");
    }
    else{
        console.log("Successfully renamed the file")
    }
})