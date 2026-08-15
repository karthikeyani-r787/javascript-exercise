//task : Create a calculator using switch.
const prompt=require("prompt-sync")();
let num1=Number(prompt("Enter a Number : "));
let num2=Number(prompt("Enter a Number : "));
if(/[0-9]/.test(num1 && num2)){
var result = prompt("Enter a Operation (+,-,*,/,%) : ");
switch(result){
    case '+':
        console.log(`Addition of ${num1} and ${num2} : ${num1+num2} `);
        break;
    case '-':
        console.log(`Subtraction of ${num1} and ${num2} : ${num1-num2} `);
        break;
    case '*':
        console.log(`Multiplication of ${num1} and ${num2} : ${num1*num2} `);
        break;
    case '/':
        console.log(`Division of ${num1} and ${num2} : ${num1/num2} `);
        break;
    case '%':
        console.log(`Reminder of ${num1} and ${num2} : ${num1%num2} `);
        break;
    default:
        console.log("Please Enter a valid Operation...")
    }

}else{
    console.log("Please Enter a Valid Input...")
}
