var arr = [2,,5,8,11,4];
sum =0;
for(let  i  of arr){
    if(i%2 === 0){
        sum = sum+i;
    }
}

console.log(sum);