const rectangle ={
    length : 10,
    width : 50
}
function calculate(){
    return this.length * this.width;
}
const area = calculate.call(rectangle);
console.log(area)