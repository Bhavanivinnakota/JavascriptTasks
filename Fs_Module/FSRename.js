const fs = require("fs");
fs.rename("home.html","changedhome.html",(error)=>{
    if(error){
        console.log("Failed to reanme the File name");
        console.log(error);
    }
    else{
        console.log("Renamed file name successfully...")
    }

})