// Task : Shopping Cart
const cart = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 }
];

function calculateTotal(cart) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let total = 0;
            for(let i = 0 ; i<cart.length ; i++){
                total = total + cart[i].price ;
            }
            resolve({cart : cart ,
                total : total
            });
        },1500);
    });
}
async function result(){
    try{
    let data = await calculateTotal(cart);
    console.log("Your Cart Total is...")
    console.log(`Total : ${data.total}`);
    }catch(err){
        console.log("Error: " ,err);
    }
}
console.log("Your Cart is...")
console.log(cart);
result();