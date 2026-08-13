const prompt=require("prompt-sync")();
var num=prompt("Enter a number : ");
if(num%5==0 && num%3==0){
    console.log(`${num} is divisible by 3 and 5`);
}else{
    console.log(`${num} is not divisible by 3 and 5`);
}