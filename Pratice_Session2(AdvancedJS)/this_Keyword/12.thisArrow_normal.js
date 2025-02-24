const person = {
    name : "Ravi",
    greet : function (){
        return this.name;
    },
    details : () =>{
        return this.name
    }
}

console.log(person.greet())
console.log(person.details())