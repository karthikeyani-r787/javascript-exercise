//Task : Student Result
const prompt=require("prompt-sync")();
let name=prompt("Enter a name : ")
let mark=parseInt(prompt("Enter your mark : "));
const pass=(name,mark)=>{
   return {
    name : name,
    mark : mark,
    result : "Student Passed"}
    ; 
}
const fail=(name,mark)=>{
    
    return {
    name : name,
    mark : mark,
    result : "Student failed"}
    ; 
}
function student(name, mark,callback) {
    return callback(name,mark);
}
if(mark>=40){
        console.log(student(name,mark,pass));
    }else{

        console.log(student(name,mark,fail));
    }
