//task : Count the number of digits in a number.
const prompt=require("prompt-sync")();
let num=prompt("Enter a number : ")
if(/[0-9]/.test(num)){
    let n=num;
    let count=0;
    let i=1;
    while (n>0){
        n=parseInt(n/10);
        count++;
    }
    console.log(`Number digit in ${num} is ${count}`)
}else{
    console.log("Please Enter a valid Input...")
}