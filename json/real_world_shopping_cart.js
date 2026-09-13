// Task : Real-World Shopping Cart
const cart = {
    user: "Karthi",
    items: [
        {
            name: "Laptop",
            price: 50000,
            quantity: 1
        },
        {
            name: "Mouse",
            price: 800,
            quantity: 2
        }
    ]
};

// Create a shallow copy
// Add Keyboard using spread operator
const shallowcopy = {
    ...cart,
    items: [
        ...cart.items,
        {
            name: "Keyboard",
            price: 1200,
            quantity: 1
        }
    ]
};

console.log("Shallow Copy:", shallowcopy);

// Create a deep copy
const deepcopy = JSON.parse(JSON.stringify(cart));

// Change Laptop quantity to 2
const laptop = deepcopy.items.find(d => d.name === "Laptop");
laptop.quantity = 2;

console.log("Deep Copy:", deepcopy);

// Convert final cart to JSON
const json_cart = JSON.stringify(deepcopy);

console.log("JSON:", json_cart);

// Parse JSON back to object
const object_cart = JSON.parse(json_cart);

console.log("Object:", object_cart);

// Calculate total price
const total = deepcopy.items.reduce(
    (total, i) => total + i.price * i.quantity,
    0
);

console.log("Total:", total);