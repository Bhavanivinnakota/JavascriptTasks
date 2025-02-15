const numbers = [10, 25, 40, 5, 60];
let temp=[];
for (let i=0;i<numbers.length;i++){
if(numbers[i]<numbers[i+1]){
    temp=numbers[i+1];
}
}
console.log(temp);