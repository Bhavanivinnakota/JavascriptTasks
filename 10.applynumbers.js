const numbers = [2,3,4];
function multiply() {
let pro = 1;
for(let i=0;i<this.length;i++){
    pro = pro* this[i];
}
return pro;
}

const result = multiply.apply(numbers);
console.log(result);