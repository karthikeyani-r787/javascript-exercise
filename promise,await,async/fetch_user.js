// Task : Fetch users
// Get users whose age >= 18
// Print their names
// Calculate their total age
function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { name: "Karthi", age: 21, active: true },
                { name: "Arun", age: 17, active: false },
                { name: "Priya", age: 25, active: true },
                { name: "Divya", age: 16, active: true }
            ]);
        }, 1000);
    });
}
async function user() {
    let result = await fetchUsers();
    let age = result.filter((r) => r.age >= 18);
    let name = age.map(a => a.name);
    let total = age.reduce((total , i) => total + i.age , 0)
    console.log(`Names : ${name}`);
    console.log(`Total Age : ${total}`)
}
user();