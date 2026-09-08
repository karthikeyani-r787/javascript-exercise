// Task : Student Result System {Calculate each student's average}
const students = [
    { name: "Arun", marks: [80, 75, 90] },
    { name: "Priya", marks: [95, 88, 92] },
    { name: "Rahul", marks: [60, 70, 65] },
    { name: "Divya", marks: [40, 55, 45] }
];

const average = students
        .map(s => {
        const total = s.marks.reduce((total , i) => {
            total + i.marks,0
        return total;
    })
    return {
        name : s.name,
        Average : Number((total / s.marks.length).toFixed(2))
    };
        })
console.log(average);