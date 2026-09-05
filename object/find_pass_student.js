//Task : Passing Students
const students = [
    { name: "Arun", mark: 45 },
    { name: "Priya", mark: 82 },
    { name: "Rahul", mark: 35 },
    { name: "Divya", mark: 91 }
];
const pass_student = students.filter(student=>student.mark>=50);
console.log(pass_student);