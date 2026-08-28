//Task :Stop watch/clock
const prompt = require("prompt-sync")();
let stop = parseInt(prompt("Enter stop time : "));
console.log("Start...");
function start(){
    let now = new Date();
    let hour = String(now.getHours()).padStart(2,"0");
    let min = String(now.getMinutes()).padStart(2,"0");
    let sec = now.getSeconds();
    let display_sec = String(now.getSeconds()).padStart(2,"0");
    console.log(hour + ":" + min + ":" + display_sec);
    if(sec === stop){
        console.log("Stop Time...");
        clearInterval(s);

    }
}
let s = setInterval(()=>{
    start();
},1000);


