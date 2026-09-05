// Task : Filter by Age
const people = [
    { name: "Arun", age: 17 },
    { name: "Priya", age: 22 },
    { name: "Rahul", age: 19 },
    { name: "Divya", age: 15 },
    { name: "Kumar", age: 25 }
];

const age = people.filter(p=>p.age>=18);
console.log(age);
