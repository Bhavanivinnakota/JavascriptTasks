const companies = [
    {
    id: 1,
    name: 'TechCorp',
    details: {
    address: {
    street: '123 Elm St',
    city: 'New York',
    },
    },
    },
    {
    id: 2,
    name: 'SoftSystems',
    details: {
    address: {
    street: '456 Pine St',
    city: 'San Francisco',
    },
    },
    },
    ];

var res = companies.forEach(element=>{
    if(element.name==="TechCorp"){
        console.log(element.details.address.city)
    }
})



// var {details:{address:{street,city}}} = companies[1];
// console.log(city);