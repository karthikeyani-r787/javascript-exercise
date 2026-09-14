// Task : Promise.race() without failure
function server_A(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server A responsed.");
        },3000);
    });
}
function server_B(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server B responsed.");
        },1000)
    })
}
function server_C(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Server c responsed.");
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