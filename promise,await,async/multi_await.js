// Task : Multiple await + try...catch
function getUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("User Received");
        },1000)
    })
}function getOrders(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Orders received");
        },1000)
    })
}
function getPayment(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            let success = false;

            if (success) {
                resolve("Payment Successful");
            } else {
                reject("Payment Failed");
            }
        },1000)
    })
}
async function showDetails() {
    try {
        let user = await getUser();
        console.log(user);
        let orders = await getOrders();
        console.log(orders);
        let payment = await getPayment();
        console.log(payment);
    }
    catch (error) {
       console.log("Error:",error);
    }
}
showDetails();