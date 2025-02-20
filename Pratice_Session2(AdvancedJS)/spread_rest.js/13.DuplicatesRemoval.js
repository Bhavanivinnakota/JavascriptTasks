function duplicates(arr){
       return [...new Set(arr)];
}

const arr = [1,2,2,3,3,3,4,4,5,5,5,6];
console.log(duplicates(arr));