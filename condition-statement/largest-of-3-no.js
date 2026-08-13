const prompt=require("prompt-sync")();
var a=prompt("Enter a number: ");
var b=prompt("Enter a number: ");
var c=prompt("Enter a number: ");
if(a>b){
    if(a>c){
        console.log(`${a} is greather than ${b} and ${c}`);
    }
}else if(b>c){
    console.log(`${b} is greather than ${a} and ${c}`);
}else{
    console.log(`${c} is greather than ${a} and ${b}`);

}