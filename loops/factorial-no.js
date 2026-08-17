// task : Find the factorial of a number.
const prompt=require("prompt-sync")();
let num=prompt("Enter a number : ")
if(/[0-9]/.test(num)){
    let fact=1;
    let i=1;
    while(i<=num){
        fact=fact*i;
        i++;
    }
    console.log(`Factorial of ${num} is ${fact}`)
}else{
    console.log("Please Enter a Valid Input...")
}