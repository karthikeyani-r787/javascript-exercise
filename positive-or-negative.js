//TASK: Check whether a number is positive or negative
// const prompt=require("pormpt-sync")();
const prompt = require("prompt-sync")();
var number=prompt("Enter a number : ");
if(number > 0){
    console.log(`${number} is Positive`);
}else if(number < 0){
    console.log(`${number} is Negative`);
}else if(number == 0){
    console.log(`${number} is Not A Zero`);
}else{
    console.log(`${number} is Not A Number`);

}