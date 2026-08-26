//Task : Login Simulation
const prompt=require("prompt-sync")();
let username=prompt("Enter your username : ");
let pwd=prompt("Enter your Password : ");
const msg=(msg)=>{
    console.log(msg);
}
function login(username, pwd, callback) {
    console.log("Please wait...")
    setTimeout(()=>{
        if(username === "Admin" && pwd === "12345"){
            callback("login successfull");
        }else{
            callback("Please Enter a valid username or password");
        }
    },2000);

}login(username,pwd,msg)