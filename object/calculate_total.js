// Task : E-Commerce Order Analysis  
// Calculate the total amount spent by each customer.
const orders = [
    {
        customer: "Arun",
        items: [
            { name: "Laptop", price: 50000, quantity: 1 },
            { name: "Mouse", price: 1000, quantity: 2 }
        ]
    },
    {
        customer: "Priya",
        items: [
            { name: "Phone", price: 25000, quantity: 1 },
            { name: "Headset", price: 2000, quantity: 2 }
        ]
    }
];

const result = orders.map(o => {
    let sum = o.items.reduce((sum , o) => sum + o.price * o.quantity , 0)
    return {
        customer : o.customer,
        total : sum
    };
});
console.log(result);