// Task : Sum of array using reduce()
const numbers = [10, 20, 30, 40, 50];
let sum =0;
const result = numbers.reduce((sum , i ) =>{
    sum = sum + i;
    },0);

console.log(result)