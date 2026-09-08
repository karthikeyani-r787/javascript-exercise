// Task : Find Top Student
// Find the student with the highest average.
const students = [
    { name: "Arun", marks: [80, 75, 90] },
    { name: "Priya", marks: [95, 88, 92] },
    { name: "Rahul", marks: [60, 70, 65] },
    { name: "Divya", marks: [40, 55, 45] }
];

const average = students.map(s => {
    const total = s.marks.reduce((total , mark) => total + mark , 0 )
        return {
        Name : s.name,
        average : Number((total / s.marks.length).toFixed(2))}
   });
const topStudent = average.reduce((top, student) => {
    return student.average > top.average ? student : top;
});

console.log(topStudent);
