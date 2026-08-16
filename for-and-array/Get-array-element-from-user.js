//Task : Get input from user and add it to the array
const prompt=require("prompt-sync")();
let array=[];
let n=prompt("Enter the length of the array : ");
for (let i=0;i<n;i++){
    array[i]=prompt(`Enter array value at index ${i} : `)
}
console.log(`your array is [${array}]`)
