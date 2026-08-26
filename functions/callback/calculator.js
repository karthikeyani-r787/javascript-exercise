//Task : Calculator with Callback
const prompt=require("prompt-sync")();
let a=true;
const add=(a,b)=>{
    return a+b;
}
const subtract=(a,b)=>{
    return a-b;
}
const multi=(a,b)=>{
    return a*b;
}
const div=(a,b)=>{
    return a/b;
}

function calculate(n1,n2,operate){
    return operate(n1,n2);
}
while(a){
console.log("1.Addition");
console.log("2.Subtraction");
console.log("3.Multiplication");
console.log("4.Division");
console.log("5.Exit");
let n=parseInt(prompt("Select a number : "));
const exit=()=>{
    return "Thanks for using calculator!";
}
if(n===5){
    a=false;
    console.log(exit())
    break;
}else if(n<5 && n>0){
let num1=parseInt(prompt("Enter a number : "));
let num2=parseInt(prompt("Enter a number : "));

switch(n){
case 1:
    console.log(calculate(num1,num2,add));
    break;
case 2:
    console.log(calculate(num1,num2,subtract));
    break;
case 3:
    console.log(calculate(num1,num2,multi));
    break;
case 4:
    console.log(calculate(num1,num2,div));
    break;
default:
    console.log("Please select a valid number");
    break;
}
}else{
    console.log("Please select a valid input between 1 - 5 !");
}
}


