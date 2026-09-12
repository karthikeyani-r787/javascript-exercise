// Task : Copy and Update Object using deep copy method
const student = {
    name: "Karthi",
    age: 21,
    department: "IT"
};
const result = JSON.parse(JSON.stringify(student));
console.log("Original Object : ",student);
console.log("Object Copying...")
console.log("Before Modify :",result);
result.name = "Karthikeyani.R";
result.age = 22;
console.log("Modify Copied Object...")
console.log("After modify : ",result);
console.log("Original Object : ",student);
