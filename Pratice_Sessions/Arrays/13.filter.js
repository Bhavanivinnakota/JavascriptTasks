const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var res = numbers.filter(function(element){
    return element%2==0;
});
console.log(res);