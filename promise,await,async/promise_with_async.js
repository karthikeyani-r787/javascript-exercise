// Task : Inside displayData():
// 1. Call getData()
// 2. Use await to wait for the Promise.
// 3. Store the result in a variable.
// 4. Print the result.
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data loaded");
        }, 2000);
    });
}
async function displayData() {
    let result = await getData();
    console.log(result);
}
displayData();