// Task : Dashboard Data
const users = [
    { name: "Arun", age: 22, active: true, salary: 30000 },
    { name: "Priya", age: 25, active: true, salary: 45000 },
    { name: "Rahul", age: 17, active: false, salary: 15000 },
    { name: "Divya", age: 28, active: true, salary: 60000 },
    { name: "Kumar", age: 19, active: false, salary: 25000 }
];
let activeUser = users.filter(u => u.active === true).length;
let inactiveUser = users.filter(u => u.active === false).length;
let sum = users.reduce((sum , i) => sum + i.salary , 0);
let averageSalary = sum / users.length;
let totalUser = activeUser + inactiveUser;
const final = {
    totalUser : totalUser,
    activeUser : activeUser,
    inactiveuser : inactiveUser,
    totalSalary : sum,
    averageSalary : averageSalary
}
console.log(final);

