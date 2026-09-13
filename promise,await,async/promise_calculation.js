// Task : Promise Calculation
function calci(){
    return new Promise((resolve , reject) => {
        resolve(10);
    })
}
function multi(a){
    return new Promise((resolve , reject) => {
        resolve(a * 2);
    })
}
function sum(a){
    return new Promise((resolve , reject) => {
        resolve(a + 5);
    })
}
function multiply(a){
    return new Promise((resolve , reject) => {
        resolve(a * 10);
    })
}
calci()
    .then((answer) => {
        return multi(answer);
    })
    .then((answer) => {
        return sum(answer);
    })
    .then((answer) => {
        return multiply(answer);
    })
    .then((answer) => {
        console.log(answer);
    })
    .catch((err) => {
        console.log(err);
    })