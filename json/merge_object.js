// Task : Merge both objects using ....
const personal = {
    name: "Karthi",
    age: 21
};

const education = {
    degree: "B.Tech",
    department: "IT"
};
 
const result = {...personal , ...education};
console.log(result);