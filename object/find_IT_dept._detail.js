// TaskS : Find:
// 1. All IT employees
// 2. IT employee names
// 3. Total IT salary
// 4. Highest-paid IT employee
// 5. Average IT salary
// Only use: filter(), map(), reduce().
const employees = [
    { name: "A", department: "IT", salary: 40000 },
    { name: "B", department: "HR", salary: 30000 },
    { name: "C", department: "IT", salary: 50000 },
    { name: "D", department: "Sales", salary: 35000 },
    { name: "E", department: "IT", salary: 60000 }
];

// 1. All IT employees
let it = employees.filter(e => e.department === "IT");

// 2. IT employee names
let names = it.map(e => e.name);

// 3. Total IT salary
let total = it.reduce((sum, e) => sum + e.salary, 0);

// 4. Highest-paid IT employee
let highest = it.reduce((max, e) =>
    e.salary > max.salary ? e : max
);

// 5. Average IT salary
let average = total / it.length;

const result = {
    allITEmployees: it,
    ITNames: names,
    totalSalary: total,
    highestPaid: highest,
    averageSalary: average
};

console.log(result);