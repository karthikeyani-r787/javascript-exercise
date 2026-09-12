const user = {
    name: "Arun",
    address: {
        city: "Chennai",
        pincode: 600001
    },
    skills: ["HTML", "CSS", "JS"]
};

// Shallow Copy
const shallowCopy = { ...user };

shallowCopy.address.city = "Madurai";
shallowCopy.skills.push("React");

// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(user));

deepCopy.address.city = "Coimbatore";
deepCopy.skills.push("Node.js");

// Original object
console.log("Original city:", user.address.city);
console.log("Original skills:", user.skills);