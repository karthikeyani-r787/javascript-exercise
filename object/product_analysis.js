// Task : Product Analysis
// Find:
// A. Products that are in stock.
// B. Names of all electronics.
// C. Total value of available electronics

const products = [
    { name: "Laptop", price: 55000, category: "electronics", stock: 5 },
    { name: "Phone", price: 25000, category: "electronics", stock: 10 },
    { name: "Shirt", price: 1500, category: "clothing", stock: 20 },
    { name: "Shoes", price: 3000, category: "clothing", stock: 0 },
    { name: "Tablet", price: 30000, category: "electronics", stock: 3 }
];

const stock = products.filter(p => p.stock > 0);
const elect = products.filter(p => p.category === "electronics")
    .map(p => p.name)

const expense = products.filter(p => p.category === "electronics" && p.stock>0)
    .reduce((total , i) => total + (i.price * i.stock), 0);


console.log(stock);
console.log(elect);
console.log(expense);