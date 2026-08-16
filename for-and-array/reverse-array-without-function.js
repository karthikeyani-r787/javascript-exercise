//Task : Reverse into a new array
let numbers = [1, 2, 3, 4, 5];
for(let i=numbers.length;i>=0;i--){
    console.log(numbers[i])
}
//alternate way
let reversed=[];
for(let i=numbers.length;i>0;i--){
    reversed.push(i);
}
    console.log(reversed)