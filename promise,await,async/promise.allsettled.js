// Task : Promise.allSettled() 
function server_A(){
    return new Promise((resolve,reject) => {
        let success = true;
        setTimeout(() => {
            if(success) resolve("Server A responsed.");
            else reject(new Error("Server A failed"));
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
    return new Promise((resolve,reject) => {
        let success = true;
        setTimeout(() => {
            if(success) resolve("Server C responsed.");
            else reject(new Error("Server C failed"));
        },2000)
    })
}
function server_D(){
    return new Promise((resolve,reject) => {
        let success = false;
        setTimeout(() => {
            if(success) resolve("Server D responsed.");
            else reject(("Server D failed"));
        },2000)
    })
}
async function execute(){
    try{
    let result = await Promise.allSettled([
        server_A(),
        server_B(),
        server_C(),
        server_D()
    ]
    );
    console.log(result);
}catch(error){
    console.log("Error: ",error);
}
}
execute();
