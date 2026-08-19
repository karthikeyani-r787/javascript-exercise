//Task : Find the Largest
const prompt=require("prompt-sync")();
let num1=parseInt(prompt("Enter a number : "));
let num2=parseInt(prompt("Enter a number : "));
function largest(a,b){
    if(a>b){
        console.log(`${a} is larger than ${b}`);
    }else{
     console.log(`${b} is larger than ${a}`);   
    }
}
largest(num1,num2);