//Task : stop watch
const prompt = require("prompt-sync")();
let stop =parseInt(prompt("Enter stop sec : "));
let sec=0;  
let show =  setInterval(() => {
    sec++;
    console.log("second : ",sec);
    if(sec === stop){
        console.log("Time stopped");
        clearInterval(show);
    
}
} ,1000);