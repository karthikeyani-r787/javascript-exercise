function loginUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Login Successful");
        }, 1000);
    });
}

function getUserDetails() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("User Details Received");
        }, 1000);
    });
}

function getOrders() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Orders Received");
        }, 1000);
    });
}

loginUser()
    .then((result) => {
        console.log(result);
        return getUserDetails();
    })
    .then((result) => {
        console.log(result);
        return getOrders();
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });