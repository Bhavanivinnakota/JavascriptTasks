function sum(...args){
    let res = 0;
    for (let i of args){
        res = res+i;
    }
   return res;
}


const result = sum(2,3,5);
console.log(result);