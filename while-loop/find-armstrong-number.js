//task : Check whether a number is an Armstrong number.
const prompt=require("prompt-sync")();
let num=prompt("Enter a number : ");
if(/[0-9]/.test(num)){
    let n=num;rem=0;sum=0;
    while(n>0){
        rem=n%10;
        sum=sum+(rem**3);
        n=Math.floor(n/10);
    }if(num==sum){
        console.log(`${num} is a Armstrong Number`);

    }else{
        console.log(`${num} is not a Armstrong Number`);
   
    }
}else{
    console.log("Please Enter a Valid Input...")
}