//Task : Find the smallest number
let numbers = [45, 12, 78, 15, 34, 90];
let small=1000;
for(let i=0;i<numbers.length;i++){
    if(small>numbers[i]){
        small=numbers[i]
    }
}
console.log(`Smallest Number in the array is :${small}`)