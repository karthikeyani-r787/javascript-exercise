//Task : Find the second largest
let numbers = [10, 50, 30, 80, 40, 70];
let large=0,second_large=0;
for(let i=0;i<numbers.length;i++){
    if(large<numbers[i]){
        second_large=large;
        large=numbers[i];
        }
        else if(second_large<numbers[i]){
            second_large=numbers[i];
        }
}
console.log(`The Second Largest Element is: ${second_large}`);