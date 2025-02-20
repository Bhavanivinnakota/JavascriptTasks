function updateProperty(obj,key,value){
           return {...obj, [key]: value};
}

const person = { name: "Eve", age: 35 };
console.log(updateProperty(person,"age",50));
console.log(person);