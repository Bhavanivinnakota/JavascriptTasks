var fact = 1;

function factorial(num){
    for(i=1;i<=num;i++){
         fact= fact*i;
    }
    return fact;
}

console.log(factorial(5));