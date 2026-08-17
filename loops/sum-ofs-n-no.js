//task : Find the sum of numbers from 1 to n.
const prompt=require("prompt-sync")();
let n=prompt("Enter a Number : ");
if(/[0-9]/.test(n)){
    let i=1;
    sum=0
    while(i<=n){
        sum+=i;
        i++;
    }
    console.log(`sum of numbers from 1 to ${n} : ${sum}`)
}