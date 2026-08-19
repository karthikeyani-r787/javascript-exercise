//Task : Check Even or Odd
const prompt=require("prompt-sync")();
let num=prompt("Enter a number : ");
function CheckOddorEven(n){
    if(n%2==0){
        console.log(`${n} is Even`);
    }else{
        console.log(`${n} is odd`);
    }
}
CheckOddorEven(num);