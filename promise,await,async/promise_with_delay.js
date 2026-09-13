// Task : Promise with a Delay
function getUser() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve({name: "Karthi",age: 21})
        },2000)
    });
}
getUser()
    .then((result) => {
        console.log("Name:", result.name);
        console.log("Age:", result.age);
    })
    .catch((err) => {
        console.log(err);
    });