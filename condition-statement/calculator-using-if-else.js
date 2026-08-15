const prompt=require("prompt-sync")();
let a=Number(prompt("Enter a number: "));
let b=Number(prompt("Enter a number: "));
// if(a==0 && b==0 || a!=0 || b!=0 || a<0 && b<0 || a>0 && b>0){
if(/[/0-9]/.test(a) && /[/0-9]/.test(b)){
    let c=prompt("Enter operation (+,-,*,/,%): ");
// if (!isNaN(a) && !isNaN(b)) {
//     // Calculator code
// } else {
//     console.log("Please enter valid numbers.");
// }
// if (!Number.isNaN(a) && !Number.isNaN(b)) {
//     // Calculator code
// }
    if(c==='+'){
        console.log(`Addition of ${a} and ${b} is: ${a+b}`);
    }else if(c=='-'){
        console.log(`Subtraction of ${a} and ${b} is: ${a-b}`);
    }else if(c=='*'){
        console.log(`Mulitiplicaion of ${a} and ${b} is: ${a*b}`);
    }else if(c=='/'){
        console.log(`Division of ${a} and ${b} is: ${a/b}`);
    }else if(c=='%'){
        console.log(`Reminder of ${a} and ${b} is: ${a%b}`);
    }else{
        console.log("Operation is defined...")
    }
}else{
    console.log("please enter a valid input...")
}