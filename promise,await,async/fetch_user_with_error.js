// Task : Fetch User with Error Handling
function getUser() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let success = false;

            if (success) {
                resolve({
                    name: "Karthi",
                    age: 21
                });
            } else {
                reject("Unable to fetch user");
            }

        }, 2000);
    });
}
async function displayUser() {
    try{
    let result = await getUser();
    console.log("Name : ",result.name);
    console.log("Age : ",result.age);
    }catch(error){
        console.log("Error: ",error);
    }
}
displayUser();
