//Task : Create a new array containing the square of each number.
const prompt=require("prompt-sync")();
let numbers = [];
let n=prompt("Enter the limit of array : ");
for(let i=0;i<n;i++){
    numbers[i]=prompt ("Enter the value at "+i+": ");
}
let square_no=[]
for(let i=0;i<n;i++){
    square_no[i]=numbers[i]**2
}
console.log("Square of array element "+numbers+" is : "+square_no)