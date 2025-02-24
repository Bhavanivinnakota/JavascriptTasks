const person = {
    name: "Alex",
    greet: function(){
        return this.name
    }
};

const {greet} = person;
console.log(greet)