//TASK:  calculate grades
const prompt=require("prompt-sync")();
var mark=prompt("Enter your mark: ");
if (mark>=0 && mark<=100){
    if(mark>=90 && mark<=100){
        console.log("Your Grade is 'A' ");
    }else if(mark<90 && mark>79){
        console.log("Your Grade is 'B' ");
    }else if(mark<80 && mark>69){
        console.log("Your Grade is 'c' ");
    }else if(mark<70 && mark>59){
        console.log("Your Grade is 'D' ");
    }else{
        console.log("You Don't have Grade you are fail ");
    }
}else{
    console.log(`${mark} is not a mark Please Enter Valid Mark !`)
}