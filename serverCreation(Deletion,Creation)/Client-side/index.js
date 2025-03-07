function createFile(){
     var promisedata = fetch("http://localhost:7896/create");
     promisedata.then((successdata)=>{
       return successdata.json();
       
     }).then((data)=>{
        console.log(data);
        document.querySelector("p").innerText=data;
     }).catch((errordata)=>{
        console.log(errordata)
     })
}
function removeFile(){
     alert("Removed");
     var promisedata = fetch("http://localhost:7896/remove");
     promisedata.then((successdata)=>{
       return successdata.json();
       
     }).then((data)=>{
        console.log(data);
        document.querySelector("p").innerText=data;
     }).catch((errordata)=>{
        console.log(errordata);
     })
}