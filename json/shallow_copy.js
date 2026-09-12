// Task : Understand Shallow Copy
const student = {
    name: "Karthi",
    marks: {
        maths: 90,
        science: 85
    }
};
console.log("Original Object :",student);
const copy = { ...student };
console.log("Copied Object : ",copy);
copy.name = "Priya";
copy.marks.maths = 100;
console.log("After Modifing copy : ",copy);
console.log("Original Object :",student);

console.log(student.name);
console.log(student.marks.maths);// the nested marks object is not copied; its reference is copied.


