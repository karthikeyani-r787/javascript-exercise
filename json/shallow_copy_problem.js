// Task : Shallow Copy Problem
const product = {
    name: "Laptop",
    price: 50000,
    details: {
        brand: "HP",
        ram: "8GB"
    }
};
const copy = {...product};
copy.details.ram = "16GB";
console.log("Copy Object After Modifing...")
console.log(copy);
console.log("Original Object...");
console.log(product);