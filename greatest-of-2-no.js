const prompt=require("prompt-sync")();
var a=prompt("Enter a number: ");
var b=prompt("Enter a number: ");
if (a>b){
    console.log(`${a} is greater than ${b}`);
}
else{
    console.log(`${b} is greater than ${a}`);
}