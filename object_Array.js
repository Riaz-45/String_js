const employees = [
    {name: 'Abdul', designation: 'Developer', salary: 25000},
    {name: 'Rakib hossain', designation: 'Digital Marketing', salary: 20000},
    {name: 'Nabila', designation: 'Web Dev', salary: 26000}
]

// console.log(employees[1].salary);
// console.log(employees[2].designation);

for(const employee of employees){
    // console.log(employee.salary);
}
for(const emp of employees){
    const person = emp;
    const personInfo = person.name + ': ' + person.salary;
    console.log(personInfo)
}