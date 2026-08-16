//Task : find largest number in array
let numbers = [45, 12, 78, 15, 34, 90];
let large=0;
for(let i=0;i<numbers.length;i++){
    if(large<numbers[i]){
        large=numbers[i]
    }
}
console.log(`Largest number of  array ${numbers} is : ${large}`)