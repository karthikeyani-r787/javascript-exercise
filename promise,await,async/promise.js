// Task : Create a Promise called myPromise.
// - After 2 seconds, it should resolve with "Data received successfully".
// - Use .then() to print the result.
// - Use .catch() to handle errors.
function mypromise(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
           resolve("Data received successfully");
        },2000);
    });
}
mypromise()
    .then((result) => {console.log(result)})
    .catch((error) => {console.log(error)});