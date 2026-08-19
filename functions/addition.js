//Task : Add Two Numbers
const prompt=require("prompt-sync")();
let num1=parseInt(prompt("Enter a number : "));
let num2=parseInt(prompt("Enter a number : "));
function add(a,b){
    return a+b;
}
console.log("Addition of given number is :",add(num1,num2));