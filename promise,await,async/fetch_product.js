// Task : Fetch products
// Filter products where price > 1000
// Print their names
// print Total
function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Laptop", price: 50000 },
                { id: 2, name: "Mouse", price: 800 },
                { id: 3, name: "Keyboard", price: 1500 }
            ]);
        }, 1000);
    });
}
async function result() {
    let data = await fetchProducts();
    let product = data.filter( (d) => d.price > 1000)
    let pname = product.map((d) => d.name)
    let total = product.reduce((total , i ) => total + i.price , 0)
    console.log(`Name : ${pname}`);
    console.log(`Total : ${total}`);
}
result();