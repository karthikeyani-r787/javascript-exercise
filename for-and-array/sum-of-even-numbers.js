//Task : Find the sum of even numbers
let numbers = [10, 15, 20, 25, 30, 35];
let sum=0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        sum+=numbers[i];
    }
}
console.log(sum);