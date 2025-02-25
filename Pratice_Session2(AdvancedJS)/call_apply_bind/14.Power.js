
const obj = {
    val : 4
}
let getPower = function (exp){
    console.log(this.val ** exp);
}

const myval = getPower.bind(obj,2);
myval();