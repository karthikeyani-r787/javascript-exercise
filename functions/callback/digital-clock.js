//Task : Create a digital clock using setInterval().

console.log("Start...");
function showTime(){
    let now = new Date();
    let sec = String(now.getSeconds()).padStart(2,"0"); // used for profressional look digital clock
    let hours =String(now.getHours()).padStart(2,"0"); // syntax: padStart(targetLength, padString)
    let min = String(now.getMinutes()).padStart(2,"0");
    console.log(hours + ":" + min + ":" + sec);
}
setInterval(()=>{
    showTime();
    },1000);
