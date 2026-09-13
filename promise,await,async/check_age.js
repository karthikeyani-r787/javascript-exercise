// Task : check age above 18
const prompt = require("prompt-sync")();
let age = Number(prompt("Enter your Age : "));
function checkAge(age){
    return new Promise((resolve , reject) => {
        if(age >= 18){
            resolve("Eligible");
        }else{
            reject("Not Eligible")
        }
    });
}
checkAge(age)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });