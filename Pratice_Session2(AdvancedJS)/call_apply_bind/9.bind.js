const obj = {
    name : "John",
}
let getName = function (){
    setTimeout((value) => {
        console.log("Hello, " + this.name)
    }, 3000);
}
const deatils = getName.bind(obj);
deatils();