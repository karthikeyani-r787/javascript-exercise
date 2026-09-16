// Task : Retry Failed API
// Imagine an API sometimes fails.
const prompt = require("prompt-sync")();
function fetchData(res){
    return new Promise((resolve , reject) => {
        if(res === "true") resolve("Data Received");
        else reject("Network error");
    });
}
async function fetch() {
    
    let data =prompt("Fetch Data status (true / false): ");
    let attempt = 1;

    while(attempt<=3){
       
        try{
            let result = await fetchData(data);
            console.log(result);
            break;
        }

        catch(err){
            console.log("Error : ",err);
            attempt++;

            if(attempt>3) console.log("Failed after 3 attempts");

        }
    }
}
fetch();