// Task : Find the names of students who scored 70 or above.
const students = [
    { name: "Arun", mark: 45 },
    { name: "Priya", mark: 85 },
    { name: "Rahul", mark: 72 },
    { name: "Divya", mark: 38 },
    { name: "Kumar", mark: 91 }
];

const result = students
    .filter(marks => marks.mark >= 70)
    .map(student => student.name);
console.log(result)