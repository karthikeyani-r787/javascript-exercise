// Task : Copy and Update Object using spread operator
const student = {
    name: "Karthi",
    age: 21,
    department: "IT"
};
const result = {...student ,
    name : "Karthikeyani.R",
    age : 22
};
console.log("Original Object : ",student);
console.log("Copied Object :", result);