// task : Find the sum of digits of a number.
const prompt=require("prompt-sync")();
let num=prompt("Enter a number : ");
if(/[0-9]/.test(num)){
    let n=num,rem=0,sum=0;
    while(n>0){
        rem=n%10;
        sum+=rem;
        n=parseInt(n/10);
    }
    console.log(`sum of digit ${num} is ${sum}`)
}else{
    console.log("Please Enter a valid Input...")
}