// Task : Promise.race() with failure
function server_A(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server A responsed.");
        },3000);
    });
}
function server_B(){
    return new Promise((resolve,reject) => {
        let success = false;
        setTimeout(() => {
            if(success) resolve("Server B responsed.");
            else reject(new Error("Server B failed"));
        },1000)
    })
}
function server_C(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server C responsed.");
        },2000)
    })
}
async function execute(){
    try{
    let result = await Promise.race([
        server_A(),
        server_B(),
        server_C()
    ]
    );
    console.log(result);
}catch(error){
    console.log("Error: ",error);
}
}
execute();