const student = {
    name: "Karthi",
    age: 21,
    skills: ["HTML", "CSS", "JavaScript"],
    marks: {
        maths: 90,
        programming: 95
    }
};

// Create a shallow copy
const shallowcopy = {
    ...student,
    skills: [...student.skills, "React"]
};

console.log("Shallow Copy:", shallowcopy);

// Create a deep copy
const deepcopy = JSON.parse(JSON.stringify(student));

deepcopy.marks.programming = 100;

console.log("Deep Copy:", deepcopy);

// Convert Object → JSON
const json = JSON.stringify(deepcopy);

console.log("JSON:", json);

// Convert JSON → Object
const object = JSON.parse(json);

console.log("Object:", object);