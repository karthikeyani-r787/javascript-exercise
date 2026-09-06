// Task : Total Cart Value
const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];
const result = cart.reduce((total , i ) => total += i.price * i.quantity,0);
console.log(`Total cart value :${result}`);