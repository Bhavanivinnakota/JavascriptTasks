const person = {
    name : "Alice",
    getName : function (){
        console.log("Hello, my name is " + this.name)
    }
}
person.getName()
const person2 = {
    name: "Bob"
}
person.getName.call(person2);