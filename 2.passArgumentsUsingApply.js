const obj1 = {
    a : 10,
    getResult : function ([b,c,d]){
       let  result=(this.a)+b+c+d
       console.log(result)
    }
}
obj1.getResult([2,3,4])
const obj2 ={
    a : 4
}
obj1.getResult.call(obj2,[2,3,5])