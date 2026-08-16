//Task : Search for an element
const prompt=require("prompt-sync")();
let array=[];
let n=prompt("Enter the length of the array : ");
for (let i=0;i<n;i++){
    array[i]=prompt(`Enter array value at index ${i} : `)
}
let search = prompt("Enter the search element : ");
for (let i=0;i<array.length;i++){
    if(array[i]===search){
        console.log(` ${search}  found`)
    }
}console.log(`your array is [${array}]`)
