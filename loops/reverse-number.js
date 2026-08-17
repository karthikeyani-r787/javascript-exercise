//task : Reverse a number.
const prompt=require("prompt-sync")();
let num=prompt("Enter a number : ")
if(/[0-9]/.test(num)){
    let n=num;
    let rem=0;//last digit
    let rev='';
    while(n>0){
        rem=n%10;
        rev=rev*10 + rem
        n=parseInt(n/10);
    }console.log(`Reverse of ${num} is ${rev}`)
}else{
    console.log("Please Enter a Valid Input...")
}