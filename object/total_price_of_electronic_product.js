// Task : Find the total price of electronics.
const products = [
    { name: "Laptop", price: 50000, category: "electronics" },
    { name: "Shirt", price: 1200, category: "clothing" },
    { name: "Phone", price: 25000, category: "electronics" },
    { name: "Shoes", price: 3000, category: "clothing" }
];

const result = products
    .filter(c => c.category === "electronics") 
    .reduce((total , i) => total + i.price , 0);

console.log(`Total price of electronics : ${result}`);