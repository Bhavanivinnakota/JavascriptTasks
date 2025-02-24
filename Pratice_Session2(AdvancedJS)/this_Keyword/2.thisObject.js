const person = {
    name : "Alice",
    age : 25,
    greet : function(){
        return this.age;  //this  is going to refer the object 
    }
}

console.log(person.greet())