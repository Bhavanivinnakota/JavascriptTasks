function extraction({name,...args}){
    return `Name : ${name},others: ${JSON.stringify(args)}`

}
const user = { name: "David", age: 40, city: "LA", job: "Engineer" };
console.log(extraction(user));