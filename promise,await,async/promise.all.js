// Task : practice promise.all()
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Received");
        }, 2000);
    });
}

function getOrders() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Orders Received");
        }, 2000);
    });
}

function getProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Products Received");
        }, 2000);
    });
}

async function getAllData() {
try{
    let result = await Promise.all([
        getUser(),
        getOrders(),
        getProducts()
    ]);

    console.log(result);
}catch(error){
    console.log("Error : ",error);
}
}
getAllData();