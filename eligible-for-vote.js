const prompt=require("prompt-sync")();
var age=prompt("Enter your Age : ");
if(age>=18 && age<110){
    console.log(`your age is ${age} so you are ELIGIBLE for voting...  `);
}else if(age<18 && age>=11 ){
    console.log(`You are age${age} so you are in TeenAge (NOT ELIGIBLE for voting...)`);
}else if(age>0&&age<11){
    console.log(`you are age is ${age} so your a CHILD (NOT ELIGIBLE FOR VOTING...) `);
}else{
    console.log(`${age} is not a age`);
}