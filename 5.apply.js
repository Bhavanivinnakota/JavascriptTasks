const arr1 = [1,2,3];
const arr2 = [4,5,6];
let getArray = function (arr){
    console.log("array " + arr)
}
const mergedArray = [...arr1,...arr2]
getArray.apply(null,[mergedArray]);
