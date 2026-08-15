//TASK Check whether a number is even or odd
const prompt=require("prompt-sync")();
var number=prompt("Enter a number: ");
console.log("By Using if-else condition...")
if (number %2==0){
    console.log(`${number} is Even`);
}else{
    console.log(`${number} is Odd`);
}
console.log("By Using Ternary Operator...")
console.log((number%2==0)?`${number} is Even`:`${number} is Odd`);
