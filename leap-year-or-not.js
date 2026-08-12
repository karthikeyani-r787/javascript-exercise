const prompt=require("prompt-sync")();
var year=prompt("Enter the year: ");
if(year%4==0 && year%100!==0 || year%400==0){
    console.log(`${year} is leap year...`);   
}else{
    console.log(`${year} is not leap year...`);   
}