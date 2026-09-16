// Task : Find the first successful server
// Inside an async function:
// 1. Use Promise.any()
// 2. Use try...catch
// 3. Print the result.
function server_A(server) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (server)?resolve("Server A responded"):reject("Server A failed");
        }, 1000);
    });
}

function server_B(server) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            (server)?resolve("Server B responded"):reject("Server B failed");
        }, 3000);
    });
}

function server_C(server) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            (server)?resolve("Server C responded"):reject("Server C failed");
        }, 2000);
    });
}
async function result() {
    try{
    let server = await Promise.any([
        server_A(false),
        server_B(true),
        server_C(true)
    ]);
    console.log(server)
    }catch(err){
        console.log("Error : ",err)
    }
}
result();