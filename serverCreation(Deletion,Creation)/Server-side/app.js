const http = require("http");
 const fs = require("fs");
let portnum = 7896;
const server = http.createServer((req,res)=>{
    res.setHeader("access-control-allow-origin","*")
    const urlpath=req.url
    if(urlpath==="/create"){
        fs.writeFile("products.jsx","",(error)=>{
           if(error){
            res.end("Failed to create file successfully...")
           }
           else{
            res.end("Created file successfully.......")
           }
        })
    }
    else if(urlpath==="/remove"){
        fs.unlink("products.jsx",(error)=>{
            if(error){
             res.end("Failed to create file successfully...")
            }
            else{
             res.end("Created file successfully.......")
            }
         })
    }
})

server.listen(portnum,()=>{
    console.log("Server Started.....!");
})