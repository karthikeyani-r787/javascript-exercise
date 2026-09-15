// Task : Multiple API calls with Promise.all()
function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Karthi" },
                { id: 2, name: "Arun" },
                { id: 3, name: "Priya" }
            ]);
        }, 2000);
    });
}

function fetchOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { userId: 1, amount: 5000 },
                { userId: 2, amount: 3000 },
                { userId: 3, amount: 7000 }
            ]);
        }, 2000);
    });
}

function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: "Laptop", price: 50000 },
                { name: "Mouse", price: 800 }
            ]);
        }, 2000);
    });
}

// Inside an async function:
async function result(){
    // 1. Use Promise.all() to fetch all 3.
    try{
        let data = await Promise.all([
                    fetchUsers(),
                    fetchOrders(),
                    fetchProducts(),
                    ]);

    // 2. Print the users.

        let user = data[0].map( d => d.name);
        console.log(`Users : ${user}`);

    // 3. Calculate the total order amount using reduce().
        
        let total = data[1].reduce( (total , i) => total + i.amount , 0);
        console.log("Total Order Amount : ",total);

    // 4. Find products with price > 1000 using filter().

        let product = data[2].filter( d => d.price > 1000);
        console.log(product);

    // 5. Print their names using map().

        let name = product.map( p => p.name);
        console.log("Expensive Products : ",name);
}catch(err){
    console.log("Error : ",err);
}
}
result();