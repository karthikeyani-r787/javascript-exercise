// Task : Total Price
const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

const result = cart.reduce((total , i ) => total + i.price , 0);
console.log(result)