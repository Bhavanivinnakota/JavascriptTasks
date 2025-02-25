function sum(num){
    let temp = num.toString();
    let arr = temp.split('');
    let result = 0
    for(let i=0;i<arr.length;i++){
         result += Number(arr[i]);
    }
    return result;
}
const number = 1234;
const sumDigits = sum.call(null,number);
console.log(sumDigits)