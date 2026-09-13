// Task : Async/Await with Object
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Karthi",
                role: "Frontend Developer",
                skills: ["HTML", "CSS", "JavaScript"]
            });
        }, 1500);
    });
}
async function displayUser(){
    let result = await getUser();
    console.log(result.name);
    console.log(result.role);
    console.log(result.skills.join(" "));
}
displayUser();
