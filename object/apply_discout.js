//Task : Using map(), apply a 10% discount.
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Tablet", price: 20000 }
];
const discount = products.map(p=>({
    name : p.name,
    price : p.price - (p.price*(10/100))
}));
console.log(discount)