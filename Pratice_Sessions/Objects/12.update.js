const employees = [
    {
    id: 1,
    name: 'Alice',
    details: {
    salary: 50000,
    role: 'Developer',
    },
    },
    {
    id: 2,
    name: 'Bob',
    details: {
    salary: 60000,
    role: 'Manager',
    },
    },
    ];
employees.forEach(employee=>{
   if( employee.name==='Bob'){
    employee.details.salary = 750000;
   }
});
console.log(employees);