// task : Print the multiplication table of a given number.
const prompt=require("prompt-sync")();
let number =prompt("Enter a number : ");
let limit= prompt("Enter the Limit : ")
if(/[0-9]/.test(number) && /[0-9]/.test(limit)){
    let i=1;
    console.log("Multiplication table of",number,"from 1 to",limit)
    while(i<=limit){
        console.log(`${i} * ${number} = ${i*number}`);
        i++;
    }
}else{
    console.log("Please Enter a valid number and limit...")
}