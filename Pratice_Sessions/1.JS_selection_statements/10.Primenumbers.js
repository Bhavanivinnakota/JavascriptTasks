

function isPrime(a,b){
    var arr = []
    for(var i =a;i<=b;i++){
        if(checkPrime(i)){
            arr.push(i);
    }
}
    return arr;
}
function checkPrime(n){
    if(n<2){
        return false;
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
      return true
}

console.log(isPrime(10,20));