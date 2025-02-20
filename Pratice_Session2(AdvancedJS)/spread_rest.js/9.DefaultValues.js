function getUser({name , age=25}){
    return `Name: ${name}, Age: ${age}`;
}
const user = {name:"Bhavani"};
console.log(getUser(user));