//task : Check whether a number is a palindrome.
const prompt=require("prompt-sync")();
let num=prompt("Enter a number : ");
if(/[0-9]/.test(num)){
    let n=num,rem=0,rev=0;
    while(n>0){
        rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    console.log(`Reverse of ${num} is ${rev}`);
    if (num==rev){
        console.log(`${num} is a Palindrome`);
    }else{
        console.log(`${num} is not a Palindrome`);
    }
}else{
    console.log("Please Enter a Valid Input...")
}